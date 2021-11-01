<!-- 公用底部组件 -->
<template>
  <div class="nav-footer">
    <div class="container">1</div>
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
  .container {
    margin: 0 auto;
  }
}
</style>
