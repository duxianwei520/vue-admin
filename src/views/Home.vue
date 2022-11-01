<template>
  <div class="home">
    <HelloWorld msg="vue.js" />
    <HelloWorld msg="11111111">
      <template v-slot:header>
        <div>这是helloword的头部</div>
      </template>
      <template v-slot:main>
        <div @click="mainClick">随便什么内容</div>
      </template>
      <template v-slot:footer>
        <div>helloword的底部</div>
      </template>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    mainClick: function () {
      console.log(123)
    },
  },
}
</script>
<style lang="less" scoped></style>
