<template>
  <div class="about">
    <h1>模块管理</h1>
    <textarea class="text" rows="6"></textarea>
    <!-- Trigger -->
    <button class="btn" :data-clipboard-text="text">
      复制
    </button>
    <div><a @click="changeText">改变内容</a></div>
  </div>
</template>
<script>
import ClipboardJS from 'clipboard';

export default {  
  name: 'Home',
  components: {
    // Clipboard
  },
  data() {
    return {
      // text: 'id, \nname, \nusername, \nmeans'\
      text: '',
      list: [
        { id: 1, name: 'id' },
        { id: 2, name: 'name' },
        { id: 3, name: 'username' },
        { id: 4, name: 'password' },
      ]
    }
  },
  methods: {
    changeText() {
      const arr = []
      this.list.push({id:1, name: 'du'})
      this.list.map(item => arr.push(item.name))
      this.text = arr.join(',\n')
    },
  },
  mounted() {
    const arr = []
    this.list.map(item => arr.push(item.name))
    this.text = arr.join(',\n')
    new ClipboardJS('.btn');
  },
}
</script>
<style lang="less" scoped>
.text{
  width: 80%;
}
</style>