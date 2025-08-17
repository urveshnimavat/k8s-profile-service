const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Profile Service!');
});

app.listen(PORT, () => {
  console.log(`Profile Service running on port ${PORT}`);
});
