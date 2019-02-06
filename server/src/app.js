const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/s', (req, res) => {
  res.send('something');
});

app.listen(4000, () => console.log('running on port 4000'));
