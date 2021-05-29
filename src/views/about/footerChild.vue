<template>
  <div class="footerChild">
    <div @click="handle">footerChild</div>
  </div>
</template>
<script>
import Bridge from './bridge'
export default {
  props: {
    // footerTitle: String
  },
  data: function () {
    return {
      num: 1
    }
  },
  inject: [
    'message'
  ],
  methods: {
    handle: function () {
      Bridge.$emit('brother', this.num++, '子组件向兄弟组件传值')
    }
  },
  created: function () {
    console.log(this.message)
    this.handle()
  }
}
</script>
