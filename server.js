'use strict'
const express = require('express'); //incluir express
const app = express(); //utilizar express
const bodyParser = require('body-parser'); //incluir para que solo se vea el json
const cors = require("cors") //incluir para que reciba llamadas externas

app.use(cors()) //llamadas externas
app.use(bodyParser.json()) //solo veamos el Json
app.use(bodyParser.urlencoded({ //traducir
  extended: false
}))

//metodos
const auth = require('./controllers/auth');

app.route('/api/auth')
  .post(auth.createUser)
app.route('/api/auth/:id')
  .get(auth.getUser)
  .put(auth.updateUser)
  .delete(auth.deleteUser)

  
app.listen(process.env.PORT || 5000, () => {
  console.log('puerto 5000')
})