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
    // const { email, password } = req.body;
    const user = req.body;
    // console.log('userid-----', req.session);
    // const email = req.body.email;
    // const password = req.body.password;

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
        // res.send({ user: { name: user.name, email: user.email, id: user.id } });
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
    database
      .getAllLists(req.query, 20)
      .then((users) => res.send({ users }))
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // req.params in get request
  // Test route for Books search query
  router.get("/allBooks", (req, res) => {
    const userID = req.session.userID;
    database
      .getAllBooks(3, userID)
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // Test route for Products search query
  router.get("/allProducts", (req, res) => {
    const userID = req.session.userID;
    database
      .getAllProducts(4, userID)
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // Test route for Films search query
  router.get("/allFilms", (req, res) => {
    const userID = req.session.userID;
    database
      .getAllFilms(1, userID)
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // Test route for Restaurants search query
  router.get("/allRestaurants", (req, res) => {
    const userID = req.session.userID;
    database
      .getAllRestaurants(2, userID)
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // Test route for OTHER (categories) search query
  router.get("/allOther", (req, res) => {
    const userID = req.session.userID;
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
    const task = req.body;
    console.log(`hit endpoint`);

    // redirect to view task list    let result = database.send(e);
    // });
  });

  return router;
};
