<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content" ref="scroll">
      <!-- scroll只对第一个子元素起作用 -->
      <div>
        <div class="decorate" v-if="banner.length"></div>
        <!-- 轮播图 -->
        <div class="slider-wrapper">
          <slider>
            <div v-for="item in banner" :key="item.id">
              <img :src="item.picUrl">
            </div>
          </slider>
        </div>
        <!-- /轮播图 -->
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from 'base/scroll/scroll'
import Slider from 'base/slider/slider'
import {getBanner} from 'api/recommend'
import {ERR_OK} from 'common/js/config'
export default {
  data () {
    return {
      banner: [],
      playList: [],
      recommendMusic: []
    }
  },
  components: {
    Slider,
    Scroll
  },
  created () {
    this._getBanner()
    // this._getRecommendList()
    // this._getRecommendMusic()
  },
  methods: {
    _getBanner () {
      getBanner().then((res) => {
        if (res.status === ERR_OK) {
          this.banner = (res.data.banners).splice(2)
          console.log(this.banner)
        } else {
          console.error('Banner 获取失败')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "common/scss/variable.scss";
@import "common/scss/mixin.scss";
.recommend {
  position: fixed;
  width: 100%;
  top: 200px;
  bottom: 0;
  z-index: 100;
  .recommend-content {
    width: 100%;
    height: 100%;
    overflow: hidden; //超出滚动框的隐藏
    .decorate {
      position: absolute;
      width: 100%;
      height: 20vh;
      // top: -30vh; // 相对于视口的高度。视口被均分为100单位的vh
      // z-index: -10;
      background: $color-theme;
      // vertical-align: inherit;
    }
    .slider-wrapper {
      width: 95%;
      margin: 0 auto;
      border-radius: 5px;
      overflow: hidden;
    }
  }
}
</style>
