<template>
  <div class="main">
    <div>{{mainTitle}}</div>
    <div>{{brotherNum}}</div>
  </div>
</template>
<script>
import Bridge from './bridge'
export default {
  props: {
    mainTitle: String
  },
  data: function () {
    return {
      brotherNum: ''
    }
  },
  mounted () {
    Bridge.$on('brother', (a, b) => {
      console.log(a)
      console.log(b)
      this.brotherNum = a
    })
  }
}
</script>
<style lang="less" scoped>
.main{
  height: 300px;
  padding: 10px;
  background-color: #f1f1f1;
}
</style>