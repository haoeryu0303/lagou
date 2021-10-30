<!-- 登录页 -->
<template>
  <div class="login">
    <div class="header">
      <router-link to="/home" class="to-home"></router-link>
    </div>
    <div class="login-wrap br-3 cf">
      <i
        class="icn-l"
        :class="{ 'icn-l-1': loginWay == 1, 'icn-l-2': loginWay == 2 }"
        @click="loginWay = loginWay == 1 ? 2 : 1"
      ></i>
      <div class="left-area fl">
        <h3 class="head">
          <span
            class="item"
            :class="{ green: psdCode == 1 }"
            @click="psdCode = 1"
            >密码登录</span
          ><span
            class="item"
            :class="{ green: psdCode == 2 }"
            @click="psdCode = 2"
            >验证码登录</span
          >
          <i class="line" :class="{ 'line-code': psdCode == 2 }"></i>
        </h3>
        <div class="psd-wrap"></div>
        <div class="code-wrap"></div>
        <p class="agree">
          <i
            class="a-btn"
            :class="{ 'agree-btn': agree, 'no-agree-btn': !agree }"
            @click="agree = !agree"
          ></i
          >进入即代表你已同意<span class="green">《用户协议》</span>及<span
            class="green"
            >《隐私政策》</span
          >
        </p>
      </div>
      <div class="divider fl"></div>
      <div class="right-area fl">
        <p>还没有账号:</p>
        <router-link to="/register" class="to-r-l green"
          >立即注册<i class="r-l"></i
        ></router-link>
        <p>使用以下账号直接登录:</p>
        <a href="javascript:;" class="icon-2 more-way wb"></a>
        <a href="javascript:;" class="icon-2 more-way wx"></a>
        <a href="javascript:;" class="icon-2 more-way qq"></a>
        <a href="javascript:;" class="icon-2 more-way bd"></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginWay: 1, //登录方式之二维码与其他方式  1：二维码 2：其他
      psdCode: 1, //密码验证码登录方式切换  1：密码 2：验证码
      agree: false, //是否同意协议，默认不同意
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
    .left-area {
      width: 290px;
      height: 20px;
      .head {
        position: relative;
        line-height: 33px;
        margin-bottom: 29px;
        border-bottom: 1px solid $border_color_B;
        .item {
          display: inline-block;
          width: 145px;
          text-align: center;
          cursor: pointer;
          font-size: 16px;
        }
        .line {
          position: absolute;
          bottom: -1px;
          left: 0;
          height: 1px;
          background-color: $basic_color;
          width: 145px;
          transition: all 0.5s;
          &::before {
            position: absolute;
            content: "";
            left: 50%;
            bottom: 0;
            width: 0;
            height: 0;
            margin-left: -6px;
            border: 6px solid transparent;
            border-bottom-color: #007b5f;
          }
          &::after {
            position: absolute;
            content: "";
            left: 50%;
            margin-left: -5px;
            bottom: 0;
            width: 0;
            height: 0;
            border: 5px solid transparent;
            border-bottom-color: #fff;
          }
        }
        .line-code {
          left: 145px;
        }
      }
    }
    .divider {
      position: relative;
      height: 274px;
      border-left: 1px dashed $border_color_B;
      margin: 0 52px;
      &::after {
        position: absolute;
        content: "OR";
        left: -10px;
        top: 50%;
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        margin-top: -10px;
        color: $border_color_B;
        background-color: #fff;
      }
    }
    .right-area {
      width: 150px;
      p {
        margin: 44px 0 8px;
      }
      .to-r-l {
        font-size: 16px;
        &:hover {
          text-decoration: underline;
        }
      }
      .r-l {
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px;
        @include bgImg(18px, 17px, "/images/icon/icon-arrow-right_ea91505.png");
      }
      .more-way {
        height: 22px;
        margin-right: 10px;
      }
      .wb {
        width: 27px;
        background-position: -194px -82px;
        &:hover {
          background-position: -148px -82px;
        }
      }
      .wx {
        width: 27px;
        background-position: -194px -82px;
        &:hover {
          background-position: -148px -82px;
        }
      }
      .qq {
        width: 22px;
        background-position: -194px -123px;
        &:hover {
          background-position: -194px -164px;
        }
      }
      .bd {
        width: 27px;
        background-position: -194px -82px;
        &:hover {
          background-position: -148px -82px;
        }
      }
    }
  }
}
</style>