<template>
  <div class="userProfile">
    <!-- <h1>userProfile111</h1>
    <div class="list" id="list">
      <div class="item" v-for="item in list" :key="item.name">{{item.name}}</div>
    </div> -->
    <div class="box">
      <div id="test" class="test" style="width: 0px;"></div>
    </div>
    <p class="p">当前进度：<span id="progress">0%</span>
      <button id="btn" class="btn">开启</button>
    </p>

    <div class="box">
      <div id="test1" class="test" style="width: 0px;"></div>
    </div>
    <p class="p">当前进度：<span id="progress1">0%</span>
      <button id="btn1" class="btn">开启</button>
    </p>

    <div>
      <button id="btns" class="btn">同时开启</button>
    </div>
  </div>
</template>

<script type="text/jsx">
// Cherrypick extra plugins
// import Sortable, { MultiDrag, Swap } from 'sortablejs';

// Sortable.mount(new MultiDrag(), new Swap());

export default {
  name: 'userProfile',
  components: {
    // Clipboard
  },
  data() {
    return {
      list: [],
    }
  },
  methods: {
    init() {
      // for (let i = 0; i < 5000; i++) {
      //   this.list.push({
      //     name: `列表${i}`
      //   })
      // }

      // console.log(window.Sortable)

      // const el = document.getElementById('list');
      // const sortable = Sortable.create(el, {
      //   animation: 150,
      //   handle: '.item',
      //   multiDrag: true,
      //   selectedClass: "selected"
      // });
      const btn = document.getElementById("btn");
      const test = document.getElementById("test");
      const progress = document.getElementById("progress");
      const btn1 = document.getElementById("btn1");
      const test1 = document.getElementById("test1");
      const progress1 = document.getElementById("progress1");

      
      //使用 requestAnimationFrame 实现
      const btnClick = () => {
        var timer = requestAnimationFrame(function fn() {
          if (parseInt(test.style.width) < 300) {
            test.style.width = parseInt(test.style.width) + 3 + "px";
            progress.innerHTML = parseInt(test.style.width) / 3 + "%";
            timer = requestAnimationFrame(fn);
          } else {
            cancelAnimationFrame(timer);
          }
        });
      }
      btn.onclick = btnClick;
      //使用 setTimeout 实现
      const btn1Click = () => {
        var timer = setTimeout(function fn() {
          if (parseInt(test1.style.width) < 300) {
            test1.style.width = parseInt(test1.style.width) + 3 + 'px';
            progress1.innerHTML = parseInt(test1.style.width) / 3 + '%';
            timer = setTimeout(fn, 17);
          } else {
            clearTimeout(timer);
          }
        }, 17);
      }
      btn1.onclick = btn1Click

      const btns = document.querySelector('#btns');
      btns.onclick = () => {
        btn1Click();
        btnClick();
      }
    },
  },
  mounted() {
    requestAnimationFrame(() => {
      this.init()
    })
    

    // demo1

    // setTimeout(() => {
    //     console.log('a')
    // })
    // requestAnimationFrame(() => {
    //     console.log('b')
    // })

    // demo2

    // setTimeout(() => {
    //     console.log('a')
    // },1)
    // requestAnimationFrame(() => {
    //     console.log('b')
    // })


    // demo3

    // console.log('a')
    // setTimeout(() => {
    //     console.log('b')
    // }, 0)
    // setTimeout(() => {
    //     console.log('c')
    // }, 3)
    // setTimeout(() => {
    //     console.log('d')
    // }, 17)
    // requestAnimationFrame(() => {
    //     console.log('e')
    // })
    // console.log('g')
    // Promise.resolve().then(() => {
    //     console.log('h');
    // });
      
  }
}
</script>

<style lang="less" scoped>
.list{
  text-align: left;
  height: 500px;
  margin: 0 10px;
  overflow-y: auto;
  border: 1px solid #ddd;
  .item{
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

.box {
  margin: 20px;
  border: 1px solid #ddd;
  width: 300px;
  height: 40px;
}
.test {
  width: 10px;
  height: 40px;
  line-height: 12px;
  margin-bottom: 5px;
  background: #000;
}
.p {
  margin: 0 0 0 20px;
  text-align: left;
}

</style>