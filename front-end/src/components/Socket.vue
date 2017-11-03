<template>
        <div class="socket container-fluid">
            <div class="container-fluid back-color">
                    <div class="row">
                      <div class="col-md-6 offset-md-3 col-sm-12">
                          
                        <h1 class="text-center">
                            Cchat
                        </h1>
                        <div id="status"></div>
                        <div id="pair"></div>
                        <div id="chat">
                          <br>
                          <div class="card">
                                <div class="container-fluid">
                            <div id="messages" class="card-block">
                                <div v-for="message in messages" v-html="message"></div>
                            </div>
                            </div>
                          </div>
                          <br>
                          <div class = "container-fluid"><textarea v-model="textarea" id="textarea" class="form-control float-left" placeholder="Enter message ...."></textarea><button id="send" v-on:click="sendData" class="btn btn-danger float-right">SEND</button></div>
                          <div class = "container-fluid bottom-buttons">
                          <button id="clear" v-on:click="clearBtn" class="btn btn-danger">Clear</button>
                          <button id="stranger" v-on:click="strangeBtn" class="btn btn-danger">find a random stranger</button>
                            <h4 id="status-bottom">{{ status }}</h4></div>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
      </template>
      
      <script>

      export default {
        name: 'socket',
        data () {
          return {
              user: {},
              status: "No user connected",
              messages: [],
              textarea: "",
              pair: null,
              pos: null,
              posUsername: null,
              remote: 'http://localhost:4000/'
          }
        },
        sockets:{
            connect: function(){
              console.log('socket connected');
             },
             output: function(data){
                if(data.length){
                    for(var x = 0;x < data.length;x++){
                    //build out message div
                     var message;
                     message = '<div class = "chat-message">'+ data[x].name+': '+data[x].message+'</div>';
                     this.messages.push(message);
                     console.log('i amxxxx here');
                    }
                }
             },
             status: function(data){
                 this.setStatus((typeof data === 'object')?data.message: data);
                if(data.clear){
                    this.textarea = "";
                }
             },
             connectedPair: function(data){
                this.pair = data.pos_a;
                this.pos = data.pos_b;
                this.posUsername = data.posUsername;
                this.setStatus("connected with "+this.posUsername);
             }
        },
        created:function(){
            this.user = window.localStorage.getItem('user');
            this.user = JSON.parse(this.user);
        },
        methods:{
            setStatus: function(s){
                this.status = s;
            },
            sendData: function(){
                if(pair === null && pos === null){this.setStatus("User not connected");}else{
                    this.$socket.emit('input', {
                        name:this.user.username,
                        message:this.textarea,
                        pairPos:this.pair,
                        pos:this.pos
                    });
                    this.setStatus("Message sent");
                    this.textarea ="";
                }
            },
            strangeBtn: function(){
                console.log('hello brother');
                this.$socket.emit('findStranger', this.user.username);
            },
            clearBtn: function(){
                this.messages=[];
            }
        }
      }
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>
          #messages{
              height: 300px;
              border-radius: 25px;
          border: 2px solid white;
          }
          .socket{
              margin-top:20px;
          }
          #textarea{
              width: 85%;
              float: left;
              height: 34px;
          }
          #send{
              width: 15%;
          }
          .bottom-buttons{
              padding-top: 20px;
          }
          #status-bottom{
              float: right;
          }
          .back-color{
              background-color: rgb(248, 173, 88);
              height: 550px;
              margin-right: 0px;
          }
          .chat-message{
              background-color:white;
              height:10px;
          }
      </style>
      