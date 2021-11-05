<!--  -->
<template>
  <div id="home" class="home">
    <nav-header v-if="show"></nav-header>
    <search-header v-if="show"></search-header>
    <router-view></router-view>
    <nav-footer v-if="show"></nav-footer>
    <footers></footers>
    <sidebars></sidebars>
    <a
      href="javascript:;"
      class="go-top"
      v-if="showBackTop"
      @click="backTop"
      title="返回顶部"
    ></a>
  </div>
</template>

<script>
import Footers from "../components/Footers.vue";
import NavFooter from "../components/NavFooter.vue";
import NavHeader from "../components/NavHeader.vue";
import SearchHeader from "../components/SearchHeader.vue";
import Sidebars from "../components/Sidebars.vue";
export default {
  components: { NavHeader, NavFooter, Sidebars, SearchHeader, Footers },
  data() {
    return {
      show: true,
      showBackTop: false,
    };
  },
  methods: {
    showNav() {
      this.show =
        this.$route.path == "/landing" ||
        this.$route.path == "/login" ||
        this.$route.path == "register"
          ? false
          : true;
    },
    backTop() {
      var timer = setInterval(function () {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 20);
    },
    showBT() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (scrollTop >= 100) {
        that.showBackTop = true;
      } else {
        that.showBackTop = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.showBT, true);
    this.showNav();
    // this.showBT();
  },
  watch: {
    $route: "showNav",
  },
};
</script>
<style lang="scss" scoped>
@import "@/common/scss/mixin.scss";
.home {
  .go-top {
    position: fixed;
    right: 100px;
    bottom: 60px;
    @include bgImg(28px, 46px, "/images/icon/backtop-new_0e4bcbc.png");
    &:hover {
      background-position: -38px 0;
    }
  }
}
</style>