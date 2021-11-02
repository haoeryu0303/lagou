<!--  -->
<template>
  <div id="home" class="home">
    <nav-header v-if="show"></nav-header>
    <search-header v-if="show"></search-header>
    <router-view></router-view>
    <nav-footer v-if="show"></nav-footer>
    <footers></footers>
    <sidebars></sidebars>
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
  },
  mounted() {
    this.showNav();
  },
  watch: {
    $route: "showNav",
  },
};
</script>