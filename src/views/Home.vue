<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Button @click="toAbout">按钮</Button>
  </div>
</template>

<script>
// @ is an alias to /src
// import { home, home1 } from '@/api/home'
import HelloWorld from '@/components/HelloWorld.vue'
import { Button } from 'element-ui'
import About from '@/views/About'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Button
  },
  created() {
    console.log(process.env)
    // home({ aaa: 123 }, { bbb: 123213123123 })
    // home1({ aaa: 123 }, { bbb: 678768768768 })
    setTimeout(() => {
      this.$router.addRoutes([
        {
          path: '/about',
          name: 'About',
          component: About
        }
      ])
    }, 20000)
  },
  methods: {
    toAbout() {
      this.$router.push('/about')
    }
  }
}
</script>
