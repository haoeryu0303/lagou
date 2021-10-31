<!--  -->
<template>
  <div id="home" class="home">
    <nav-header v-if="show"></nav-header>
    <router-view></router-view>
    <sidebar></sidebar>
    <nav-footer v-if="show"></nav-footer>
  </div>
</template>

<script>
import NavFooter from "../components/NavFooter.vue";
import NavHeader from "../components/NavHeader.vue";
import Sidebar from "../components/sidebar.vue";
export default {
  components: { NavHeader, NavFooter, Sidebar },
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

<style lang='scss' scoped>
</style>
