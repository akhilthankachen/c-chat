<template>
    <div class="login container">
        <input v-model="username" type="text" name="lastname">
        <button v-on:click.prevent="submit">Lets Go</button>
        <h1>{{error}}</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'login',
    data () {
      return {
          username:"",
          jsonData: {},
          error: ""
      }
    },
    methods: {
        submit: function(){
            if(this.username === ""){
                this.error = "Enter a user name";
            }else{
            this.$http.post('http://localhost:3000/users/register',{
                username: this.username
            }).then(function(data){
                this.jsonData = JSON.parse(data.bodyText);
                console.log(this.jsonData);
                if(this.jsonData.success == true){
                    this.$http.post('http://localhost:3000/users/authenticate',{
                        username: this.username,
                        password: true
                    }).then(function(data){
                        this.jsonData = JSON.parse(data.bodyText);
                        if(this.jsonData.success == true){
                            window.localStorage.setItem('token', JSON.stringify(this.jsonData));
                            console.log("user stored")
                            this.$emit('reg');
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
  