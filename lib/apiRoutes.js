const bcrypt = require('bcrypt');

module.exports = function(router, database) {

  // GET ROUTES
  router.get('/users', (req, res) => {
    database.getAllUsers(req.query, 20)
      .then(users => res.send({users}))
      .catch(error => {
        console.error(error);
        res.send(error);
      });
  });

  // POST ROUTES
  router.post('/users', (req, res) => {

  });

    // CREATE A NEW USER
    router.post('/', (req, res) => {
      const user = req.body;
      user.password = bcrypt.hashSync(user.password, 12);
      database.addUser(user)
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

    // Login
    router.post('/login', (req, res) => {
      const {email, password} = req.body;
      login(email, password)
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
