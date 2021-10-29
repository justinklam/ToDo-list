const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const cookieSession = require("cookie-session");

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

module.exports = function(router, database) {

  // ----- USER ROUTES ----- //

  // CREATE A NEW USER
  router.post("/register", (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);

    database
      .createNewUser(user.name, user.email, user.password)
      .then((user) => {
        if (!user) {
          res.send({ error: "error" });
          return;
        }
        req.session.userId = user.id;
        return res.render("index");
      })
      .catch((e) => res.send(e));
  });

  // LOGIN ROUTE
  router.post("/login", (req, res) => {
    const user = req.body;

    database
      .userLogin(user.email, user.password)
      .then((user) => {
        console.log('userLOG', user);
        if (!user) {
          res.send({ error: "The email or password field is incorrect!" });
          return;
        }
        user.id = req.session.userID;
        console.log('success-----', user.id);
        return res.render("index", { user: { name: user.name, email: user.email, id: user.id } });
      })
      .catch((e) => {
        console.log('CATCH');
      res.send(e)
    });
  });

  //------- GET ROUTES ------//

  // GET ALL USERS
  router.get("/users", (req, res) => {
    database
      .getAllUsers(req.query, 20)
      .then((users) => res.send({ users }))
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // GET ALL LISTS
  router.get("/lists", (req, res) => {
    const userID = req.session.userId;
    database
      .getAllLists(1)
      .then((todos) => {
        console.log(`todos from lists: ${todos}`)
        const templateVars = {
          todos
        }
        res.render("all-lists", templateVars)
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // Test route for Books search query
  router.get("/allBooks", (req, res) => {
    const userID = req.session.userId;
    database
      .getAllBooks(1)
      .then((todos) => {
        console.log(`todos from lists: ${todos}`)
        const templateVars = {
          todos
        }
        res.render("book-list", templateVars)
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // Test route for Products search query
  router.get("/allProducts", (req, res) => {
    const userID = req.session.userId;
    database
      .getAllProducts(1)
      .then((todos) => {
        console.log(`todos from lists: ${todos}`)
        const templateVars = {
          todos
        }
        res.render("product-list", templateVars)
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // Test route for Films search query
  router.get("/allFilms", (req, res) => {
    const userID = req.session.userId;
    database
      .getAllFilms(1)
      .then((todos) => {
        console.log(`todos from lists: ${todos}`)
        const templateVars = {
          todos
        }
        res.render("movie-list", templateVars)
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // Test route for Restaurants search query
  router.get("/allRestaurants", (req, res) => {
    const userID = req.session.userId;
    database
      .getAllRestaurants(1)
      .then((todos) => {
        console.log(`todos from lists: ${todos}`)
        const templateVars = {
          todos
        }
        res.render("restaurant-list", templateVars)
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // Test route for OTHER (categories) search query
  router.get("/allOther", (req, res) => {
    const userID = req.session.userId;
    database
      .getAllOther(5, userID)
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  //------- POST ROUTES ------//

  router.post("/updateItem/:id", (req, res) => {
    const itemID = req.params.id;
    database.updateItem(req.body.to_do_task, itemID).then((itemID) => {
      res.send("Item successfully modified");
      return;
    });
  });

  // Create a new task
  // post that grabs the 3 fileds to store in task to do
  // change this to POST
  router.post("/createTask", (req, res) => {
    const {title, to_do_task , to_do_date} = req.body;
    const user_id = req.session.userId
    // const user_id = 1
    console.log(`hit endpoint`);
    database.createNewCategory(user_id, title, to_do_task , to_do_date)
    // database.createNewCategory(user_id, 'movies to watch', 'read', '2021-10-30 20:00:00')
    .then(result => {
      console.log(`res: ${result}`)
      // redirect to view task list
      res.render("index");
    })
    .catch(err => {
      console.log(`err: ${err}`)
    })
  });

  return router;
};
