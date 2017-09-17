'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

//metodos
const auth = require('./controllers/auth');

app.route('/api/auth')
  .post(auth.createUser)


app.listen(process.env.PORT || 5000, () => {
  console.log('puerto 5000')
})