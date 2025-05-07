# Travel-Tracker
# Travel Tracker

The Travel Tracker is a full-stack web application that lets users track the countries they’ve visited. It highlights selected countries on a world map and maintains a count of total visits.

---

## Features

- Search and add countries you've visited
- Stores data in a PostgreSQL database
- Highlights visited countries on a world SVG map
- Displays a running total of visited countries
- Handles duplicate entries and invalid country names gracefully

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, EJS (Embedded JavaScript templates)
- **Database**: PostgreSQL
- **Other Tools**: Body-parser, pg (node-postgres)

---

## Project Structure

travel-tracker/
│
├── public/ # Static files (CSS, SVG map)
│ └── styles/
│ └── main.css
│
├── views/
│ └── index.ejs # Main template
│
├── app.js # Express server logic
├── package.json # Project dependencies and scripts
└── README.md

---

## How It Works

1. User types a country name and submits the form.
2. The server checks if the country exists in the `countries` table.
3. If valid and not already added, it inserts the country code into `visited_countries`.
4. The homepage re-renders, and the corresponding country is highlighted on the map.

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/travel-tracker.git
cd travel-tracker

### 2. Install dependencies
bash
npm install

### 3. Set up PostgreSQL
Create a PostgreSQL database named world and run the following schema:

sql
CREATE TABLE countries (
  country_code VARCHAR(3) PRIMARY KEY,
  country_name VARCHAR(100) NOT NULL
);

CREATE TABLE visited_countries (
  id SERIAL PRIMARY KEY,
  country_code VARCHAR(3) REFERENCES countries(country_code) ON DELETE CASCADE
);
Populate the countries table with valid country names and their ISO 3166-1 alpha-3 codes.

### 4. Configure your database connection in app.js
js
const db = new pg.Client({
  user: "your_postgres_username",
  host: "localhost",
  database: "world",
  password: "your_postgres_password",
  port: 5432,
});
### 5. Run the app
bash
node app.js
Visit: http://localhost:3000

✅ To-Do
Add success toast/message when a country is added

Improve form validation

Mobile responsiveness

Add user accounts for personal tracking

## License
This project is licensed under the MIT License.

## Acknowledgements
SVG World Map

PostgreSQL for data management

Express & EJS for rapid development

Made by [Linusman]
