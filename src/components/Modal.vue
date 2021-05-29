<template>
  <div ref="modal" class="modals" v-if="modalVisible">
    <div class="modal-wrap">
      <div class="modal-mask" @click="onCancel"></div>

      <div class="modal">

        <div class="modal-title">{{title}}<span class="close" @click="onCancel">X</span></div>

        <div class="modal-body">
          <slot name="main"></slot>
        </div>

        <div class="modal-footer">
          <div class="btns">
            <a class="btn primary" @click="onOk">确定</a>
            <a class="btn close" @click="onCancel">取消</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    modalVisible: Boolean,
    title: {
      type: String,
      default: '弹窗'
    },
  },
  data: function () {
    return {

    }
  },
  methods: {
    onCancel: function () {
      this.$emit('onCancel')
    },
    onOk: function () {
      this.$emit('onOk')
    },
  },
  mounted () {
    this.$nextTick(() => {
      const body = document.querySelector("body")
      if (body.append) {
        body.append(this.$el)
      } else {
        body.appendChild(this.$el)
      }
    })
    // console.log(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../style/base.less';
.modal-mask{
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
}
.modal-wrap{
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
}
.modal{
  position: absolute;
  z-index: 1010;
  margin: 0 auto;
  top: 100px;
  left: 50%;
  width: 520px;
  margin-left: -260px;
  background-color: #fff;
  .modal-title{
    padding: 16px;
    border-bottom: 1px solid #ddd;
    text-align: left;
    .close{
      float: right;
      right: 16px;
      top: 10px;
      cursor: pointer;
    }
  }
  .modal-body{
    padding: 16px;
    text-align: left;
    min-height: 200px;
  }
  .modal-footer{
    padding: 16px;
    border-top: 1px solid #ddd;
    text-align: right;
    .btn{
      &:last-of-type{
        margin-left: 10px;
      }
    }
  }
}
</style>
