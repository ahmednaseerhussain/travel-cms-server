const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const db = require('./db.json');

app.use(cors()); // Use the cors middleware

app.get('/api/db', (req, res) => {
  res.status(200).json(db);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
