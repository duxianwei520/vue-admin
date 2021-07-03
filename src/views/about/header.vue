<template>
  <div class="header">
    header
    <div class="header1" @click="toFather1">点击触发儿子-父亲传参通信1</div>
    <div class="header2" @click="toFather($event, { type: 'header2' })">
      点击触发儿子-父亲传参通信2
    </div>
    <!-- <input v-model="textValue" @change="headerinputchange" /> -->
  </div>
</template>
<script>
export default {
  props: {
    headerTitle: String,
    // onHeaderClick: Function,
  },
  model: {
    // event: 'headerinputchange',
  },
  data: function () {
    return {
      textValue: '1',
    }
  },
  methods: {
    toFather1: function () {
      this.$emit('onHeaderClick', { type: 'header1' })
    },
    toFather: function (e, d) {
      // console.log(e)
      // console.log(d)
      this.$emit('receive', d)
    },
    // headerinputchange: function (d) {
    //   console.log(d)
    // },
    monitoring: function () {
      // 监听事件
      this.$on('listenFather', (res) => {
        console.log('listenFather获取到参数：')
        console.log(res)
      })
    },
    callMethod: function (d) {
      console.log(`父亲直接调用子组件callMethod方法，传递的参数是：`)
      console.log(d)
    },
  },
  mounted: function () {
    // 注册监听事件
    this.monitoring()
  },
}
</script>
<style lang="less" scoped>
.header {
  // height: 80px;
  padding: 10px;
  background-color: #ccc;
}
</style>
