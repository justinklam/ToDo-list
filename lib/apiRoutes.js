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

  return router;
};
