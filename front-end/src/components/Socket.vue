<template>

                      <div class="chat">
                      <h4 id="status-bottom">{{ status }}</h4>
                        <div id="status"></div>
                        <div id="pair"></div>
                        <div id="chat">
                          <br>
                          <div class="card">

                            <div id="messages" class="card-block">
                                <div v-for="message in messages" v-html="message"></div>
                            </div>
                          </div>
                          <br>
                          <textarea v-model="textarea" id="textarea" class="message-box" placeholder="Enter message ...."></textarea><button id="send" v-on:click="sendData" class="btn btn-danger float-right">SEND</button>
                          <button id="clear" v-on:click="clearBtn" class="btn btn-danger">Clear</button>
                          <button id="stranger" v-on:click="strangeBtn" class="btn btn-danger">find a random stranger</button>
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
                if(this.user.username === this.posUsername){this.setStatus("connected with yourself");}else{
                this.setStatus("connected with "+this.posUsername);}
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
                this.setStatus("connecting....");
            },
            clearBtn: function(){
                this.messages=[];
            }
        }
      }
      </script>

      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>

          #textarea{
              width: 75%;
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

          .chat-message{
              background-color:white;
              height:10px;
          }
          #chat{
          height:100%;
          border:1px solid grey;
          }
          #messages{
          height:280px;
          }
          .chat{
          padding-top:0px;
          margin-top:0px;
          }
          .chat.container{
          padding-top:0px;
          }
          .message-box{
          width:50px;
          }
      </style>
