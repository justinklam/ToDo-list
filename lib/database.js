const { Pool } = require('pg');
const dbParams = require('../config/db.js');

const pool = new Pool(dbParams);

// get all users from database
const getAllUsers = function() {
  let queryString = `
  SELECT * FROM users;
  `;
  return pool.query(queryString)
    .then((res) => res.rows);
};

exports.getAllUsers = getAllUsers;

const createNewUser = function() {
  let queryString = `
  SELECT * FROM users;
  `;
  return pool.query(queryString)
    .then((res) => res.rows);
};

const userLogin = function(email, password) {
  let queryString = `
  SELECT * FROM users;
  `;
  return pool.query(queryString)
    .then((res) => res.rows);
};
