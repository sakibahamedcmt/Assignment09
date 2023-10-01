const express = require('express');
const app = express();
const router = require('./src/routes/api');

app.use(express.json());

const mongoSanitize = require('express-mongo-sanitize')
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const hpp = require('hpp');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

app.use(mongoSanitize());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(mongoSanitize());


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	max: 50, 
    message: 'Too many accounts created from this IP, please try again after an hour',
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 

})
app.use(limiter)

app.use("/api/v1", router);

app.use('*',(req, res) => {
    res.status(404).json({ status: 'error', message: 'Route not found' });
  });



  // MongoDB Connection

  let uri = 'mongodb:// 127.0.0.1:23195/assinment09'
  let iotions = (user:'Assignment09', pass: 'Assignment12345')

  
  mongoose.connect(uri, options, (error) => {
	console.log('Connected to MongoDB....');
	console.log(error);
  });
  

module.exports = app;
