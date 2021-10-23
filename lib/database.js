const { Pool } = require('pg');
const dbParams = require('../config/db.js');

const pool = new Pool(dbParams);

// GET ALL USERS FROM DATABASE
const getAllUsers = function() {
  let queryString = `
  SELECT * FROM users;
  `;
  return pool.query(queryString)
    .then((res) => res.rows);
};

exports.getAllUsers = getAllUsers;

// REGISTER A NEW USER
const createNewUser = function() {
  let queryString = `
  SELECT * FROM users;
  `;
  return pool.query(queryString)
    .then((res) => res.rows);
};

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
