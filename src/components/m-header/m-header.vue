<template>
  <div class="m-header">
    <h1 class="text">VMUSICJIN</h1>
    <router-link to="/user" class="mine" tag="div">
     <i class="iconfont icon-list"></i>
    </router-link>
    <router-link to="/search" class="search" tag="div">
      <i class="iconfont icon-search"></i>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";

.m-header {
  position: relative;
  height: 100px;
  width: 100%;
  text-align: center;
  background: $color-theme;
  .text {
    line-height: 100px;
    font-weight: bold;
    color: $color-text-l;
    letter-spacing: 3px;
    font-size: 44px;
  }
  .mine {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .iconfont {
      line-height: 100px;
      display: block;
      padding-left: 20px;
      font-size: 44px;
      color: $color-theme-l;
    }
  }
  .search {
    position: absolute;
    top: 0;
    right: 4px;
    .iconfont {
      display: block;
      line-height: 100px;
      padding-right: 20px;
      font-size: 36px;
      color: $color-theme-l;
    }
  }
}
</style>
