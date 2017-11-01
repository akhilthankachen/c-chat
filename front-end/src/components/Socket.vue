<template>
        <div class="socket container">
          Socket
          <h1>{{jsondata}}</h1>
        </div>
      </template>
      
      <script>
      export default {
        name: 'socket',
        data () {
          return {
              jsondata: ""
          }
        },
        created: function(){
            this.jsondata = window.localStorage.getItem('data');
        }
      }
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>
      </style>
      