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
const app = express();

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
  res.render("index");
});

// NodeJS Express to serve static file
app.use(express.static(path.join(__dirname, "./public")));

// app.get("/test", (req, res) => {
//   res.send("🤗");
// });

app.listen(PORT, () => {
  console.log(`ToDo-List app listening on Port: ${PORT} 😈`);
});
