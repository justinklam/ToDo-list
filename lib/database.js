const { Pool } = require("pg");
const dbParams = require("../config/db.js");
const axios = require("axios");
const pool = new Pool(dbParams);
const yelpAxios = require('./axiosCall');

// ----- USER ROUTES ----- //

// REGISTER A NEW USER
const createNewUser = function(name, email, password) {

  return pool.query(`SELECT * FROM users WHERE email = $1;`, [email])
    .then(user => {
      if(user.rows.length > 0) {
        return null;
      }
      const queryString = `
      INSERT INTO users(name, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
      `;

      const params = [name, email, password];

      return pool
        .query(queryString, params)
        .then((res) => res.rows)
        .catch((err) => {
          return err;
        });
    })
    .catch(error => {
      return error;
    });

};

exports.createNewUser = createNewUser;

// GET USER EMAIL
const getUserEmail = function(email) {
  let queryString = `
  SELECT * FROM users
  WHERE email = $1
  `;
  const params = [email.toLowerCase()];

  return pool.query(queryString, params)
    .then((result) => {
      // If the email is not found in the database
      if (!result.rows[0]) {
        return null;
      } else {
        return result.rows[0];
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getUserEmail = getUserEmail;

// USER LOGIN
const userLogin = function(email, password) {
  return getUserEmail(email)
    .then((user) => {
      return user;
      // if (bcrypt.compareSync(password, user.password)) {
      //   return user;
      // // if (!user.password !== password) {
      // //   return null;
      // } else {
      //   console.log('failedlogin');
      //   return null;
      // }
    });
};

exports.userLogin = userLogin;

// GET ALL USERS FROM DATABASE
const getAllUsers = function() {
  let queryString = `
  SELECT * FROM users;
  `;
  return pool.query(queryString).then((res) => res.rows);
};

exports.getAllUsers = getAllUsers;

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
  const params = [user_id];

  return pool.query(queryString, params)
  .then((res) => res.rows);
};

exports.getAllLists = getAllLists;

// GET ALL BOOKS
const getAllBooks = function(user_id) {
  let queryString = `
  SELECT *
  FROM user_lists
  WHERE category_id = 3 AND user_id = $1;
  `;
  const params = [user_id];
  return pool.query(queryString, params).then((res) => res.rows);
};

exports.getAllBooks = getAllBooks;

// GET ALL Products
const getAllProducts = function(user_id) {
  let queryString = `
  SELECT *
  FROM user_lists
  WHERE category_id = 4 AND user_id = $1;
  `;
  const params = [user_id];
  return pool.query(queryString, params).then((res) => res.rows);
};

exports.getAllProducts = getAllProducts;

// GET ALL FILMS
const getAllFilms = function(user_id) {
  console.log("inside function");
  let queryString = `
  SELECT *
  FROM user_lists
  WHERE category_id = 3 AND user_id = $1;
  `;
  const params = [user_id];
  return pool.query(queryString, params).then((res) => res.rows);
};

exports.getAllFilms = getAllFilms;

// GET ALL Restaurants
const getAllRestaurants = function(user_id) {
  let queryString = `
  SELECT *
  FROM user_lists
  WHERE category_id = 2 AND user_id = $1;
  `;
  const params = [user_id];
  return pool.query(queryString, params).then((res) => res.rows);
};

exports.getAllRestaurants = getAllRestaurants;

// GET ALL Other (categories)
const getAllOther = function(user_id) {
  let queryString = `
  SELECT *
  FROM user_lists
  WHERE category_id = $1 AND user_id = $2;
  `;
  const params = [user_id];
  return pool.query(queryString, params).then((res) => res.rows);
};

exports.getAllOther = getAllOther;

// ----- API FUNCTIONS ----- //

const movieSearch = async function(query) {
  query = query.replace(/\s/g, "+");
  console.log(`in movie search`)
  return axios
    .get(
      `https://www.omdbapi.com/?t=${query}&apikey=${process.env.OMDB_APIKEY}`
    )
    .then(function(response) {
      console.log("Response-----", response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(`err on movie search: ${err}`);
    });
};

// console.log(movieSearch('blade runner'));

exports.movieSearch = movieSearch;

const restaurantSearch = function(query) {
  query = query.replace(/\s/g, '+');

  yelpAxios.get(`/businesses/matches${query}`)
    .then(function(response) {
      console.log('Response-----', response.data);
      return response.data;
    });
};

exports.restaurantSearch = restaurantSearch;

// Create new task
const createNewTask = function(user_id, category_id, title, to_do_task , to_do_date) {
  const queryString = `
  INSERT INTO user_lists(user_id, category_id, title, to_do_task, to_do_date)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;
  `;

  const params = [
    user_id,
    category_id,
    title,
    to_do_task,
    to_do_date,
  ];

  return pool
    .query(queryString, params)
    .then((res) => {
      console.log(`res from crete new task: ${JSON.stringify(res.rows)}`)
      return res.rows[0]
    })
    .catch((err) => {
      console.log(`err on new task: ${err}`);
    });
};

exports.createNewTask = createNewTask;

// Create new category
// takes in title, to_do_task ( = category_name), to_do_date
const createNewCategory = async function(user_id, title, to_do_task , to_do_date) {
  // looking for "read" in the output
  console.log(`creating new cat1`);
  let cat = "";
  if (to_do_task.match(/\bread\b/)) {
    cat = "books";
  } else if (to_do_task.match(/\bwatch\b/)) {
    cat = "movies";
  } else {
    // Follow function below for other APIs
        const movieList = await movieSearch(to_do_task)
        console.log(`movieList: ${JSON.stringify(movieList)}`);
        if (movieList) {
          console.log(`changed cat`);
          cat = "movies";
        } else {
          cat = "other";
        }
    }
      const queryString = `INSERT INTO todo_categories (category_name) VALUES ($1) RETURNING *;`;
      const params = [cat];
      return pool
        .query(queryString, params)
        .then((res) => {
          console.log(`res final: ${JSON.stringify(res.rows[0])}`);
          let category_id = res.rows[0].id;

          createNewTask(user_id, category_id, title, to_do_task, to_do_date)
          .then(result => {
            console.log(`res on new task: ${JSON.stringify(result)}`)
            return result;
          })
          .catch( err => {
            console.log(`err: ${err}`)
          })
        })
        .catch((err) => {
          console.log(`err on cat stuff: ${err}`);
          console.log(err.message);
        });

  }
exports.createNewCategory = createNewCategory;
