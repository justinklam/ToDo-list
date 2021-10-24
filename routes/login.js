// As per Lecture notes - Simple login. No login buttons, no passwords are required. NO REGISTRATION.
// *** Simply type homepage address: localhost8080/login + id, ex localhost8080/login1. ***

// add resource routes to server.js.
//app.use("/login", loginRoutes(db));

// add to server.js. This func is responsible for handling the urls
//const loginRoutes = require("./routes/login");

//                                    *** when logging in use localhost8080/login1 ***

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // if you receive GET request, with id, retrieve the id from req.params, and put inside the req.session.user_id
  //then redirect user to homepage

  router.get("/:id", (req, res) => {
    req.session.user_id = req.params.id;

    // create a GET request aiming for this path, ie: homepage
    res.redirect("/");
  });

  return router;
};
