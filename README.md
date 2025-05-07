# Travel-Tracker
# í¼ Travel Tracker

The Travel Tracker is a full-stack web application that lets users track the countries theyâ€™ve visited. It highlights selected countries on a world map and maintains a count of total visits.

---

## íº€ Features

- Search and add countries you've visited
- Stores data in a PostgreSQL database
- Highlights visited countries on a world SVG map
- Displays a running total of visited countries
- Handles duplicate entries and invalid country names gracefully

---

## í» ï¸ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, EJS (Embedded JavaScript templates)
- **Database**: PostgreSQL
- **Other Tools**: Body-parser, pg (node-postgres)

---

## í³ Project Structure

travel-tracker/
â”‚
â”œâ”€â”€ public/ # Static files (CSS, SVG map)
â”‚ â””â”€â”€ styles/
â”‚ â””â”€â”€ main.css
â”‚
â”œâ”€â”€ views/
â”‚ â””â”€â”€ index.ejs # Main template
â”‚
â”œâ”€â”€ app.js # Express server logic
â”œâ”€â”€ package.json # Project dependencies and scripts
â””â”€â”€ README.md

yaml
Copy
Edit

---

## í·‘â€í²» How It Works

1. User types a country name and submits the form.
2. The server checks if the country exists in the `countries` table.
3. If valid and not already added, it inserts the country code into `visited_countries`.
4. The homepage re-renders, and the corresponding country is highlighted on the map.

---

## âš™ï¸ Setup Instructions

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

âœ… To-Do
Add success toast/message when a country is added

Improve form validation

Mobile responsiveness

Add user accounts for personal tracking

í³„ License
This project is licensed under the MIT License.

í¹Œ Acknowledgements
SVG World Map

PostgreSQL for data management

Express & EJS for rapid development

Made with í²š by [Your Name]

# í¼ Travel Tracker

The Travel Tracker is a full-stack web application that lets users track the countries theyâ€™ve visited. It highlights selected countries on a world map and maintains a count of total visits.

---

## íº€ Features

- Search and add countries you've visited
- Stores data in a PostgreSQL database
- Highlights visited countries on a world SVG map
- Displays a running total of visited countries
- Handles duplicate entries and invalid country names gracefully

---

## í» ï¸ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, EJS (Embedded JavaScript templates)
- **Database**: PostgreSQL
- **Other Tools**: Body-parser, pg (node-postgres)

---

## í³ Project Structure

travel-tracker/
â”‚
â”œâ”€â”€ public/ # Static files (CSS, SVG map)
â”‚ â””â”€â”€ styles/
â”‚ â””â”€â”€ main.css
â”‚
â”œâ”€â”€ views/
â”‚ â””â”€â”€ index.ejs # Main template
â”‚
â”œâ”€â”€ app.js # Express server logic
â”œâ”€â”€ package.json # Project dependencies and scripts
â””â”€â”€ README.md

yaml
Copy
Edit

---

## í·‘â€í²» How It Works

1. User types a country name and submits the form.
2. The server checks if the country exists in the `countries` table.
3. If valid and not already added, it inserts the country code into `visited_countries`.
4. The homepage re-renders, and the corresponding country is highlighted on the map.

---

## âš™ï¸ Setup Instructions

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

âœ… To-Do
Add success toast/message when a country is added

Improve form validation

Mobile responsiveness

Add user accounts for personal tracking

í³„ License
This project is licensed under the MIT License.

í¹Œ Acknowledgements
SVG World Map

PostgreSQL for data management

Express & EJS for rapid development

Made with í²š by [Linusman]


