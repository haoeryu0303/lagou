<!-- 公用底部组件 -->
<template>
  <div class="nav-footer">
    <div class="container cf">
      <div class="qr-wrap fl">
        <router-link class="ybd app" to="/app"
          ><i class="icon icn-app"></i>下载拉勾APP
          <img src="/images/qr/1627527225116.png" class="qr app-qr" />
        </router-link>
        <a href="javascrip:;" class="ybd xcx"
          ><i class="icon icn-xcx"></i>微信小程序
          <img src="/images/qr/1624592519467.jpg" class="qr xcx-qr"
        /></a>
        <p class="gzh-wb">
          <a href="javascript:;" class="gzh"
            ><i class="icon icn-gzh"></i>拉勾公众号
            <img src="/images/qr/main_foot.png" class="qr gzh-qr"
          /></a>
          <a href="http://e.weibo.com/lagou720" class="wb"
            ><i class="icon icn-wb"></i>拉勾微博</a
          >
        </p>
      </div>
      <ul class="inner-wrap fl">
        <li>
          <h5 class="tit">企业服务</h5>
          <a href="javascript:;" class="inner green_h">招聘抢人宝典</a>
          <a href="javascript:;" class="inner green_h">公司搜索</a>
          <a href="javascript:;" class="inner green_h">拉勾APP</a>
        </li>
        <li>
          <h5 class="tit">用户帮助</h5>
          <a href="javascript:;" class="inner green_h">用户协议</a>
          <a href="javascript:;" class="inner green_h">隐私政策</a>
          <a href="javascript:;" class="inner green_h">在线提问</a>
        </li>
        <li>
          <h5 class="tit">联系方式</h5>
          <a href="javascript:;" class="inner green_h"
            >服务热线: 4006 2828 35 (9:00 -18:00)</a
          >
          <a href="javascript:;" class="inner green_h"
            >企业服务邮箱: cc@lagou.com</a
          >
          <a href="javascript:;" class="inner green_h">联系我们</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang='scss' scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";
.nav-footer {
  border-top: 1px solid $border_color_B;
  padding: 49px 0 66px;
  margin-top: 40px;
  .container {
    margin: 0 auto;
    .qr-wrap {
      .qr {
        display: none;
        position: absolute;
        padding: 10px;
        width: 100px;
        height: 100px;
        background-color: #fff;
        @include boxS(0, 2px, 8px, 0, #00000010);
        z-index: 101;
        border-radius: 3px;
      }
      .ybd {
        display: block;
        width: 178px;
        line-height: 22px;
        padding: 10px 0 8px;
        margin-bottom: 16px;
        border: 1px solid $basic_color;
        color: $basic_color;
        text-align: center;
        background-color: #fff;
        .icn-app {
          width: 12px;
          height: 16px;
          margin-right: 6px;
          background-position: -150px -220px;
        }
        .icn-xcx {
          width: 16px;
          height: 14px;
          margin-right: 6px;
          background-position: -214px -54px;
        }
        &:hover {
          background-color: $basic_color;
          color: #fff;
          .icn-app {
            background-position: -182px -220px;
          }
          .icn-xcx {
            background-position: -172px -54px;
          }
        }
      }
      .app {
        position: relative;
        .app-qr {
          left: 185px;
          top: 0;
        }
        &:hover {
          .app-qr {
            display: block;
          }
        }
      }
      .xcx {
        position: relative;
        .xcx-qr {
          left: 185px;
          top: 0;
        }
        &:hover {
          .xcx-qr {
            display: block;
          }
        }
      }
      .gzh-wb {
        .gzh {
          position: relative;
          margin-right: 10px;
          .icn-gzh {
            width: 16px;
            height: 16px;
            margin-right: 5px;
            background-position: -114px -184px;
          }
          .gzh-qr {
            left: 0;
            bottom: 22px;
            height: 167px;
            width: 167px;
          }
          &:hover {
            color: $basic_color;
            .icn-gzh {
              background-position: -114px -220px;
            }
            .gzh-qr {
              display: block;
            }
          }
        }
        .wb {
          .icn-wb {
            width: 18px;
            height: 16px;
            margin-right: 5px;
            background-position: -213px -20px;
          }
          &:hover {
            color: $basic_color;
            .icn-wb {
              background-position: -171px -20px;
            }
          }
        }
      }
    }
    .inner-wrap {
      position: relative;
      li {
        display: inline-block;
        margin-left: 160px;
        .tit {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 30px;
          color: #555;
        }
        .inner {
          display: block;
          margin-bottom: 10px;
          font-size: 14px;
          color: #555;
        }
      }
      &::before {
        position: absolute;
        content: "";
        width: 1px;
        height: 100%;
        background-color: $border-color_B;
        left: 140px;
        top: 0;
      }
    }
  }
}
</style>
