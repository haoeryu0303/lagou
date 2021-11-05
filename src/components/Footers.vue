<!--  -->
<template>
  <div class="footer">
    <h3 class="nav-logo">
      <img src="/images/logo/logo.png" class="logo" />
    </h3>
    <p>数据 <span class="green"> mock </span> 随机生成</p>
  </div>
</template>

<script>
export default {
  name: "footers",
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
  p {
    padding: 10px 0;
    color: #999;
  }
  .green {
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
