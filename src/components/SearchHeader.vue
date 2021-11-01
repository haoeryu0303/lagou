<!-- 顶部搜索栏 -->
<template>
  <div class="search-header">
    <div class="container" :class="{ 'p-left': showHotSch }">
      <div class="search-wrap">
        <input
          type="text"
          class="sch-inp"
          ref="schInp"
          :placeholder="pla"
          @focus="focused"
          @blur="focused"
        />
        <i class="sch-btn">搜 索</i>
      </div>
      <h5 class="hot-sch" v-if="showHotSch">
        热门搜索：<a
          href="https://jinshuju.net/f/DDCYoF?utm_source=lagou&utm_medium=hotsearch&utm_campaign=%E5%88%86%E9%94%80%E6%8B%9B%E5%8B%9F&_channel_track_key=UtOygHbT?&labelWords=hot"
          class="green hot-job"
          >拉钩教育招兼职！收入可观</a
        >
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-header",
  data() {
    return {
      pla: "简历诊断",
      showHotSch: true,
    };
  },
  methods: {
    focused() {
      this.pla =
        this.$refs.schInp == document.activeElement
          ? "搜索职位、公司或地址"
          : "简历诊断";
    },
    menu() {
      let that = this,
        scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (scrollTop >= 40) {
        that.showHotSch = false;
      } else {
        that.showHotSch = true;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.menu, true);
  },
};
</script>

<style lang='scss' scoped>
@import "@/common/scss/variable.scss";
.search-header {
  position: fixed;
  left: 0;
  right: 48px;
  top: 40px;
  padding: 18px 0 16px;
  background: $search_head_bg_color;
  min-width: 1200px;
  .container {
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
    transition: all 0.5s;
    .search-wrap {
      width: 900px;
      .sch-inp {
        height: 46px;
        width: 760px;
        border: 1px solid $border_color_B;
        border-right: none;
        padding: 0 16px;
        box-sizing: border-box;
        font-size: 16px;
        &:focus {
          border-color: $basic_color;
        }
      }
      .sch-btn {
        display: inline-block;
        width: 140px;
        line-height: 46px;
        text-align: center;
        background-color: $basic_color;
        color: #fff;
        font-size: 16px;
      }
    }
    .hot-sch {
      padding-top: 12px;
      .hot-job {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .p-left {
    padding-left: 300px;
    transition: all 0.5s;
  }
}
</style>
