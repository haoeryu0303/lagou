<!-- 搜索注册页面 -->
<template>
  <div class="landing">
    <div class="header">
      <div class="container-1 cf">
        <h3 class="header-logo fl">
          <img
            src="/images/logo/1624847435034.png"
            alt="拉钩logo"
            class="logo"
          />
        </h3>
        <div class="app fr">
          <span
            ><i class="icon-app"></i>拉勾APP
            <img src="/images/qr/1627527225116.png" class="app-qr"
          /></span>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="main">
        <div class="container-1">
          <img src="/images/logo/slgon2_d591daec.png" class="logo-2" />
          <div class="wrap f_b_s">
            <div class="search-wrap">
              <div class="search-box br-4">
                <input
                  type="text"
                  class="search"
                  placeholder="搜索职位名称，查看本月高薪招聘信息"
                />
                <i class="icon-search"></i>
                <a href="javascript:;" class="btn-search br-4">搜索职位</a>
              </div>
              <div class="type-box f_b_s">
                <ul class="type-name br-4 br-4">
                  <li
                    class="item br-4"
                    :class="{ active: showType == item.id }"
                    v-for="(item, index) in typeList"
                    :key="item.id"
                    @click="
                      showType = item.id;
                      showImgList = typeList[index].list;
                    "
                  >
                    {{ item.type }}
                  </li>
                </ul>
                <div class="img-wrap f_b_s br-4">
                  <img
                    v-for="(imgItem, imgIndex) in showImgList"
                    :key="imgIndex"
                    :src="imgItem.img"
                    class="img br-4"
                    @click="
                      card = imgItem;
                      showInfo = false;
                    "
                  />
                </div>
                <div class="job-info" :class="{ hide: showInfo }">
                  <div class="mask" @click="showInfo = true"></div>
                  <div class="info-box br-4">
                    <i class="icon_close" @click="showInfo = true"></i>
                    <div class="head cf">
                      <img :src="card.img" class="img fl" />
                      <div class="name-tip fl">
                        <p class="name">
                          {{ card.name }}
                        </p>
                        <span class="job-count fr"
                          >企业共<i class="color">{{ card.jobCount }}+</i
                          >个在招职位</span
                        >
                        <p class="tip" v-if="card.tip">{{ card.tip }}</p>
                        <p class="salary" v-if="card.salary">
                          {{ card.salary }}
                        </p>
                      </div>
                    </div>
                    <div class="tip-tit cf">
                      {{ card.type == 1 ? "热招职位" : "职位要求" }}
                    </div>
                    <div class="job-box" v-if="card.hotJob">
                      <span
                        class="job"
                        v-for="(item, index) in card.hotJob"
                        :key="index"
                        >{{ item }}</span
                      >
                    </div>
                    <div class="cdt-box" v-if="card.condition">
                      <span
                        class="cdt"
                        v-for="(item, index) in card.condition"
                        :key="index"
                        >{{ item }}</span
                      >
                    </div>
                    <div class="tip-tit">福利</div>
                    <div class="weal-box">
                      <span
                        class="weal br-3"
                        v-for="(item, index) in card.weal"
                        :key="index"
                        >{{ item }}</span
                      >
                    </div>
                    <p class="register-detail">
                      立即注册，即可查看更多职位信息
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="regist-wrap br-4">
              <div class="r-head">
                <span class="green">一键</span>注册 轻松获高薪
              </div>
              <div action="regist" class="r-form">
                <p class="phone">
                  <span class="p-code cf" @click="showCodeList = !showCodeList"
                    >{{ checkCode }}
                    <i class="icn-down fr" :class="{ rotate: showCodeList }"></i>
                  </span>
                  <ul class="code-list" v-if="showCodeList">
                      <li v-for="(item, index) in codeList" :key="index">
                        <p class="a-sort">{{ item.name }}</p>
                        <ul class="sub-list">
                          <li
                            class="c-item cf"
                            v-for="subItem in item.countryList"
                            :key="subItem.code"
                            @click="checkCode=subItem.code;showCodeList=false"
                          >
                            <span class="area-name fl">{{ subItem.name }}</span>
                            <span class="area-code fr">{{ subItem.code }}</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  <input
                    type="text"
                    class="p-inp"
                    placeholder="请输入常用手机号"
                  />
                </p>
                <p class="v-code">
                  <input
                    type="text"
                    class="c-inp"
                    placeholder="请输入手机验证码"
                  />
                  <span class="get-code-btn green">获取验证码</span>
                </p>
                <a href="javascript:;" class="r-btn br-3">
                  立即注册
                </a>
                <p class="to-login"><router-link to="/login" class="green to-login">已有账号，直接登录</router-link></p>
              </div>
              <div class="agree">
                <i
                  class="a-btn"
                  :class="{ 'agree-btn': agree, 'no-agree-btn': !agree }"
                  @click="agree = !agree"
                ></i>
                进入即代表你已同意<span class="green">《用户协议》</span>及<span
                  class="green"
                  >《隐私政策》</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container-1">
        <ul class="infos cf">
          <li
            class="item fl f_b_s"
            v-for="(item, index) in infoList"
            :key="index"
          >
            <img :src="item.img" class="img" />
            <div class="info">
              <p class="tit">{{ item.tit }}</p>
              <p class="tip">{{ item.tip }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-footer">
      <h3 class="nav-logo">
        <img src="/images/logo/logo.png" class="logo" />
      </h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "landing",
  data() {
    return {
      showType: 1001, //默认显示技术
      typeList: [], //工作类别列表
      showImgList: [], //当前工作类别对应的公司或职位列表
      card: {}, // 点击显示的当前某职位或公司
      infoList: [
        {
          img: "/images/icon/icon1_37bdd49e.png",
          tit: "快速入职",
          tip: "最快24小时拿到企业offer",
        },
        {
          img: "/images/icon/icon2_e42a2c4a.png",
          tit: "隐私保护",
          tip: "安全私密快速投简历",
        },
        {
          img: "/images/icon/icon3_c6a75262.png",
          tit: "薪资透明",
          tip: "薪资透明真实谢绝面议",
        },
        {
          img: "/images/icon/icon4_85c5b151.png",
          tit: "海量信息",
          tip: "海量互联网职位实时更新",
        },
      ], // footer 提示列表
      showInfo: true, //职位或公司弹窗弹窗是否显示
      agree: false, //是否同意相关协议
      codeList: [], //地区手机区号列表code
      checkCode: "0086", //选中的区域手机区号  默认中国大陆
      showCodeList: false, //是否显示手机区号列表
    };
  },
  methods: {
    // 获取职位或公司列表
    _getJob() {
      this.axios.get("/json/landing.json").then((res) => {
        this.typeList = res.data.typeList;
        this.showImgList = res.data.typeList[0].list;
      });
    },
    // 获取地区手机区号
    _getCode() {
      this.axios.get("/json/code.json").then((res) => {
        this.codeList = res.data.codelist;
        console.log(this.codeList);
      });
    },
  },
  mounted() {
    this._getJob();
    this._getCode();
  },
};
</script>
<style lang='scss' scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";
.landing {
  .header {
    .header-logo {
      height: 60px;
      line-height: 60px;
      .logo {
        width: 283px;
        height: 22px;
        margin-top: 19px;
      }
    }
    .app {
      line-height: 60px;
      color: $font_color_C;
      cursor: pointer;
      span {
        position: relative;
        .icon-app {
          display: inline-block;
          vertical-align: middle;
          @include bgImg(15px, 15px, "/images/icon/icon_app.png");
          background-size: contain;
        }
        .app-qr {
          display: none;
          width: 120px;
          height: 120px;
          position: absolute;
          top: 20px;
          right: 0;
          z-index: 102;
          box-shadow: 0 0 2px 2px #00000020;
        }
        &:hover {
          .app-qr {
            display: block;
          }
        }
      }
    }
  }
  .body {
    .main {
      min-height: 694px;
      min-width: 1000px;
      background: $basic_color url("/images/logo/bg_49338802.png") no-repeat;
      background-size: auto 112px;
      background-position: bottom;
      .logo-2 {
        display: block;
        height: 34px;
        padding: 28px 0 8px;
      }
      .wrap {
        .search-wrap {
          .search-box {
            width: 610px;
            height: 46px;
            line-height: 46px;
            background-color: #fff;
            position: relative;
            .search {
              text-indent: 40px;
              height: 35px;
              width: 500px;
              color: #999;
            }
            .icon-search {
              position: absolute;
              @include bgImg(16px, 16px, "/images/icon/icon-search.png");
              left: 12px;
              top: 15px;
            }
            .btn-search {
              position: absolute;
              right: 5px;
              top: 5px;
              height: 35px;
              line-height: 35px;
              padding: 0 20px;
              background-color: $basic_color;
              color: #fff;
            }
          }
          .type-box {
            position: relative;
            padding-top: 10px;
            .type-name {
              background-color: $bg_color;
              margin-right: 10px;
              padding: 5px;
              .item {
                width: 102px;
                height: 67px;
                line-height: 67px;
                text-align: center;
                color: #fff;
                font-size: 16px;
                cursor: pointer;
              }
              .active {
                background: hsla(0, 0%, 100%, 0.5);
                color: $font_color_D;
              }
            }
            .img-wrap {
              width: 488px;
              height: 424px;
              flex-wrap: wrap;
              .img {
                opacity: 0.72;
                cursor: pointer;
                &:hover {
                  opacity: 1;
                }
              }
            }
            .job-info {
              .mask {
                position: fixed;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                z-index: 100;
                background-color: rgba(0, 0, 0, 0.5);
              }
              .info-box {
                position: absolute;
                z-index: 101;
                left: 30px;
                top: -10px;
                padding: 30px;
                width: 465px;
                height: 334px;
                background: #fff url("/images/M06/0014.png") no-repeat;
                background-position: right bottom;
                background-size: 90px 80px;
                .icon_close {
                  position: absolute;
                  right: 20px;
                  top: 20px;
                  @include bgImg(15px, 15px, "/images/icon/delete_3e0bb29.png");
                }
                .head {
                  .img {
                    width: 100px;
                    height: 60px;
                    border: 1px solid $border_color_A;
                    margin-right: 16px;
                  }
                  .name-tip {
                    display: inline-block;
                    width: 320px;
                    .name {
                      display: inline-block;
                      width: 120px;
                      height: 30px;
                      line-height: 30px;
                      margin-bottom: 6px;
                      font-size: 19px;
                      font-weight: bold;
                      overflow: hidden;
                      text-overflow: ellipsis;
                    }
                    .job-count {
                      font-weight: normal;
                      padding-top: 10px;
                      font-size: 16px;
                      .color {
                        color: $pay_color;
                      }
                    }
                    .salary {
                      font-size: 18px;
                      font-weight: bold;
                      color: $pay_color;
                    }
                  }
                }
                .tip-tit {
                  padding: 30px 0 12px;
                  line-height: 22px;
                  font-size: 16px;
                  font-weight: bold;
                }
                .job {
                  display: inline-block;
                  width: 151px;
                  margin-bottom: 8px;
                  line-height: 22px;
                  color: $font_color_B;
                  &:hover {
                    color: $basic_color;
                  }
                }
                .cdt {
                  color: $font_color_B;
                  font-size: 14px;
                  margin-right: 20px;
                  &:hover {
                    color: $basic_color;
                  }
                }
                .weal {
                  display: inline-block;
                  padding: 3px 9px;
                  line-height: 22px;
                  font-size: 12px;
                  border: 1px solid $border_color_A;
                  color: $font_color_B;
                  margin-right: 6px;
                  box-sizing: border-box;
                  &:hover {
                    border-color: $basic_color;
                    color: $basic_color;
                  }
                }
                .register-detail {
                  padding-top: 47px;
                  font-size: 14px;
                  color: $font_color_B;
                }
              }
            }
          }
        }
        .regist-wrap {
          z-index: 101;
          padding: 57px 36px 35px;
          background-color: #fff;
          .r-head {
            position: relative;
            width: 260px;
            line-height: 26px;
            text-align: center;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 47px;
            &::after {
              position: absolute;
              left: 50%;
              bottom: -13px;
              margin-left: -12px;
              content: " ";
              width: 24px;
              height: 3px;
              opacity: 0.3;
              background-color: #333;
            }
          }
          .r-form {
            padding: 0 10px 44px;
            user-select: none;
            line-height: 38px;
            .phone {
              margin-bottom: 30px;
              position: relative;
              border-bottom: 1px solid $border_color_A;
              .p-code {
                cursor: pointer;
                display: inline-block;
                width: 72px;
                .icn-down {
                  display: inline-block;
                  margin-top: 14px;
                  @include bgImg(10px, 10px, "/images/icon/down.png");
                  background-size: contain;
                  transition: all 0.3s;
                }
                .rotate {
                  transform: rotate(180deg);
                }
              }
              .code-list {
                position: absolute;
                left: 0;
                top: 38px;
                width: 183px;
                height: 288px;
                line-height: 36px;
                background-color: #fff;
                border: 1px solid #eee;
                overflow-y: auto;
                .a-sort {
                  padding: 0 12px;
                }
                .c-item {
                  padding: 0 12px;
                  &:hover {
                    background-color: #f4f4f4;
                    color: $basic_color;
                  }
                }
              }
              .p-inp {
                padding-left: 10px;
                width: 188px;
                color: $font_color_B;
              }
            }
            .v-code {
              border-bottom: 1px solid $border_color_A;
              margin-bottom: 40px;
              .c-inp {
                width: 180px;
                margin-right: 18px;
              }
              .get-code-btn {
                cursor: pointer;
              }
            }
            .r-btn {
              display: block;
              width: 100%;
              height: 48px;
              line-height: 48px;
              margin-bottom: 10px;
              font-size: 16px;
              text-align: center;
              color: #fff;
              background-image: linear-gradient(45deg, #09cb9d, #02b389);
            }
            .to-login {
              text-align: center;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  .footer {
    padding: 60px 0;
    .infos {
      .item {
        line-height: 24px;
        margin-right: 60px;
        color: $font_color_B;
        .img {
          width: 43px;
          height: 43px;
          margin-right: 10px;
        }
        .info {
          .tit {
            font-size: 18px;
          }
          .tip {
            font-size: 12px;
          }
        }
      }
    }
  }
  .nav-footer {
    text-align: center;
    padding: 30px 0 20px;
    background-color: #fafafa;
    border-top: 1px solid $border_color_B;
  }
}
</style>
