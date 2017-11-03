<template>
    <div class="login container">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 com-md-6 col-sm-12 col-xs-12">

                </div>
                 <div class="col-lg-6 com-md-6 col-sm-12 col-xs-12">
                     <div class="" id="login-forum">
                         <div id="opacityHigh" style="opacity:100%;">
                             <h2>Choose yur NickName</h2>
                             <br>
                        <input v-model="username" type="text" name="lastname" alt="Nick name">
                        <div id="checkboxes">
                            <h2>Q. which year won last sargam</h2>
                            <br>
                            <label>1st</label>
                            <input type="radio" value="first" v-model="password">
                            <label>2nd</label>
                            <input type="radio" value="second" v-model="password">
                            <label>3rd</label>
                            <input type="radio" value="third" v-model="password">
                            <label>4th</label>
                            <input type="radio" value="fourth" v-model="password">
                        </div>
                        <br>
                        <button v-on:click.prevent="submit">Lets Go</button>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'login',
    data () {
      return {
          username:"",
          jsonData: {},
          error: "",
          password :""

      }
    },
    methods: {
        submit: function(){
            if(this.username === "" || this.password === []){
                this.error = "Enter user name or password";
            }else{
            if(this.password == "second"){var pass = true;}else{var pass = false;}
            console.log(pass);
            this.$http.post('http://localhost:3000/users/register',{
                username: this.username
            }).then(function(data){
                this.jsonData = JSON.parse(data.bodyText);
                console.log(this.jsonData);
                console.log(this.jsonData.success);
                if(this.jsonData.success == true){
                    this.$http.post('http://localhost:3000/users/authenticate',{
                        username: this.username,
                        password: pass
                    }).then(function(data){
                        console.log(data);
                        this.jsonData = JSON.parse(data.bodyText);
                        if(this.jsonData.success == true){
                            window.localStorage.setItem('token', JSON.stringify(this.jsonData));
                            console.log("token stored")
                            this.$http.get('http://localhost:3000/users/chat', {
                                 headers: {
                                    'Authorization': this.jsonData.token,
                                    'Accept': 'application/json'
                                 }
                            }).then(function(response){
                                this.jsonData = JSON.parse(response.bodyText);
                                if(this.jsonData.success == true){
                                     window.localStorage.setItem('user', JSON.stringify(this.jsonData.user));
                                     this.$emit('reg');
                                }else{
                                    this.error = "User cant be registered"; 
                                }
                             });
                        }else{
                            this.username = "";
                            this.error = "User cant be registered";
                        }
                    });                   
                }else{
                }
            });
            }
        }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
      #login-forum{
          margin-top: 125px;
          padding-top:90px;
          padding-left:50px;
          margin-bottom: auto;
          margin-left: 0px;
          margin-right: 0px;
          height:400px;
          background-color:rgba(0, 0, 0, 0.5);
          border-radius: 25px;
          border: 2px solid white;
          color:rgb(253, 253, 255);

      }
      #opacityHigh{
          opacity:1.0;
      }
      #login-forum button{
          background-color: grey;
          color:black;
      }
      #login-forum input{
          padding-left: 4px;
          padding-right:10px;
          color: black;
      }
      @media(max-width:768px){
          #login-forum{
              padding-left: 10px;
              padding-top:10px;
              margin-top:10px;
          }
          #login-forum h2{
            font-size: 28px;
          }
      }
  </style>
  