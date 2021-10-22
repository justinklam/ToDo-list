const { Pool } = require('pg');
const dbParams = require('../config/db.js');

const pool = new Pool(dbParams);

const getAllUsers = function() {
  let queryString = `
  SELECT * FROM users;
  `;

  return pool.query(queryString)
    .then((res) => res.rows);
};

exports.getAllUsers = getAllUsers;
