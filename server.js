// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const cookieSession = require("cookie-session");
const morgan = require("morgan");
const path = require("path");

const database = require("./lib/database");
const apiRoutes = require("./lib/apiRoutes");
const dbParams = require("./config/db");
const app = express();

// PG database client/connection setup - unneeded
// const { Pool } = require("pg");
// const dbParams = require("./lib/db.js");
// const db = new Pool(dbParams);
// db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
const apiRouter = express.Router();
apiRoutes(apiRouter, database);
app.use("/api", apiRouter);

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  // req.session.user_id will read the id from cookies
  const userId = req.session.user_id;
  if (userId) {
    // query the database
    db.query("SELECT * FROM users WHERE id = $1", [userId])
      .then((data) => {
        console.log(data.rows[0]);

        //render page with template vars, taken from ejs file, that will show name on homepage once logged in.
        // (the object that results from data.rows is the object, and we use the name key here)
        res.render("index", { name: data.rows[0].name });
      })
      .catch((error) => {
        console.log("Error message for login: ", error.message);
        // res.status()
      });
  }
});

// NodeJS Express to serve static file
app.use(express.static(path.join(__dirname, "./public")));

app.get("/test", (req, res) => {
  res.send("🤗");
});

app.listen(PORT, () => {
  console.log(`ToDo-List app listening on Port: ${PORT} 😈`);
});
