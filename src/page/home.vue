<!--  -->
<template>
  <div id="home" class="home">
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from "../components/NavFooter.vue";
import NavHeader from "../components/NavHeader.vue";
export default {
  components: { NavHeader, NavFooter },
  data() {
    return {};
  },
};
</script>

<style lang='scss' scoped>
</style>
