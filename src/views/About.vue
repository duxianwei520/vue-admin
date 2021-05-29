<template>
  <div class="about">
    <h1 @click="fatherClick">父级页面</h1>
    <Header 
      ref="childHeader"
      :headerTitle="headerTitle"
      @onHeaderClick="onHeaderClick" 
      @receive="fromChild"
    >
      footer
    </Header>
    <Main 
      :mainTitle="mainTitle"
    >
      footer
    </Main>
    <Footer 
      :footerTitle="footerTitle"
    >
      footer
    </Footer>
  </div>
</template>
<script>
import Header from "./about/header.vue"
import Main from "./about/main.vue"
import Footer from "./about/footer.vue"
export default {
  name: "about",
  components: { 
    Header,
    Main,
    Footer,
  },
  data: function () {
    return {
      headerTitle: 'headerTitle',
      mainTitle: 'mainTitle',
      footerTitle: 'footerTitle',
      msg: '测试爷爷-孙子通信'
    }
  },
  provide: function() {
    return {
      message: this.msg
    }
  },
  methods: {
    onHeaderClick: function (data) {
      console.log(data)
    },
    fromChild: function (data) {
      console.log(data)
    },
    headerinputchange: function (d) {
      console.log(d)
    },
    // 测试父级组件直接调用子组件的方法
    fatherClick: function() {
      // 方法1:触发子组件的监听事件
      this.$refs.childHeader.$emit('listenFather', {data: '事件发送'})
      // 方法2:直接调用子组件方法
      this.$refs.childHeader.callMethod({data: '直接调用'})
    }
  }
}
</script>
