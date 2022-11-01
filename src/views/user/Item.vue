<template>
  <div>{{ index }} - {{ source.text }}</div>
</template>

<script>
  export default {
    name: 'item-component',
    props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style lang="less" scoped>
// .item{
//     padding: 10px 20px;
//     margin-top: -1px;
//     border: 1px solid transparent;
//   }
</style>