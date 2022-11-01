<template>
  <div>
    <virtual-list
      ref="list"
      class="list"
      :data-key="'uid'"
      :data-sources="items"
      :data-component="itemComponent"
      item-class="item"
      wrap-class="listWrap"
    />
  </div>
</template>

<script type="text/jsx">
  import Item from './Item'
  import VirtualList from 'vue-virtual-scroll-list'
  // Cherrypick extra plugins
  import Sortable, { MultiDrag, Swap } from 'sortablejs';

  Sortable.mount(new MultiDrag(), new Swap());

 

  export default {
    name: 'root',
    data () {
      return {
        itemComponent: Item,
        items: []
      }
    },
    components: { 'virtual-list': VirtualList },
    methods: {
      init() {
        for (let i = 0; i < 5000; i++) {
          this.items.push({
            uid: `unique_${i}`,
            text: `列表${i}`
          })
        }
        console.log(Sortable)
        // const el = document.querySelector('.listWrap');
        const el = this.$refs.list.$el.children[0]
         Sortable.create(el, {
          animation: 150,
          handle: '.item',
          multiDrag: true,
          selectedClass: "selected"
        });

        // raf节流函数，亲测好使
        // function rafThrottle(func) {
        //   let lock = false;
        //   return function (...args) {
        //     if (lock) return;
        //     lock = true;
        //     window.requestAnimationFrame(() => {
        //       func.apply(this, args);
        //       lock = false;
        //     });
        //   };
        // }


      },
      initA() {
        console.log(new Date().getMilliseconds())
      },
      initB() {
        console.log(new Date().getMilliseconds())
      },
      initC() {
        console.log(new Date().getMilliseconds())
      },
      initD() {
        console.log(new Date().getMilliseconds())
      },
    },
    mounted() {
      this.init()
      // this.initA();
      // this.initB();
      // this.initC();
      // this.initD();
      // const inits = [this.initA, this.initB, this.initC, this.initD]
      // let num = 0
      // function render() {
      //   num += 1;
      //   if (num < inits.length) {
      //     requestAnimationFrame(() => {
      //       requestAnimationFrame(() => {
      //         render(inits[num]())
      //       })
      //     })
      //   }
      // }
      // render(inits[0]())
      
    }
  }
</script>

<style lang="less" scoped>
.list{
  text-align: left;
  height: 500px;
  margin: 10px;
  overflow-y: auto;
  border: 1px solid #ddd;
  /deep/ .item{
    padding: 10px 20px;
    margin-top: -1px;
    border: 1px solid transparent;
    &:nth-child(even){
      background-color: #eee;
    }
    &:hover{
      // background-color: #f5f5f5;
    }
    
    &.selected {
      background-color: #f9c7c8;
      border: solid red 1px;
    }
  }
}
</style>