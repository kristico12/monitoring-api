const firebase = require('../adminfirebase');

function createUser(req, res) {
  const object = {
    email: req.body.email,
    password: req.body.password,
  }
  firebase.admAuth.createUser(object)
    .then((data) => {
      res.json({ success: true, data: data.uid });
    })
    .catch((error) => {
      res.json({ success: false, data: error });
    })
}
function getUser(req, res) {
  const id = req.params.id;
  firebase.admAuth.getUser(id)
    .then((data) => {
      res.status(200).json({ status: '200', data: data.toJSON().email });
    })
    .catch(error => {
      res.status(400).json({ status: '400', data: error });
    })
}
function updateUser(req, res) {
  const id = req.params.id;
  const object = {
    email: req.body.email
  }
  if (req.body.password.length > 0) {
    object.password = req.body.password
  }  
  firebase.admAuth.updateUser(id, object)
    .then(() => {
      res.json({ success: true });
    })
    .catch(error => {
      res.json({ data: error, success: false });
    })
}
function deleteUser(req, res) {
  const id = req.params.id;
  firebase.admAuth.deleteUser(id)
    .then(() => {
      res.json({ success: true });
    })
    .catch(error => {
      res.json({ data: error, success: false });
    })
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser
}
