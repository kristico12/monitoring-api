const firebase = require('../adminfirebase');

function createUser(req,res) {
  firebase.admAuth.createUser({
    uid:req.body.aut.identificationCard,    
    email:req.body.aut.email,
    password: req.body.aut.password,
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
