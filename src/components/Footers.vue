<!--  -->
<template>
  <div class="footer">
    <h3 class="nav-logo">
      <img src="/images/logo/logo.png" class="logo" />
    </h3>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {};
  },
};
</script>

<style lang='scss' scoped>
@import "@/common/scss/variable.scss";
.footer {
  text-align: center;
  padding: 30px 0 20px;
  background-color: #fafafa;
  border-top: 1px solid $border_color_B;
}
</style>
