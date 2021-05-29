<template>
  <div class="footer">
    <div>{{footerTitle}}</div>
    <div @click="handle">点击触发兄弟组件传参</div>
    <FooterChild :title="footerChild"></FooterChild>
  </div>
</template>
<script>
import FooterChild from "./footerChild.vue"
import Bridge from './bridge'
export default {
  components: { 
    FooterChild 
  },
  inject: [
    'message'
  ],
  data: function () {
    return {
      footerChild: 'footerChild',
      num: 1
    }
  },
  props: {
    footerTitle: String
  },
  methods: {
    handle: function () {
      Bridge.$emit('brother', this.num++, '子组件向兄弟组件传值')
    }
  }
}
</script>
<style lang="less" scoped>
.footer{
  height: 100px;
  padding: 10px;
  background-color: #ddd;
}
</style>