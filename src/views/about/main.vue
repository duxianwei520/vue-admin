<template>
  <div class="main">
    <div>main：{{ mainTitle }}</div>
    <div>{{ brotherNum }}</div>
    <a @click="handleClick">点击触发孙子事件</a>
  </div>
</template>
<script>
import Bus from './bridge'
export default {
  props: {
    mainTitle: String,
  },
  data: function () {
    return {
      brotherNum: '',
    }
  },
  methods: {
    handleClick(e) {
      Bus.$emit('fromGrandfather', 'fromGrandfather', e)
    },
  },
  mounted() {
    // Bus.$on('brother', (a, b) => {
    //   console.log(a, b)
    //   this.brotherNum = a
    // })
  },
}
</script>
<style lang="less" scoped>
.main {
  height: 250px;
  padding: 10px;
  background-color: #f1f1f1;
}
</style>