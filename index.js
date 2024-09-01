const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./data/db.json');

// CORS Middleware ko use karte hain
app.use(cors({
  origin: '*', // Or specify your frontend origin
}));
app.get('/api/db', (req, res) => {
  res.status(200).json(db);
});

// Add other routes if necessary
app.get('/api/db/category', (req, res) => {
  res.status(200).json(db.category);
});

app.get('/api/db/banner', (req, res) => {
  res.status(200).json(db.banner);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
