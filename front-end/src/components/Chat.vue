<template>
  <div class="chat container">
    <login v-if="!registered" v-on:reg="changeReg()"></login>
    <socket v-else-if="registered"></socket>
  </div>
</template>

<script>
import Login from './Login'
import Socket from './Socket'

export default {
  components:{
    'login': Login,
    'socket':Socket
  },
  name: 'chat',
  data () {
    return {
      registered: false,
      remote: 'http://localhost:4000/'
    }
  },
  methods: {
    changeReg: function(){
      this.registered = true;
    }
  },
  created: function(){
    var json = window.localStorage.getItem('token');
    if(json){
      console.log('i was here');
    json = JSON.parse(json);
    const token = json.token;
    if(json.success == true){
      this.$http.get('http://46.101.100.195:8080/users/chat', {
        headers: {
          'Authorization': token,
          'Accept': 'application/json'
        }
      }).then(function(response){
        json = JSON.parse(response.bodyText);
        if(json.success == true){
          this.registered = true;
          window.localStorage.setItem('user', JSON.stringify(json.user));
        }else{
          this.registered = false;
        }
      });
    }
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat{
  margin-top:50px;
}
</style>
