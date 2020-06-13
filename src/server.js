const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

exports.app = functions.https.onRequest(app);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));