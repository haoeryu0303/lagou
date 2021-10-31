<!-- 登录页 -->
<template>
  <div class="login">
    <div class="header">
      <router-link to="/home" class="to-home"></router-link>
    </div>
    <div class="lr-wrap br-3 cf">
      <i class="icn-l" :class="{ 'icn-l-1': loginWay == 1, 'icn-l-2': loginWay == 2 }"
        @click="loginWay = loginWay == 1 ? 2 : 1"></i>
      <div class="left-area fl cf">
        <h3 class="head">
          <span class="item" :class="{ green: psdCode == 1 }" @click="psdCode = 1">密码登录</span><span class="item"
            :class="{ green: psdCode == 2 }" @click="psdCode = 2">验证码登录</span>
          <i class="line" :class="{ 'line-2': psdCode == 2 }"></i>
        </h3>
        <div class="psd-wrap" v-if="psdCode == 1">
          <input v-model="pho" type="text" class="pho-eml" placeholder="请输入常用的手机号/邮箱" />
          <input v-model="psd" type="password" class="password" placeholder="请输入密码" />
          <p class="no-psd green">忘记密码?</p>
          <span class="r-l-btn br-3" @click="login">登 录</span>
        </div>
        <div class="code-wrap" v-if="psdCode == 2">
          <p class="phone">
            <span class="p-code cf" @click.stop="showCodeList = !showCodeList">{{ checkCode }}
              <i class="icn-down fr" :class="{ rotate: showCodeList }"></i>
            </span>
            <ul class="code-list" v-if="showCodeList">
              <li v-for="(item, index) in codeList" :key="index">
                <p class="a-sort">{{ item.name }}</p>
                <ul class="sub-list">
                  <li class="c-item cf" v-for="subItem in item.countryList" :key="subItem.code"
                    @click="checkCode=subItem.code;showCodeList=false">
                    <span class="area-name fl">{{ subItem.name }}</span>
                    <span class="area-code fr">{{ subItem.code }}</span>
                  </li>
                </ul>
              </li>
            </ul>
            <input type="text" class="p-inp" placeholder="请输入常用手机号" />
          </p>
          <p class="v-code">
            <input type="text" class="c-inp" placeholder="请输入手机验证码" />
            <span class="get-code-btn green">获取验证码</span>
          </p>
         <span class="r-l-btn br-3">登 录</span>
        </div>
        <p class="agree">
          <i class="a-btn" :class="{ 'agree-btn': agree, 'no-agree-btn': !agree }"
            @click="agree = !agree"></i>进入即代表你已同意<span class="green">《用户协议》</span>及<span class="green">《隐私政策》</span>
        </p>
      </div>
      <div class="divider fl"></div>
      <div class="right-area fl">
        <p>还没有账号:</p>
        <router-link to="/register" class="to-r-l green">立即注册<i class="r-l"></i></router-link>
        <p>使用以下账号直接登录:</p>
        <a href="javascript:;" class="icon-2 more-way wb"></a>
        <a href="javascript:;" class="icon-2 more-way wx"></a>
        <a href="javascript:;" class="icon-2 more-way qq"></a>
        <a href="javascript:;" class="icon-2 more-way bd"></a>
      </div>
    </div>
    <p class="tip" style="font-size:12px;text-align:center;">暂无注册功能，请直接使用手机：<span class="green">13335558880</span>，密码/code：<span class="green">121212</span>登录</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginWay: 1, //登录方式之二维码与其他方式  1：二维码 2：其他
      psdCode: 1, //密码验证码登录方式切换  1：密码 2：验证码
      agree: false, //是否同意协议，默认不同意
      codeList: [], //地区手机区号列表
      showCodeList: false,
      checkCode: "0086",
      pho: "", //登录手机号
      psd: "", //登录密码
    };
  },
  methods: {
    // 获取地区手机区号
    _getCode() {
      this.axios.get("/json/code.json").then((res) => {
        this.codeList = res.data.codelist;
      });
    },
    // 登录功能
    login() {
      if (this.pho == 13335558880 && this.psd == "121212") {
        this.$router.push({
          path: "/index",
        });
      }
    },
  },
  mounted() {
    this._getCode();
    document.addEventListener("click", () => {
      this.showCodeList = false;
    });
  },
};
</script>
<style lang='scss' scoped>
@import "@/common/scss/publicLR.scss";
</style>