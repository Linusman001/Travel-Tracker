import express from "express";
import bodyParser from "body-parser";
import pg from "pg"
const app = express();
const port = 3000;
const log = console.log

app.set("view engine", 'ejs')
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "addYours",
  port: 5432
})
db.connect()

async function getVisitedCountries() {
  const result = await db.query("SELECT country_code FROM visited_countries")
  log(result)
  let countries = result.rows.map((code) => code.country_code)
  log(countries)

  return countries
}

app.get("/", async (req, res) => {
  //Write your code here.
  const countries = await getVisitedCountries()
  res.render("index", {
    total: countries.length,
    countries: countries.join(",")
  })

});

app.post('/add', async (req, res) => {
  let countryName = req.body.country.trim()
  log(countryName)
  let country_code
  try {
    const result = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE'%'  || $1 || '%'", [countryName.toLowerCase()])

    if (result.rows.length === 0) {
      const countries = await getVisitedCountries()
      return res.render('index', {
        total: countries.length,
        countries: countries.join(","),
        error: "Country Does Not Exist, Try Again"
      })
    }

    country_code = result.rows[0].country_code
  } catch (err) {
    console.error(err.stack)
  }

  try {
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [country_code])
    return res.redirect('/')

  } catch (err) {
    console.error("Error adding country", err.stack)
    const countries = await getVisitedCountries()
    return res.render('index', {
      total: countries.length,
      countries: countries.join(","),
      error: "Country Already Added, Try Again"
    })
  }
})
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});