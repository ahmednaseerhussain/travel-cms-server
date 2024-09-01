const express = require('express');
const app = express();
const db = require('./db.json');

app.get('/api/db', (req, res) => {
  res.status(200).json(db);
});

// const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port`);
});
