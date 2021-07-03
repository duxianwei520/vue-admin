<template>
  <div id="app">
    <header id="header">
      <div class="left">
        <span class="logoWrap">
          <img alt="Vue logo" class="logo" src="./assets/logo.png" />
        </span>
        <span class="slogan">后台管理系统</span>
      </div>
      <div class="right">
        <span class="username" title="dupi">{{ username }}</span>
        <span class="logout">退出</span>
      </div>
    </header>

    <div id="main">
      <div id="nav">
        <ul id="navs">
          <li class="linkWrap">
            <router-link to="/">主页</router-link>
          </li>
          <li class="linkWrap">
            <router-link to="/about">关于</router-link>
          </li>
          <li class="linkWrap">
            <router-link to="/userManage">用户管理</router-link>
          </li>
          <li class="linkWrap">
            <router-link to="/roleManage">角色管理</router-link>
          </li>
          <li class="linkWrap">
            <router-link to="/moduleManage">模块管理</router-link>
          </li>
          <li class="linkWrap">
            <router-link to="/user/foo">用户中心</router-link>
          </li>
          <li class="linkWrap">
            <router-link to="/user/foo/userProfile">用户资料</router-link>
          </li>
          <li class="linkWrap">
            <router-link to="/user/foo/userPosts">岗位</router-link>
          </li>
        </ul>
      </div>
      <div id="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: function () {
    return {
      isActive: false,
      // username: this.$store.state.username,
    }
  },
  computed: {
    username: function () {
      return this.$store.state.username
    },
  },
  mounted: function () {},
}
</script>

<style lang="less">
@import './style/base.less';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .flexcolumn;
  height: 100%;
}

#header {
  flex: 0 0 64px;
  background-color: #1d2349;
  padding: 0 16px;
  height: 64px;
  overflow: hidden;
  .left {
    float: left;
    line-height: 64px;
    .logoWrap {
      display: inline-block;
      .logo {
        width: 35px;
        height: auto;
      }
    }
    .slogan {
      font-size: 18px;
      color: #fff;
      vertical-align: middle;
    }
  }
  .right {
    float: right;
    color: #fff;
    line-height: 64px;
    .username {
      margin-right: 10px;
    }
  }
}

#main {
  .flexrow;
  height: 100%;
  #nav {
    .flexcolumn;
    flex: 0 0 170px;
    height: 100%;
    #navs {
      .flexcolumn;
      background-color: #1e2347;
      .linkWrap {
        height: 40px;
        line-height: 40px;
        a {
          &:hover {
            background: #4c577b;
          }
          display: block;
          color: #fff;
        }
        .router-link-exact-active {
          background-image: linear-gradient(
            270deg,
            rgba(142, 172, 255, 0) 0%,
            #2c56a1 100%
          );
        }
      }
    }
  }
  #content {
    flex: 1;
    min-height: 0;
  }
}
</style>
