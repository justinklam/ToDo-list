const { Pool } = require("pg");
const dbParams = require("../config/db.js");
const axios = require('axios');
const pool = new Pool(dbParams);

// GET ALL USERS FROM DATABASE
const getAllUsers = function() {
  let queryString = `
  SELECT * FROM users;
  `;
  return pool.query(queryString).then((res) => res.rows);
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
  return pool.query(queryString, params).then((res) => {
    if (!res.rows[0]) {
      return null;
    } else {
      res.rows[0] = res.rows[0];
    }
  });
};

exports.getUserEmail = getUserEmail;

// USER LOGIN
const userLogin = function (email, password) {
  let userVerification;
  return getUserEmail(email).then((user) => {
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

  return pool.query(queryString, params).then((res) => res.rows);
};

exports.updateItem = updateItem;

// GET ALL TODO LISTS
const getAllLists = function(user_id) {
  let queryString = `
  SELECT * FROM user_lists
  WHERE user_id = $1
  `;
  const params = [user_lists.user_id];

  return pool.query(queryString, params).then((res) => res.rows);
};

exports.getAllLists = getAllLists;

// GET ALL BOOKS
const getAllBooks = function(category_id, user_id) {
  let queryString = `
  SELECT to_do_task as Books
  FROM user_lists
  WHERE category_id = $1 AND user_id = $2;
  `;
  const params = [category_id, user_id];
  return pool.query(queryString, params).then((res) => {
    if (!res.rows[0]) {
      return null;
    } else {
      return res.rows[0];
    }
  });
};

exports.getAllBooks = getAllBooks;

// GET ALL FILMS
const getAllFilms = function(category_id, user_id) {
  console.log("inside function");
  let queryString = `
  SELECT to_do_task as Films
  FROM user_lists
  WHERE category_id = $1 AND user_id = $2;
  `;
  const params = [category_id, user_id];
  return pool.query(queryString, params).then((res) => {
    if (!res.rows[0]) {
      return null;
    } else {
      return res.rows[0];
    }
  });
};

exports.getAllFilms = getAllFilms;

// GET ALL Other (categories)
const getAllOther = function(category_id, user_id) {
  let queryString = `
  SELECT to_do_task as Other_items
  FROM user_lists
  WHERE category_id = $1 AND user_id = $2;
  `;
  const params = [category_id, user_id];
  return pool.query(queryString, params).then((res) => {
    if (!res.rows[0]) {
      return null;
    } else {
      return res.rows[0];
    }
  });
};

exports.getAllOther = getAllOther;

// GET ALL Products
const getAllProducts = function(category_id, user_id) {
  let queryString = `
  SELECT to_do_task as Products
  FROM user_lists
  WHERE category_id = $1 AND user_id = $2;
  `;
  const params = [category_id, user_id];
  return pool.query(queryString, params).then((res) => {
    if (!res.rows[0]) {
      return null;
    } else {
      return res.rows[0];
    }
  });
};

exports.getAllProducts = getAllProducts;

// GET ALL Restaurants
const getAllRestaurants = function(category_id, user_id) {
  let queryString = `
  SELECT to_do_task as Restaurants
FROM user_lists
WHERE category_id = $1 AND user_id = $2;
  `;
  const params = [category_id, user_id];
  return pool.query(queryString, params).then((res) => {
    if (!res.rows[0]) {
      return null;
    } else {
      return res.rows[0];
    }
  });
};

exports.getAllRestaurants = getAllRestaurants;

const movieSearch = function(query) {
  query = query.replace(/\s/g, '+');

  axios.get(`https://www.omdbapi.com/?t=${query}&apikey=${process.env.OMDB_APIKEY}`)
    .then(function(response) {
      console.log('Response-----', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.movieSearch = movieSearch;
