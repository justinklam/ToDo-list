const { Pool } = require('pg');
const dbParams = require('../config/db.js');

const pool = new Pool(dbParams);

// GET ALL USERS FROM DATABASE
const getAllUsers = function() {
  let queryString = `
  SELECT * FROM users;
  `;
  return pool
    .query(queryString)
    .then((res) => res.rows);
};

exports.getAllUsers = getAllUsers;

// REGISTER A NEW USER
const createNewUser = function(name, email, password) {
  const queryString = `
  INSERT INTO users(${name}, ${email}, ${password})
  VALUES ($1, $2, $3)
  RETURNING *;
  `;

  const params = [user.name, user.email, user.password];

  return pool
    .query(queryString, params)
    .then((res) => res.rows)
    .catch((err) => {
      console.log(err.message);
    });
};

exports.createNewUser = createNewUser;

// LOGIN USER
const userLogin = function(email, password) {
  let queryString = `
  SELECT * FROM users;
  `;
  return pool.query(queryString)
    .then((res) => res.rows);
};

// GET ALL TODO LISTS
const getAllLists = function() {
  let queryString = `
  SELECT * FROM users;
  `;
  return pool.query(queryString)
    .then((res) => res.rows);
};
