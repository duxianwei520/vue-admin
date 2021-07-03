<template>
  <div class="message">
    <div class="box">
      <h5>{{ content }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'message',
  data: function () {
    return {
      content: '提示信息',
      duration: 3000,
      onClose: function () {},
    }
  },
  props: {
    // content: {
    //   type: String,
    //   default: '提示信息'
    // }
  },
  methods: {
    close: function () {
      if (typeof this.close === 'function') {
        this.$el.parentNode.removeChild(this.$el)
      }
    },
  },
  mounted: function () {
    // console.log(this)
    this.timer = setTimeout(() => {
      this.close()
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    }, this.duration)
  },
  beforeDestroy: function () {
    clearTimeout(this.timer)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.message {
  position: fixed;
  top: 20px;
  left: 40%;
  .box {
    min-width: 200px;
    max-width: 500px;
    display: inline-block;
    padding: 10px 16px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    white-space: nowrap;
  }
}
</style>
