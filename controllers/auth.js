const firebase = require('../adminfirebase');

function createUser(req,res) {
  firebase.admAuth.createUser({
    email:req.body.email,
    password: req.body.password,
  })
  .then((data) => {
    res.status(200).json(data.uid);
  })
  .catch((error) => {
    res.status(400).json(error)
  })
}

module.exports = {
  createUser
}
