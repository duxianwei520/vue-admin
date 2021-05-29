<template>
  <div class="header">
    <div class="header1" @click="onHeaderClick">{{headerTitle}}</div>
    <div class="header2" @click="toFather($event, { type: 'header2' })">头部2</div>
    <input v-model="textValue" @change="headerinputchange" />
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
      textValue: '1'
    }
  },
  methods: {
    onHeaderClick: function (data) {
      this.$emit('onHeaderClick', data)
    },
    toFather: function (e, d) {
      console.log(e)
      console.log(d)
      this.$emit('receive', d)
    },
    headerinputchange: function (d) {
      console.log(d)
    },
    monitoring: function (d) { // 监听事件
      console.log(d)
      this.$on('listenFather', (res) => {
        console.log(res)
      })
    },
    callMethod: function (d) {
      console.log(d)
    }
  },
  mounted: function () {
    // 注册监听事件
    this.monitoring()
  }
}
</script>
<style lang="less" scoped>
.header{
  height: 80px;
  padding: 10px;
  background-color: #ccc;
}
</style>
