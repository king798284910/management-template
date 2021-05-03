<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { home, home1 } from '@/api/home'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    console.log(process.env)
    home({ aaa: 123 }, { bbb: 123213123123 })
    home1({ aaa: 123 }, { bbb: 678768768768 })
  }
}
</script>
