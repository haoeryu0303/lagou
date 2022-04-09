<!-- 首页 -->
<template>
  <div class="index" id="index">
    <div class="container">
      <div class="wrap cf">
        <ul class="main-nav fl">
          <li
            class="nav-item"
            v-for="(item, index) in mainNavList"
            :key="index"
          >
            <h3 class="nav">
              <span class="nav-tit">{{ item.TypeName }}</span>
              <a
                href="javascript:;"
                class="nav-job green_h"
                v-for="(subItem, subIndex) in item.mainList"
                :key="subIndex"
                >{{ subItem }}</a
              >
              <i class="right"></i>
            </h3>
            <div class="all-wrap">
              <h5 class="tit">{{ item.TypeName }}</h5>
              <ul class="all">
                <li
                  class="all-item cf"
                  v-for="(allItem, allIndex) in item.allList"
                  :key="allIndex"
                >
                  <span class="item-tit fl">{{ allItem.tit }}</span>
                  <div class="item-wrap fl">
                    <a
                      href="javascript:;"
                      class="item green_h"
                      v-for="(jobItem, jobIndex) in allItem.list"
                      :key="jobIndex"
                      >{{ jobItem }}</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="banner fr" v-show="banner.length != 0">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in banner" :key="index">
              <a :href="item.url">
                <img :src="item.imgUrl" class="img" />
              </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <div class="btn-box">
            <em class="btn btn-prev">prev</em>
            <em class="btn btn-next">next</em>
          </div>
        </div>
      </div>
      <div class="job-wraps">
        <h3 class="head">
          <span
            class="h-item"
            :class="{ 'h-active': jobItem == 1 }"
            @click="jobItem = 1"
            >24Hour热门</span
          ><span
            class="h-item"
            :class="{ 'h-active': jobItem == 2 }"
            @click="jobItem = 2"
            >最新职位</span
          >
        </h3>
        <ul class="job-wrap job-wrap-1 cf" v-if="jobItem == 1">
          <li
            class="j-item boxS_h fl"
            :class="{ 'j-last-item': index % 3 == 2 }"
            v-for="(item, index) in hourJobList"
            :key="item.id"
          >
            <i
              v-if="item.recType != 0"
              class="icon rec-icn"
              :class="{
                'rec-icn-1': item.recType == 1,
                'rec-icn-2': item.recType == 2,
              }"
            ></i>
            <div class="job">
              <p class="j-head cf">
                <span class="name fl">{{ item.name }}</span>
                <span class="time">[{{ item.pushTime }}发布]</span>
                <span class="pay fr">{{ item.pay }}</span>
              </p>
              <p class="tip" v-if="item.require">
                <span>经验{{ item.require.exp }}</span>
                <span class="line">/</span>
                <span>{{ item.require.edu }}</span>
              </p>
              <div class="lables">
                <span
                  class="br-3"
                  v-for="(labItem, labIndex) in item.indList"
                  :key="labIndex"
                  >{{ labItem }}</span
                >
              </div>
            </div>
            <div class="cpy cf">
              <a href="javascript:;"
                ><img :src="item.cpyImg" class="cpy-img fl"
              /></a>
              <div class="cpy-info fl">
                <p class="name">
                  <a href="javascript:;" class="green" :title="item.cpyName">{{
                    item.cpyName
                  }}</a>
                </p>
                <p class="tip">
                  <span>{{ item.workType }}</span>
                  <span class="line">/</span>
                  <span>{{ item.finance }}</span>
                  <span class="line">/</span>
                  <span>{{ item.city }}</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
        <ul class="job-wrap job-wrap-2 cf" v-if="jobItem == 2">
          <li
            class="j-item boxS_h fl"
            :class="{ 'j-last-item': index % 3 == 2 }"
            v-for="(item, index) in newJobList"
            :key="item.id"
          >
            <i
              v-if="item.recType != 0"
              class="icon rec-icn"
              :class="{
                'rec-icn-1': item.recType == 1,
                'rec-icn-2': item.recType == 2,
              }"
            ></i>
            <div class="job">
              <p class="j-head cf">
                <span class="name fl">{{ item.name }}</span>
                <span class="time">[{{ item.pushTime }}发布]</span>
                <span class="pay fr">{{ item.pay }}</span>
              </p>
              <p class="tip" v-if="item.require">
                <span>经验{{ item.require.exp }}</span>
                <span class="line">/</span>
                <span>{{ item.require.edu }}</span>
              </p>
              <div class="lables">
                <span
                  class="br-3"
                  v-for="(labItem, labIndex) in item.indList"
                  :key="labIndex"
                  >{{ labItem }}</span
                >
              </div>
            </div>
            <div class="cpy cf">
              <a href="javascript:;"
                ><img :src="item.cpyImg" class="cpy-img fl"
              /></a>
              <div class="cpy-info fl">
                <p class="name">
                  <a href="javascript:;" :title="item.cpyName" class="green">{{
                    item.cpyName
                  }}</a>
                </p>
                <p class="tip">
                  <span>{{ item.workType }}</span>
                  <span class="line">/</span>
                  <span>{{ item.finance }}</span>
                  <span class="line">/</span>
                  <span>{{ item.city }}</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
        <a href="javascript:;" class="more more-job">查看更多</a>
      </div>
      <div class="cpy-wraps">
        <h3 class="head">
          <span class="h-item" :class="{ 'h-active': cpyItem == 1 }"
            >互联网热门公司榜</span
          >
        </h3>
        <ul class="cpy-wrap cpy-wrap-1 cf" v-if="cpyItem == 1">
          <li
            class="c-item boxS_h fl"
            :class="{ 'c-last-item': cpyIndex % 4 == 3 }"
            v-for="(cpyItem, cpyIndex) in cpyList"
            :key="cpyItem.id"
          >
            <div class="top">
              <a href="javascript:;" class="cpy-logo">
                <img :src="cpyItem.cpyImg" class="i-logo" />
              </a>
              <div class="c-name">
                <a href="javascript:;" :title="cpyItem.cpyName">{{
                  cpyItem.cpyName
                }}</a>
              </div>
              <p class="tip">
                <span v-for="(iItem, iIndex) in cpyItem.indList" :key="iIndex"
                  ><em v-if="iIndex != 0">,</em>{{ iItem }}</span
                ><span class="line">/</span>
                <span>{{ cpyItem.finance }}</span>
              </p>
              <p class="desc" :title="cpyItem.desc">{{ cpyItem.desc }}</p>
            </div>
            <div class="cpy-job f_b_c">
              <a href="javascript:;" class="item green_h">
                <span class="i-count green">{{ cpyItem.ms }}</span>
                <span class="i-name">面试评价</span>
              </a>
              <a href="javascript:;" class="item green_h">
                <span class="i-count green">{{ cpyItem.job }}</span>
                <span class="i-name">在招职位</span>
              </a>
              <a href="javascript:;" class="item green_h">
                <span class="i-count green">{{ cpyItem.jl }}%</span>
                <span class="i-name">简历处理率</span>
              </a>
            </div>
          </li>
        </ul>
        <a href="javascript:;" class="more more-cpy">查看更多</a>
      </div>
      <div class="hot-link">
        <h3 class="head">
          <span
            class="h-item"
            :class="{ 'h-active': hotLink.showHot == hotItem.id }"
            v-for="hotItem in hotLink.hotList"
            :key="hotItem.id"
            @click="hotLink.showHot = hotItem.id"
            >{{ hotItem.name }}</span
          >
        </h3>
        <div class="link-wraps">
          <span class="more-btn" @click="allLink = !allLink"
            >{{ !allLink ? "展开" : "收起" }}
            <i class="icn" :class="{ 'i-up': allLink }"></i
          ></span>
          <div
            class="link-wrap"
            :class="{
              'all-link': !allLink,
              'show-link': hotLink.showHot == hItem.id,
            }"
            v-for="hItem in hotLinkItem"
            :key="hItem.id"
          >
            <a
              href="javascript:;"
              class="link green_h"
              v-for="(lItem, lIndex) in hItem.list"
              :key="lIndex"
              >{{ lItem }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      mainNavList: [], //job类型导航列表
      banner: [], //banner
      swiperOptions: {
        navigation: {
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        },
        // 分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 循环
        loop: true,
        // 切换效果
        effect: "slide",
        initialSlide: 1,
        // 自动
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      }, //banner控件
      jobItem: 1, //当前显示的 job（工作）列表详情
      cpyItem: 1, //当前显示的 cpy（公司）列表详情
      hourJobList: [], //24小时热门职位列表
      newJobList: [], //最新职位列表
      cpyList: [], //公司列表
      //热门链接
      hotLink: {
        showHot: 1,
        hotList: [
          { id: 1, name: "友情链接" },
          { id: 2, name: "热门城市" },
          { id: 3, name: "热门公司" },
          { id: 4, name: "热门职位" },
          { id: 5, name: "热门行业" },
          { id: 6, name: "热门关键词" },
        ],
      },
      hotLinkItem: {},
      allLink: false,
    };
  },
  directives: {
    swiper: directive,
  },
  methods: {
    // 获取导航栏列表
    _getNavList() {
      this.axios.get("/json/index/nav.json").then((res) => {
        this.mainNavList = res.data.jobTypeList;
      });
    },
    // 获取首页banner
    _getBanner() {
      this.axios.get("/json/index/banner.json").then((res) => {
        this.banner = res.data.banner;
      });
    },
    // 获取首页 24hour，最新工作，公司 列表
    _getHourJobList() {
      this.axios("/hourJobList", {
        params: {
          size: 9,
        },
      }).then((res) => {
        this.hourJobList = res.data.hourJobList;
      });
    },
    // 获取首页最新工作列表
    _getNewJobList() {
      this.axios
        .get("/newJobList", {
          params: {
            size: 9,
          },
        })
        .then((res) => {
          this.newJobList = res.data.newJobList;
        });
    },
    // 获取首页公司列表
    _getCpyList() {
      this.axios
        .get("/cpyList", {
          params: {
            size: 8,
          },
        })
        .then((res) => {
          this.cpyList = res.data.cpyList;
        });
    },
    // 获取热门链接
    _gethotLink() {
      this.axios("/hotLink").then((res) => {
        this.hotLinkItem = res.data.hotLink;
      });
    },
  },
  mounted() {
    this._getNavList();
    this._getBanner();
    this._getHourJobList();
    this._getNewJobList();
    this._getCpyList();
    this._gethotLink();
  },
};
</script>
<style lang='scss'>
@import "@/common/scss/mixin.scss";
@import "@/common/scss/variable.scss";
.index {
  padding-top: 146px;
  .container {
    .wrap {
      padding-top: 30px;
      .main-nav {
        position: relative;
        .nav-item {
          line-height: 38px;
          height: 38px;
          width: 452px;
          .nav {
            position: relative;
            .nav-tit {
              position: relative;
              font-size: 16px;
              font-weight: bold;
              padding: 0 15px;
              &::after {
                position: absolute;
                content: "|";
                right: -2px;
                top: 0;
                color: #999;
                line-height: 16px;
              }
            }
            .nav-job {
              font-size: 14px;
              margin: 0 10px 0 15px;
              color: #666;
            }
            .right {
              position: absolute;
              right: 8px;
              top: 14px;
              @include bgImg(6px, 11px, "/images/icon/arrow_92b8589.png");
            }
          }
          .all-wrap {
            display: none;
            position: absolute;
            left: 454px;
            top: 0;
            width: 600px;
            min-height: 331px;
            padding: 16px 10px 0 12px;
            background-color: #fff;
            @include boxS(0, 0, 4px, 2px, #00000020);
            z-index: 10;
            .tit {
              line-height: 22px;
              margin-bottom: 20px;
              font-size: 16px;
              padding-left: 10px;
            }
            .all {
              .all-item {
                line-height: 14px;
                padding-bottom: 16px;
                font-size: 12px;
                .item-tit {
                  font-size: 12px;
                  color: #999;
                  width: 60px;
                  padding-left: 10px;
                }
                .item-wrap {
                  display: inline-block;
                  width: 508px;
                  border-bottom: 1px solid $border_color_C;
                  .item {
                    display: inline-block;
                    white-space: nowrap;
                    padding: 0 16px 10px 0;
                    color: #666;
                  }
                }
              }
            }
          }
          &:hover {
            .nav {
              @include boxS(5px, 0, 5px, 0, #00000050);
              &::after {
                position: absolute;
                content: "";
                height: 38px;
                width: 7px;
                right: -3px;
                top: 0;
                z-index: 11;
                background-color: #fff;
              }
            }
            .all-wrap {
              display: block;
            }
          }
        }
      }
      .banner {
        position: relative;
        width: 649px;
        height: 286px;
        padding: 10px 0;
        a {
          .img {
            width: 649px;
            height: 286px;
          }
        }
        .btn-box {
          display: none;
          .btn {
            position: absolute;
            top: 50%;
            margin-top: -17px;
            width: 18px;
            height: 34px;
            cursor: pointer;
            text-indent: -99999px;
            z-index: 10;
          }
          .btn-prev {
            left: 16px;
            @include bgImg(
              18px,
              34px,
              "/images/icon/banner_arrow_left_80dbc0e.png"
            );
            &:hover {
              background-image: url("/images/icon/banner_arrow_left_highlight_2dc5ef7.png");
            }
          }
          .btn-next {
            right: 16px;
            @include bgImg(
              18px,
              34px,
              "/images/icon/banner_arrow_right_04d6575.png"
            );
            &:hover {
              background-image: url("/images/icon/banner_arrow_right_highlight_8f1f320.png");
            }
          }
        }
        .swiper-pagination {
          .swiper-pagination-bullet {
            background: #fff !important;
            opacity: 0.5;
            &:hover {
              opacity: 1;
            }
          }
          .swiper-pagination-bullet-active {
            width: 16px;
            border-radius: 8px;
            background: #fff;
            opacity: 1;
          }
        }
        &:hover {
          .btn-box {
            display: block;
          }
        }
      }
    }
    .job-wraps,
    .cpy-wraps,
    .hot-link {
      .head {
        line-height: 32px;
        font-size: 16px;
        margin: 40px 0 10px;
        border-bottom: 1px solid $border_color_B;
        .h-item {
          display: inline-block;
          margin-right: 60px;
          height: 32px;
          color: #999;
          cursor: pointer;
        }
        .h-active {
          color: #333;
          border-bottom: 2px solid #333;
        }
      }
      .job-wrap {
        .j-item {
          position: relative;
          width: 390px;
          height: 200px;
          border: 1px solid $border_color_B;
          box-sizing: border-box;
          padding: 20px 18px 0;
          margin: 15px 15px 0 0;
          color: #999;
          .icon {
            position: absolute;
            left: 0;
            top: 0;
            width: 40px;
            height: 40px;
          }
          .rec-icn-1 {
            background: url("/images/icon/school-recruitment_ae314a6.png")
              no-repeat;
            background-size: contain;
          }
          .rec-icn-2 {
            background: url("/images/icon/direct-recruit_2x_0d49da5.png")
              no-repeat;
            background-size: contain;
          }
          .line {
            margin: 0 4px;
          }
          .job {
            height: 90px;
            padding-bottom: 18px;
            border-bottom: 1px dashed $border_color_B;
            margin-bottom: 18px;
            .j-head {
              line-height: 28px;
              .name {
                display: inline-block;
                font-size: 16px;
                color: #333;
                max-width: 100px;
                margin-right: 18px;
                @include eps(1);
              }
              .pay {
                color: $pay_color;
              }
            }
            .tip {
              line-height: 30px;
            }
            .lables {
              margin-top: 5px;
              span {
                display: inline-block;
                margin-right: 8px;
                height: 26px;
                line-height: 26px;
                border: 1px solid $border_color_D;
                font-size: 12px;
                padding: 0 5px;
              }
            }
          }
          .cpy {
            .cpy-img {
              width: 40px;
              height: 40px;
              margin-right: 15px;
              border-radius: 8px;
            }
            .cpy-info {
              line-height: 20px;
              @include eps(1);
            }
          }
          &:hover {
            margin-top: 13px;
            transition: margin-top 0.2s;
          }
        }
        .j-last-item {
          margin-right: 0 !important;
        }
      }
      .cpy-wrap {
        .c-item {
          width: 288px;
          height: 270px;
          margin: 16px 16px 0 0;
          box-sizing: border-box;
          text-align: center;
          color: #999;
          border: 1px solid $border_color_B;
          .top {
            padding: 20px 0 14px;
            margin: 0 13px;
            border-bottom: 1px dashed $border_color_B;
          }
          .line {
            margin: 0 5px;
          }
          .cpy-logo {
            display: inline-block;
            margin-bottom: 12px;
            .i-logo {
              width: 100px;
              height: 100px;
              border-radius: 20px;
            }
          }
          .tip,
          .desc {
            @include eps(1);
            line-height: 20px;
          }
          .c-name {
            line-height: 24px;
            color: #333;
            font-size: 16px;
            @include eps(1);
          }
          .cpy-job {
            padding: 0 18px;
            .item {
              height: 54px;
              padding-top: 14px;
              box-sizing: border-box;
              color: #999;
              .i-count {
                padding-bottom: 8px;
              }
              span {
                display: block;
              }
            }
          }
          &:hover {
            margin-top: 13px;
            transition: margin-top 0.2s;
          }
        }
        .c-last-item {
          margin-right: 0;
        }
      }
      .link-wraps {
        position: relative;
        .link-wrap {
          display: none;
          line-height: 20px;
          width: 1100px;
          .link {
            margin-right: 14px;
            white-space: nowrap;
            color: #666;
          }
        }
        .all-link {
          @include eps(1);
        }
        .show-link {
          display: block;
        }
        .more-btn {
          position: absolute;
          right: 0;
          top: 0;
          cursor: pointer;
          color: #999;
          .icn {
            display: inline-block;
            margin-left: 5px;
            vertical-align: middle;
            transition: all 0.3s;
            @include bgImg(12px, 6px, "/images/icon/arrow_down2_eea7e54.png");
          }
          .i-up {
            transition: all 0.3s;
            transform: rotate(180deg);
          }
        }
      }

      .more {
        display: block;
        width: 300px;
        line-height: 42px;
        margin: 20px auto 0;
        border: 1px solid $basic_color;
        text-align: center;
        color: $basic_color;
        font-size: 16px;
        &:hover {
          background-color: $basic_color;
          color: #fff;
        }
      }
    }
  }
}
</style>
