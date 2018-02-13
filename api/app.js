const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

var length = 0;
var user = [];

addToList = function(username, sock){
  var len = length++;
  var userTemp = {};
  userTemp.username = username;
  userTemp.socket = sock;
  userTemp.pair = {};
  user[len] = userTemp;
  console.log('user added '+username +' '+len);
  return len;
}

findStranger = function (pos){
  let posTemp = pos - 1;
  if(pos%2 === 0){
    console.log('i am on pos 0 ' + user[pos].username);
  }else{
      console.log('i am swapping pair who is behind me ' + user[posTemp].username);
      user[pos].socket.emit('connectedPair',{pos_a:posTemp,pos_b:pos,posUsername:user[posTemp].username,posGender:user[posTemp].gender});
      console.log('emitted '+posTemp);
      user[posTemp].socket.emit('connectedPair',{pos_a:pos,pos_b:posTemp,posUsername:user[pos].username,posGender:user[pos].gender});
      console.log('emitted '+pos);}

}

const port = 80;

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
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
  sendStatus = function(s){
    socket.emit('status',s);
  }

  console.log('client connected');
  socket.on('findStranger', function(data){
    var username = data;
    if(username == ''){
      sendStatus('Enter username');
    }else{
      let pos;
      pos = addToList(username,socket);
      console.log(pos);
      console.log('finding strangers for ' + username);
      findStranger(pos);
    }
  });


  socket.on('input', function(data){
    var name = data.name;
    var message = data.message;
    var pairPos = data.pairPos;
    var pos = data.pos;
    console.log('message received '+name+' '+pos+' '+message+'to pair'+pairPos);
    if(name == '' || message == ''){
      sendStatus('Please enter a name and message');

    }else{
      if(user[pairPos] !== undefined || user[pos] !== undefined){
      user[pairPos].socket.emit('output', [data]);
      user[pos].socket.emit('output', [data]);
      sendStatus({
        message:"message sent",
        clear:true
      });}else{
        sendStatus({
          message:"Connection Lost",
          clear:true
        });
      }
    }
  });
});

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


server.listen(port, () => {
  console.log('server started at port ' + port);
});
