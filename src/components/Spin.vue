<template>
  <div v-if="spinning && loading" class="spin">
    <div class="box">
      <h5>加载中...</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'spin',
  props: {
    spinning: Boolean,
  },
  data: function () {
    return {
      loading: true
    }
  },
  methods: {
    init: function () {
      this.timer = setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      const body = document.querySelector('body')
      body.appendChild(this.$el)
    })
  },
  beforeDestroy: function () {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.spin{
  position: fixed;
  top: 45%;
  left: 40%;
  .box {
    min-width: 100px ;
    max-width: 200px;
    display: inline-block;
    padding: 10px 16px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow:0px 4px 12px rgba(0, 0, 0, 0.35);
    white-space: nowrap;
  }
}

</style>
