<template>
  <div class="footerChild">
    <div @click="handle">footerChild</div>
  </div>
</template>
<script>
import Bus from './bridge'
export default {
  props: {
    // footerTitle: String
  },
  data: function () {
    return {
      num: 1,
    }
  },
  inject: ['message'],
  methods: {
    handle: function () {
      Bus.$emit('brother', this.num++, '中间事物总线通信')
    },
  },
  created: function () {
    console.log('孙子收到信息message:' + this.message)
    this.handle()
  },
  mounted() {
    Bus.$on('fromGrandfather', (a, b) => {
      console.log(a)
      // console.log(b)
    })
  },
}
</script>
<style lang="less" scoped>
.footerChild {
  // height: 80px;
  padding: 10px;
  background-color: #aaa;
}
</style>
