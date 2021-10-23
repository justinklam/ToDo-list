const bcrypt = require('bcrypt');

module.exports = function(router, database) {

  //-------GET ROUTES------//

  // GET ALL USERS
  router.get('/users', (req, res) => {
    database.getAllUsers(req.query, 20)
      .then(users => res.send({users}))
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  // GET ALL LISTS
  router.get('/lists', (req, res) => {
    database.getAllLists(req.query, 20)
      .then(users => res.send({users}))
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  //-------POST ROUTES------//

  // CREATE A NEW USER
  router.post('/register', (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    database.createNewUser(user)
      .then(user => {
        if (!user) {
          res.send({error: "error"});
          return;
        }
        req.session.userId = user.id;
        res.send("New Account Created");
      })
      .catch(e => res.send(e));
  });

  // LOGIN ROUTE
  router.post('/login', (req, res) => {
    const {email, password} = req.body;
    database.userLogin(email, password)
      .then(user => {
        if (!user) {
          res.send({error: "error"});
          return;
        }
        req.session.userId = user.id;
        res.send({user: {name: user.name, email: user.email, id: user.id}});
      })
      .catch(e => res.send(e));
  });

  return router;
};
