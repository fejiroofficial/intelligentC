const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./server/routes/index');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);

//Set up mongoose connection
app.listen(process.env.PORT || 5000, () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.DATABASE_URL);
  console.log('server has started');
});
