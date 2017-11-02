<template>
        <div class="socket container">
            <h1>Socket</h1>
            <h2>welcome {{user.username}}</h2>
        </div>
      </template>
      
      <script>
      export default {
        name: 'socket',
        data () {
          return {
              user: {}
          }
        },
        created:function(){
            this.user = window.localStorage.getItem('user');
            this.user = JSON.parse(this.user);
        }
      }
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>
      </style>
      