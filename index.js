const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send({test:123})
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
