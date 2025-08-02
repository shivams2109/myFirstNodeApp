// index.js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Node.js API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
