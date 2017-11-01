const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const port = 3000;

//connect to databse
mongoose.connect(config.database);
mongoose.connection.on('connected', () =>{
  console.log('database connected '+ config.database);
});
mongoose.connection.on('error', (err) =>{
  console.log('database error : '+ err);
});

const users = require('./routes/users');

var app = express();

// using cors
app.use(cors());
// body parser middleware
app.use(bodyParser.json());
// passport initialize
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/users', users);

app.get('/', (req,res) => {
  res.send('invalid endpoint');
});
app.listen(port, () => {
  console.log('server started at port ' + port);
});
