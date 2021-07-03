<template>
  <div class="about">
    <div class="headerWrap">
      about-header
      <div @click="fatherClick1">点击触发父亲-孩子：触发子组件的监听事件</div>
      <div @click="fatherClick2">点击触发父亲-孩子:直接调用子组件方法</div>
    </div>
    <Header
      ref="childHeader"
      :headerTitle="headerTitle"
      @onHeaderClick="onHeaderClick"
      @receive="fromChild"
    >
      footer
    </Header>
    <Main :mainTitle="mainTitle"> footer </Main>
    <Footer :footerTitle="footerTitle"> footer </Footer>
  </div>
</template>
<script>
import Header from './about/header.vue'
import Main from './about/main.vue'
import Footer from './about/footer.vue'
import Bus from './about/bridge'

export default {
  name: 'about',
  components: {
    Header,
    Main,
    Footer,
  },
  data: function () {
    return {
      headerTitle: '头部标题',
      mainTitle: '主要标题',
      footerTitle: '底部标题',
      msg: '测试爷-孙通信(provider-inject)',
    }
  },
  provide: function () {
    return {
      message: this.msg,
    }
  },
  methods: {
    onHeaderClick: function (data) {
      console.log('收到孩子调用父亲方法1，数据：')
      console.log(data)
    },
    fromChild: function (data) {
      console.log('收到孩子调用父亲方法2，数据：')
      console.log(data)
    },
    headerinputchange: function (d) {
      console.log(d)
    },
    // 测试父级组件直接调用子组件的方法
    fatherClick1: function () {
      // 方法1:触发子组件的监听事件
      this.$refs.childHeader.$emit('listenFather', { data: '事件发送' })
    },
    // 测试父级组件直接调用子组件的方法
    fatherClick2: function () {
      // 方法2:直接调用子组件方法
      this.$refs.childHeader.callMethod({ data: '直接调用' })
    },
  },
  mounted() {
    Bus.$on('brother', (a, b) => {
      console.log(a, b)
      this.brotherNum = a
    })
    // const la = 12;
  },
}
</script>
<style lang="less" scoped>
.headerWrap {
  // height: 80px;
  padding: 10px;
}
</style>
