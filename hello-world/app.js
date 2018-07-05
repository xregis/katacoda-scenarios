const admin = require('firebase-admin');

var serviceAccount = require('./admob-app-id-8755635507-89bd2394db7f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

var docRef = db.collection('compras').doc('loja');

var setAda = docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});
