const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('*', (req, res) => {
  res.send({
    message: 'someher',
  });
});

// app.listen(4000, () => console.log('running on port 4000'));

module.exports = app;
