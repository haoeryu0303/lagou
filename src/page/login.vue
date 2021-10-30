<!-- 登录页 -->
<template>
  <div class="login">
    <div class="header">
      <router-link to="/home" class="to-home"></router-link>
    </div>
    <div class="login-wrap br-3">
      <i
        class="icn-l"
        :class="{ 'icn-l-1': loginWay == 1, 'icn-l-2': loginWay == 2 }"
      ></i>
      <i
        class="icn-t"
        :class="{ 'icn-l-1': loginWay == 1, 'icn-l-2': loginWay == 2 }"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginWay: 2, //登录方式之二维码与其他方式  1：二维码 2：其他
    };
  },
};
</script>

<style lang='scss' scoped>
@import "@/common/scss/mixin.scss";
@import "@/common/scss/variable.scss";
.login {
  .header {
    background-color: $basic_color;
    height: 360px;
    position: relative;
    .to-home {
      position: absolute;
      left: 50%;
      top: 94px;
      margin-left: -350px;
      display: inline-block;
      @include bgImg(314px, 24px, "/images/logo/1624876721800.png");
      background-size: contain;
    }
  }
  .login-wrap {
    position: relative;
    margin: -205px auto 60px;
    width: 552px;
    height: 323px;
    padding: 62px 70px 68px 78px;
    border: 1px solid #dce1e6;
    background: #fff;
    .icn-l {
      position: absolute;
      left: 6px;
      top: 6px;
      @include bgImg(52px, 52px, "/images/icon/popup-sprite_e5ea04f.png");
    }
    .icn-l-1 {
      background-position: -440px -268px;
      &:hover {
        background-position: -334px -330px;
      }
    }
    .icn-l-2 {
      background-position: -406px -340px;
      &:hover {
        background-position: -334px -402px;
      }
    }
  }
}
</style>