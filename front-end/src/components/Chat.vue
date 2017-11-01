<template>
  <div class="chat container">
    <login v-show="!registered" v-on:reg="changeReg()"></login>
    <socket v-show="registered"></socket>
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
      registered: false
    }
  },
  methods: {
    changeReg: function(){
      this.registered = true;
    }
  },
  created: function(){
    alert('hello');
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat{
  margin-top:50px;
}
</style>
