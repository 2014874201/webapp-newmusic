<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content" ref="scroll" :data="playList">
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
        <!-- 歌单推荐 -->
        <div class="recommend-list" ref="recommendList">
          <h1 class="title">热门歌单推荐</h1>
          <ul>
            <li class="item" v-for="item in playList" :key="item.id">
              <div class="icon">
                <img width="100" height="100" v-lazy="item.picUrl">
              </div>
              <p class="play-count">
                <i class="fa fa-headphones"></i>
                {{Math.floor(item.playCount / 10000) }}万
              </p>
              <div class="text">
                <h2 class="name" v-html="item.name"></h2>
              </div>
            </li>
          </ul>
        </div>
        <!-- /歌单推荐 -->
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from 'base/scroll/scroll'
import Slider from 'base/slider/slider'
import {getBanner, getRecommendList} from 'api/recommend'
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
    this._getRecommendList()
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
    },
    _getRecommendList () {
      getRecommendList().then(res => {
        if (res.status === ERR_OK) {
          // console.log('热门推荐歌单', res)
          this.playList = res.data.result
        } else {
          console.error('getRecommendList 获取失败')
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
  // background:#fff;
  .recommend-content {
    width: 100%;
    height: 100%;
    overflow: hidden; //超出滚动框的隐藏
    .decorate {
      position: absolute;
      width: 100%;
      height: 50vh;
      top: -30vh; // 相对于视口的高度。视口被均分为100单位的vh
      z-index: -10;
      background: $color-theme;
      vertical-align: inherit;
    }
    .slider-wrapper {
      width: 95%;
      margin: 0 auto;
      border-radius: 5px;
      overflow: hidden;
    }
    .recommend-list {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      // .desc-title {
      //   // margin-top:10px;
      //   height: 50px;
      //   width: 1%;
      //   background:pink;
      // }
      .title {
        padding-left:1.5%;
        height: 65px;
        line-height: 65px;
        text-align: left;
        font-size: $font-size-medium;
        font-weight: bold;
        color: $color-text;
      }
      .item {
        display: flex;
        margin: 20px;
        border-radius: 10px;
        .play-count {
          position: absolute;
          color: #fff;
          font-weight: bold;
          padding: 10px;
        }
        .text {
          background: linear-gradient(rgba(109, 109, 109, 0.4),rgba(255, 255, 255, 0));
          width: 100%;
          margin-left: 20px;
          .name {
            height: 80px;
            line-height: 80px;
            padding: 20px;
            font-size: $font-size-small-x;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
