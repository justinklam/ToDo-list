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

// GET USER EMAIL
const getUserEmail = function(email) {
  let user;
  let queryString = `
  SELECT * FROM users
  WHERE email = $1
  `;
  const params = [email];
  return pool.query(queryString, params)
    .then((res) => {
      if (!res.rows[0]) {
        return null;
      } else {
        res.rows[0] = res.rows[0];
      }
    });
};

exports.getUserEmail = getUserEmail;

// USER LOGIN
const userLogin = function(email, password) {
  let userVerification;
  return getUserEmail(email)
    .then(user => {
      if (!user.password !== password) {
        return null;
      } else {
        userVerification = user;
      }
    });
};

exports.userLogin = userLogin;

// UPDATE TODO LIST ITEM TASK
const updateItem = function(to_do_task, id) {
  let queryString = `
  UPDATE todo_lists_items
  SET to_do_task = $1
  WHERE id = $2`;
  const params = [todo_lists_items.to_do_task, todo_lists_items.id];

  return pool.query(queryString, params)
    .then((res) => res.rows);
};

exports.updateItem = updateItem;

// GET ALL TODO LISTS
const getAllLists = function(user_id) {
  let queryString = `
  SELECT * FROM user_lists
  WHERE user_id = $1
  `;
  const params = [user_lists.user_id];

  return pool.query(queryString, params)
    .then((res) => res.rows);
};

exports.getAllLists = getAllLists;
