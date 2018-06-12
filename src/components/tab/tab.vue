<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span>排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span>歌手</span>
    </router-link>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import "common/scss/variable.scss";

.tab {
  display: flex;
  line-height: 100px;
  height: 100px;
  width: 100%;
  font-size: $font-size-medium;
  background: $color-theme;
  .tab-item {
    flex:1; // 等分剩余空间
    text-align: center; //垂直
    color: $color-text-lm;
    span {
      padding-bottom: 6px;
    }
    &.router-link-active > span {
      font-weight: bold;
      color: $color-text-l;
      border-bottom: 4px solid $color-text-l;
    }
  }
}
</style>
