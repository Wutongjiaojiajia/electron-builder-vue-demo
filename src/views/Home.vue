<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-button type="primary" @click="test()">测试</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// const { ipcRenderer } = require('electron')
const fs = require('fs')
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      
    }
  },
  created() {

  },
  methods:{
    test(){
      const root = fs.readdirSync('/');
      console.log("root",root);
    }
  }
}
</script>
