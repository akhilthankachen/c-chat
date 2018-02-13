<template>
                     <div class="" id="login-forum">
                        <img src="static/logo.png">
                             <br>
                        <input v-model="username" type="text" name="lastname" alt="Nick name" placeholder="nick name">
                        <div id="checkboxes" style = "display:none">
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
                        <select name="gender">
  <option value="male" v-model="gender">male</option>
  <option value="female" v-model="gender">female</option>
</select>
                        <button v-on:click.prevent="submit">Lets Go</button>
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
          password :"",
          gender: "",
          remote: 'http://localhost:4000/'

      }
    },
    methods: {
        submit: function(){
            if(this.username === "" || this.password === []){
                this.error = "Enter user name or password";
            }else{
            var pass = true;
            console.log(pass+'eeeeeS');
            this.$http.post('http://localhost:8080/users/register',{
                username: this.username,
                gender: this.gender
            }).then(function(data){
                this.jsonData = JSON.parse(data.bodyText);
                console.log(this.jsonData);
                console.log(this.jsonData.success);
                if(this.jsonData.success == true){
                    this.$http.post('http://localhost:8080/users/authenticate',{
                        username: this.username,
                        password: pass
                    }).then(function(data){
                        console.log(data);
                        this.jsonData = JSON.parse(data.bodyText);
                        if(this.jsonData.success == true){
                            window.localStorage.setItem('token', JSON.stringify(this.jsonData));
                            console.log("token stored")
                            this.$http.get('http://localhost:8080/users/chat', {
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
          height:400px;
          color:black;

      }
      #login-forum img{
      width:400px;
      height:auto;
      margin-left:auto;
      margin-right:auto;
      display:block;
      }
      #login-forum button{
      margin-left:auto;
      margin-right:auto;
      display:block;
      }
      #login-forum input{
      margin-left:auto;
      margin-right:auto;
      display:block;
      }
      #login-forum select{
      margin-left:auto;
      margin-right:auto;
      display:block;
      margin-bottom:10px;
      }
      #login-forum button{
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
          #login-forum img{
          width:260px;
          height:auto;
          margin-left:auto;
          margin-right:auto;
          display:block;
          }
      }
  </style>
