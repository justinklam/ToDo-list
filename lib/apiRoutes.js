const bcrypt = require("bcrypt");

module.exports = function (router, database) {
  //-------GET ROUTES------//

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

  //-------POST ROUTES------//

  router.post("/updateItem/:id", (req, res) => {
    const itemID = req.params.id;
    database.updateItem(req.body.to_do_task, itemID).then((itemID) => {
      res.send("Item successfully modified");
      return;
    });
  });

  // CREATE A NEW USER
  router.post("/register", (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    database
      .createNewUser(user)
      .then((user) => {
        if (!user) {
          res.send({ error: "error" });
          return;
        }
        req.session.userId = user.id;
        res.send("New Account Created");
      })
      .catch((e) => res.send(e));
  });

  // Create a new task
  // post that grabs the 3 fileds to store in task to do
  // change this to POST
  router.post("/test5", (req, res) => {
    const task = req.body;
    console.log(`hit endpoint`);

    // redirect to view task list    let result = database.send(e);
    // });
  });

  // LOGIN ROUTE
  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    database
      .userLogin(email, password)
      .then((user) => {
        if (!user) {
          res.send({ error: "The email or password field is incorrect!" });
          return;
        }
        req.session.userId = user.id;
        res.send({ user: { name: user.name, email: user.email, id: user.id } });
      })
      .catch((e) => res.send(e));
  });

  //                                    -----------------------------
  // Test route for allBooks search query
  router.get("/test", (req, res) => {
    console.log("Route hit!");
    database
      .getAllBooks(3, 3)
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // Test route for films search query
  router.get("/test", (req, res) => {
    console.log("Route hit!");
    database
      .getAllFilms(1, 1)
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
  router.get("/test", (req, res) => {
    console.log("Route hit!");
    database
      .getAllOther(5, 5)
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // Test route for products search query
  router.get("/test", (req, res) => {
    console.log("Route hit!");
    database
      .getAllProducts(4, 4)
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // Test route for restaurants search query
  router.get("/test", (req, res) => {
    console.log("Route hit!");
    database
      .getAllRestaurants(2, 2)
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  router.get("/searchAPI", (req, res) => {
    console.log("body-----", req.body);
  });

  return router;
};
