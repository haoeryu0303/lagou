<!-- 没有登录时底部登录条 -->
<template>
  <div class="no-lg-footer">
    <div class="container cf">
      <img src="/images/icon/logo_41a2761.png" class="ad-logo fl" />
      <div class="count fl">
        <img src="/images/icon/text_4434674.png" class="c-img" />
        <p>
          {{ cpy + "家公司 | " + job + "个职位，在拉勾等你" }}
        </p>
      </div>
      <div class="login-wrap fl cf">
        <div class="phone fl">
          <span class="p-code fl" @click.stop="showCodeList = !showCodeList"
            >{{ areaCode }}
            <i class="icn-down" :class="{ rotate: showCodeList }"></i>
          </span>
          <ul class="code-list" v-if="showCodeList">
            <li v-for="(item, index) in areaCodeList" :key="index">
              <p class="a-sort">{{ item.name }}</p>
              <ul class="sub-list">
                <li
                  class="c-item cf"
                  v-for="subItem in item.countryList"
                  :key="subItem.code"
                  @click="
                    areaCode = subItem.code;
                    showCodeList = false;
                  "
                >
                  <span class="area-name fl">{{ subItem.name }}</span>
                  <span class="area-code fr">{{ subItem.code }}</span>
                </li>
              </ul>
            </li>
          </ul>
          <input type="text" class="p-inp" placeholder="请输入常用手机号" />
        </div>
        <div class="code fl">
          <input type="number" placeholder="验证码" />
          <a href="javascript:;" class="code-btn green">获取</a>
        </div>
        <a href="javascript:;" class="btn fl">登录/注册</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "no-lg-footer",
  data() {
    return {
      cpy: Math.round(Math.random() * 1000000),
      job: Math.round(Math.random() * 1000000),
      areaCode: "0086",
      areaCodeList: [],
      showCodeList: false,
    };
  },
  methods: {
    // 获取地区手机区号
    _getCode() {
      this.axios.get("/json/code.json").then((res) => {
        this.areaCodeList = res.data.codelist;
      });
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
@import "@/common/scss/variable.scss";
@import "@/common/scss/publicLR.scss";

.no-lg-footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 90px;
  background-color: $basic-color;
  z-index: 99;
  .container {
    .ad-logo {
      width: 228px;
      height: 120px;
      margin-right: 20px;
    }

    .count {
      margin-top: 22px;
      color: #fff;
      margin-right: 50px;

      .c-img {
        height: 30px;
        width: auto;
      }
    }

    .login-wrap {
      margin-top: 27px;
      height: 36px;

      .phone,
      .code {
        display: inline-block;
        height: 36px;
        margin-right: 10px;
        border-bottom: 0;
        background-color: #fff;

        .p-code {
          height: 36px;
          background-color: #fff;
          color: #999;
          padding-left: 10px;
          width: 60px;
        }
        .code-list {
          width: 208px;
          top: -288px;
        }
        .code-btn {
          padding: 0 12px 0 10px;
          border-left: 1px solid $border-color_B;
        }
        input {
          height: 36px;
          width: 140px;
          text-indent: 8px;
          padding-left: 0;
        }
      }

      .btn {
        border: 1px solid #fff;
        width: 107px;
        text-align: center;
        line-height: 35px;
        opacity: 0.8;
        color: #fff;

        &:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.25);
        }
      }
    }
  }
}
</style>