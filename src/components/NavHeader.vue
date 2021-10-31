<!-- 公用头部组件 -->
<template>
  <div class="nav-header">
    <div class="container cf">
      <div class="left fl">
        <a class="logo fl" href="/#/index"></a>
        <div class="area green fl" v-if="$route.path == '/index'">
          {{ area }} <i class="down"></i>
        </div>
        <ul class="nav fl">
          <li class="nav-item fl">
            <router-link class="item" to="/index">首页</router-link>
          </li>
          <li class="nav-item fl">
            <router-link class="item" to="/jobs">职位</router-link>
          </li>
          <li class="nav-item fl">
            <router-link class="item" to="/companies">公司</router-link>
          </li>
          <li class="nav-item fl">
            <router-link class="item" to="/school">校园招聘</router-link>
          </li>
          <li class="nav-item fl">
            <router-link class="item" to="/course">课程</router-link>
          </li>
          <li class="nav-item fl">
            <router-link class="item" to="/app">APP</router-link>
          </li>
        </ul>
      </div>
      <div class="right fr">
        <div class="user"></div>
        <div class="no-user">
          <span class="login">登录</span>
          <i class="line">|</i>
          <span class="register">注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      area: "全国站",
    };
  },
  mounted() {
    console.log(this.$route.path);
  },
};
</script>

<style lang='scss' scoped>
@import "@/common/scss/variable.scss";
.nav-header {
  background-color: $nav_head_bg_color;
  .container {
    height: 40px;
    line-height: 40px;
    color: $nav_font_color;

    .left {
      .logo {
        display: block;
        width: 66px;
        height: 16px;
        margin-top: 12px;
        margin-right: 34px;
        background: url("/images/logo/1624523613071.png");
        background-size: contain;
      }
      .area {
        position: relative;
        margin-right: 46px;
        .down {
          position: absolute;
          height: 0;
          width: 0;
          border-width: 5px;
          border-style: solid;
          border-color: #5f646d transparent transparent;
          right: -16px;
          top: 18px;
        }
      }
      .nav {
        .nav-item {
          .item {
            display: block;
            line-height: 40px;
            padding: 0 21px;
            color: $nav_font_color;
            &:hover {
              color: #fff;
            }
          }
          .router-link-active {
            background-color: #24282c;
            color: #fff;
          }
        }
      }
    }
    .right {
      .user {
      }
      .no-user {
        .line {
          margin: 7px;
        }
      }
    }
  }
}
</style>
