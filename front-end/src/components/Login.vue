<template>
    <div class="login container">
        <input v-model="username" type="text" name="lastname">
        <div id="checkboxes">
            <h3>Q. which year won last sargam</h3>
            <label>1st</label>
            <input type="radio" value="first" v-model="password">
            <label>2nd</label>
            <input type="radio" value="second" v-model="password">
            <label>3rd</label>
            <input type="radio" value="third" v-model="password">
            <label>4th</label>
            <input type="radio" value="fourth" v-model="password">
        </div>
        <button v-on:click.prevent="submit">Lets Go</button>
        <h1>{{error}}</h1>
        <h3>{{password}}</h3>
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
  </style>
  