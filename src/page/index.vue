<!-- 首页 -->
<template>
  <div class="index" id="index">
    <div class="container">
      <div class="wrap">
        <ul class="main-nav">
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
        <div class="banner"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mainNavList: [],
    };
  },
  methods: {
    // 获取导航栏列表
    _getNavList() {
      this.axios.get("/json/index_nav.json").then((res) => {
        this.mainNavList = res.data.jobTypeList;
      });
    },
  },
  mounted() {
    this._getNavList();
  },
};
</script>
<style lang='scss' scoped>
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
            }
            .all {
              .all-item {
                line-height: 14px;
                padding-bottom: 16px;
                font-size: 12px;
                .item-tit {
                  font-size: 12px;
                  color: #999;
                  width: 70px;
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
    }
  }
}
</style>
