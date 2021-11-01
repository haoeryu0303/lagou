<!-- 侧边导航组件 -->
<template>
  <div class="sidebar" id="sidebar">
    <i class="icn-side icn-side-1"></i><i class="icn-side icn-side-2"></i
    ><i class="icn-side icn-side-3"></i><i class="icn-side icn-side-4"></i
    ><i class="icn-side icn-side-5"></i><i class="icn-side icn-side-6"></i>
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
.sidebar {
  position: fixed;
  right: 0;
  bottom: 0;
  top: 40px;
  padding-top: 40px;
  box-shadow: -2px 0 2px 0 #00000020;
  width: 48px;
  z-index: 200;
  .icn-side {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 auto 40px;
    background-size: 24px 24px;
    &::after {
      display: none;
      position: absolute;
      right: 45px;
      top: 0;
      width: 64px;
      line-height: 24px;
      font-size: 12px;
      text-align: center;
      box-shadow: 0 0 2px 2px #00000020;
    }
    &:hover {
      &::after {
        display: block;
      }
    }
  }
  .icn-side-1 {
    background-image: url("/images/icon/icon-item-1.png");
    &:hover {
      background-image: url("/images/icon/icon-item-1_hover.png");
    }
    &::after {
      content: "收藏职位";
    }
  }
  .icn-side-2 {
    background-image: url("/images/icon/icon-item-2.png");
    &:hover {
      background-image: url("/images/icon/icon-item-2_hover.png");
    }
    &::after {
      content: "投递记录";
    }
  }
  .icn-side-3 {
    background-image: url("/images/icon/icon-item-3.png");
    &:hover {
      background-image: url("/images/icon/icon-item-3_hover.png");
    }
    &::after {
      content: "职位订阅";
    }
  }
  .icn-side-4 {
    background-image: url("/images/icon/icon-item-4.png");
    &:hover {
      background-image: url("/images/icon/icon-item-4_hover.png");
    }
    &::after {
      content: "面试邀约";
    }
  }
  .icn-side-5 {
    background-image: url("/images/icon/icon-item-5.png");
    &::after {
      content: "简历精修";
    }
  }
  .icn-side-6 {
    background-image: url("/images/icon/icon-item-6.png");
    &:hover {
      background-image: url("/images/icon/icon-item-6_hover.png");
    }
  }
}
</style>
