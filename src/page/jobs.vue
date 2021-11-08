<!-- 职位页面 -->
<template>
  <div class="jobs" id="jobs">
    <div class="container cf">
      <div class="left-wrap fl">
        <div class="detail sizer border">
          <!-- 筛选条件 -->
          <div
            class="area sizer-item cf"
            :class="{
              'hide-city-more': hideCity && dIndex == 'city',
              'hide-ind-more': hideInd && dIndex == 'ind',
            }"
            v-for="(dItem, dIndex) in detail"
            :key="dIndex"
          >
            <span class="tit fl">{{ dItem.name }}:</span>
            <span
              class="s-item fl"
              :class="{
                'city-active': dIndex == 'city',
                active: dIndex != 'city',
              }"
              v-if="dIndex != 'ind'"
              >{{ dItem.impliedCondition }}</span
            >
            <span
              class="s-item green_bg_h fl"
              :class="{ chosen: chosen }"
              v-for="(subItem, subIndex) in dItem.list"
              :key="subIndex"
              @click="chosen = !chosen"
            >
              {{ subItem.name ? subItem.name : subItem }}
            </span>
            <span
              class="btn fr"
              v-if="dIndex == 'city'"
              @click="hideCity = !hideCity"
              >更多<i class="triangle" :class="{ rotate_180: hideCity }"></i
            ></span>
            <span
              class="btn fr"
              v-if="dIndex == 'ind'"
              @click="hideInd = !hideInd"
              >更多<i class="triangle" :class="{ rotate_180: hideInd }"></i
            ></span>
          </div>
        </div>
        <div class="sort sizer border cf">
          <div class="method fl">
            <span class="tit">排序方式:</span>
            <span
              class="m-item green_bg_h"
              :class="{ active: sort.def }"
              @click="sort.def = true"
              >默认</span
            >
            <span
              class="m-item green_bg_h"
              :class="{ active: !sort.def }"
              @click="sort.def = false"
              >最新</span
            >
          </div>
          <div class="method fl">
            <span class="tit">月薪:</span>
            <span class="show-sort" @click="sort.hideSalary = !sort.hideSalary"
              >{{ sort.checkSalary }}
              <i class="triangle" :class="{ rotate_180: sort.hideSalary }"></i>
            </span>
            <ul class="list" :class="{ hide: sort.hideSalary }">
              <li
                class="item green_h"
                v-for="(sItem, sIndex) in sort.salary"
                :key="sIndex"
                @click="
                  sort.checkSalary = sItem;
                  sort.hideSalary = true;
                "
              >
                {{ sItem }}
              </li>
            </ul>
          </div>
          <div class="method fl">
            <span class="tit">工作性质:</span>
            <span class="show-sort" @click="sort.hideFull = !sort.hideFull"
              >{{ sort.checkFull
              }}<i class="triangle" :class="{ rotate_180: sort.hideFull }"></i
            ></span>
            <ul class="list" :class="{ hide: sort.hideFull }">
              <li
                class="item green_h"
                v-for="(fItem, fIndex) in sort.full"
                :key="fIndex"
                @click="
                  sort.checkFull = fItem;
                  sort.hideFull = true;
                "
              >
                {{ fItem }}
              </li>
            </ul>
          </div>
          <div class="page">
            <span class="btn prev">&lt;</span>
            <span
              ><em class="green">1</em><em class="line">/</em><em>10</em></span
            >
            <span class="btn next">&gt;</span>
          </div>
        </div>
        <ul class="job-list">
          <li class="job-item border">job</li>
        </ul>
      </div>
      <ul class="ad-wrap fr" v-if="adlist.length != 0">
        <li class="ad-item" v-for="adItem in adlist" :key="adItem.id">
          <a :href="adItem.url" target="_block" class="ad-link">
            <span class="text">AD</span>
            <img :src="adItem.img" class="ad-img"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "jobs",
  props: {},
  data() {
    return {
      adlist: [],
      detail: {},
      checkCity: "全国",
      hideCity: true,
      hideInd: true,
      chosen: false,

      sort: {
        def: true,
        checkFull: "不限",
        hideFull: true,
        checkSalary: "不限",
        hideSalary: true,
        salary: [
          "不限",
          "2k以下",
          "2k-5k",
          "5k-10k",
          "10k-15k",
          "15k-25k",
          "25k-50k",
          "50kl以上",
        ],
        full: ["不限", "全职", "兼职", "实习"],
      },
    };
  },
  methods: {
    _getAdList() {
      this.axios.get("/adlist", { params: { size: 3 } }).then((res) => {
        this.adlist = res.data.adlist;
      });
    },
    _getDetail() {
      this.axios.get("/detail").then((res) => {
        this.detail = res.data.detail;
      });
    },
  },
  mounted() {
    this._getAdList();
    this._getDetail();
  },
};
</script>
<style lang='scss' scoped>
@import "@//common/scss/variable.scss";
@import "@//common/scss/mixin.scss";
.jobs {
  .container {
    padding-top: 186px;
    .left-wrap {
      width: 958px;
      .border {
        border: 1px solid $border_color_B;
        margin-bottom: 20px;
      }
      .sizer {
        padding: 8px 12px;
        background-color: #fafafa;
        line-height: 28px;
        position: relative;
        .tit {
          font-weight: bold;
          color: #333;
          margin-right: 10px;
        }
        // 筛选条件
        .sizer-item {
          position: relative;
          padding-right: 50px;
          margin-bottom: 6px;
          .s-item {
            padding: 0 5px;
            cursor: pointer;
            margin-right: 5px;
            margin-bottom: 3px;
          }
          .chosen {
            background: $basic_color;
            color: #fff;
          }
          .active {
            margin-right: 10px;
            line-height: 28px;
            background-color: $basic_color;
            color: #fff;
          }
          .city-active {
            margin-right: 10px;
            line-height: 26px;
            border: 1px solid $border_color_C;
          }
          .btn {
            position: absolute;
            right: 0;
            top: 0;
            line-height: 28px;
            padding-right: 20px;
            cursor: pointer;
            color: #999;
            .more-btn {
              display: inline-block;
              vertical-align: middle;
              @include bgImg(10px, 10px, "/images/icon/down.png");
              background-size: contain;
              margin-left: 6px;
              transition: all 0.3s;
            }
            .triangle {
              @include triangle($basic_color);
              margin-left: 20px;
              position: absolute;
              right: 0;
              top: 10px;
              transition: all 0.3s;
            }
          }
        }
        .hide-city-more,
        .hide-ind-more {
          height: 28px;
          overflow: hidden;
        }
        // 排序
        .method {
          margin-right: 20px;
          height: 28px;
          position: relative;
          span {
            display: inline-block;
            line-height: 28px;
          }
          .m-item {
            padding: 0 10px;
            margin-right: 6px;
          }
          .active {
            background-color: $basic_color;
            color: #fff;
          }
          .show-sort {
            width: 85px;
            height: 28px;
            border: 1px solid $border_color_D;
            box-sizing: border-box;
            padding-left: 10px;
            .triangle {
              @include triangle($triangle_color_A);
              position: absolute;
              top: 12px;
              right: 5px;
              transition: all 0.3s;
            }
          }
          .list {
            position: absolute;
            top: 28px;
            right: 0;
            width: 85px;
            background-color: #fff;
            border: 1px solid $border_color_D;
            box-sizing: border-box;
            z-index: 10;
            .item {
              padding-left: 10px;
            }
          }
          .hide {
            display: none;
          }
        }
        .page {
          position: absolute;
          right: 0;
          top: 0;
          padding: 0 10px;
          border-left: 1px solid $border_color_B;
          height: 44px;
          line-height: 44px;
          .btn {
            display: inline-block;
            line-height: 44px;
            font-family: "Courier New", Courier, monospace;
            cursor: pointer;
            color: $font_color_C;

            &:hover {
              color: #333;
            }
          }
          .prev {
            margin-right: 16px;
          }
          .next {
            margin-left: 16px;
          }
          .line {
            margin: 0 6px;
          }
        }
      }
    }
    .ad-wrap {
      width: 210px;
      .ad-item {
        margin-bottom: 10px;
        width: 210px;
        height: 122px;
        .ad-link {
          display: block;
          position: relative;
          .text {
            position: absolute;
            left: 50%;
            margin-left: -20px;
            top: 20px;
            font-size: 20px;
            color: #000;
          }
          .ad-img {
            width: 210px;
            height: 122px;
          }
        }
      }
    }
  }
}
</style>