<template>
  <div class="footer">
    <div>footer:{{ footerTitle }}</div>
    <div @click="handle">footer：点击触发兄弟组件底部-中间传参</div>
    <FooterChild :title="footerChild"></FooterChild>
  </div>
</template>
<script>
import FooterChild from './footerChild.vue'
import Bus from './bridge'
export default {
  components: {
    FooterChild,
  },
  props: {
    footerTitle: String,
  },
  inject: ['message'],
  data: function () {
    return {
      footerChild: 'footerChild',
      num: 1,
    }
  },
  methods: {
    handle() {
      Bus.$emit('brother', this.num++, '中间事物总线通信')
    },
  },
  created: function () {
    console.log('儿子收到信息message:' + this.message)
    this.handle()
  },
}
</script>
<style lang="less" scoped>
.footer {
  // height: 100px;
  padding: 10px;
  background-color: #ddd;
}
</style>