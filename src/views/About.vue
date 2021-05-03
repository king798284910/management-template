<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img src="/static/logo.png" alt="" srcset="">
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route.query)
    // Toast.loading({
    //   message: '加载中...',
    //   forbidClick: true
    // })
  }
}
</script>
<style lang="less" scoped>
  .about {
    width: 200px;
    h1 {
      font-size: 16px;
    }
  }
</style>
