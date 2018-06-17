<template>
  <div class="rank" ref="rank">
    <scroll class="toplist" ref="scroll" :data="TopList">
      <ul>
        <li class="item"  v-for="item in TopList" :key="item.id" @click="selectItem(item)">
          <div class="icon">
            <img v-lazy="item.coverImgUrl" width="100" height="100">
          </div>
          <ul class="songlist">
            <li class="song" v-for="(song, index) in item.top" :key="index">
              <span>{{index + 1}}.</span>
              <span>{{song.name}} - {{song.ar[0].name}}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div v-show="showLoading" class="loading-content">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>
<script>
import {getTop} from 'api/rank'
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
// import {playlistMixin} from 'common/js/mixin'

const MUSIC_TOP = []
export default {
  data () {
    return {
      TopList: [],
      showLoading: true
    }
  },
  components: {
    Scroll,
    Loading
  },
  created () {
    this.idx()
    this._getTopList()
  },
  methods: {
    idx () {
      var i = 0
      do {
        MUSIC_TOP.push(i++)
      } while (i <= 23)
    },
    selectItem (item) {
      this.$router.push({
        path: `/rank/${item.id}`
      })
      // this.setTopList(item)
    },
    _getTopList () {
      for (let i = 0; i < MUSIC_TOP.length; i++) { // 重复请求
        getTop(MUSIC_TOP[i]).then((res) => {
          let list = res.data.playlist
          list.top = res.data.playlist.tracks.slice(0, 3)
          this.TopList.push(list)
        })
        if (i === MUSIC_TOP.length - 1) {
          this.showLoading = false // 请求完毕
        }
      }
      console.log('排行榜', this.TopList)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";
.rank {
  position: fixed;
  width: 100;
  top: 200px;
  bottom: 0;
  .toplist {
    height: 100%;
    overflow: hidden;
    padding-top: 5px;
  }
  .item {
    display: flex;
    margin:0 auto;
    padding: 10px 0;
    // height: 100px;
    border-bottom: 1px solid rgb(228, 228, 228);
    &:last-child {
        padding-bottom: 20px;
    }
    .icon {
      img {
        border-radius: 10px;
      }
    }
    .songlist{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding:20px 20px;
      margin-left: 10px;
      font-size: $font-size-small-ss;
      .song {
        flex: 1;
        @include no-wrap();
        line-height: 30px;
      }
    }
  }

}

</style>
