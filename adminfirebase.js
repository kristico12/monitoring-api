const admin = require("firebase-admin");

const serviceAccount = require("./tesis-dev-firebase-adminsdk-v8anq-87a5af4d70.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tesis-dev.firebaseio.com"
});

const admAuth = admin.auth();
const admDb = admin.database();

module.exports = {
  admAuth,
  admDb
}

