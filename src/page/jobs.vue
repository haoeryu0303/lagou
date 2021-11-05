<!-- 职位页面 -->
<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getList() {
      this.axios.post("/user").then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang='scss' scoped>
</style>
