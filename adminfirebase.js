const admin = require("firebase-admin");

const serviceAccount = require("./prueba firebase admin-6634a8a05b15.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://prueba-firebase-admin.firebaseio.com"
});

const admAuth = admin.auth();
const admDb = admin.database();

module.exports = {
  admAuth,
  admDb
}

