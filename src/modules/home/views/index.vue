<template>
<div class="home">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item v-for="(item, index) in list" :key="index" :index="item.index">{{item.name}}</el-menu-item>
  </el-menu>

  <el-row>
    <el-col :span="10" v-for="(o, index) in currentList" :key="index" style="margin:4%">
      <el-card>
        <img :src="o.image" class="image">
        <div>
          <div class="bottom clearfix">
            <time class="time">{{o.name}}</time>
            <el-button type="text" class="button" @click.native="more(o.url)">more</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      name: 'home',
      currentList: [],
      activeIndex: '1'
    }
  },
  computed: {
    ...mapState('home', {
      list: 'list'
    })
  },
  created () {
    let length = this.currentList.length
    this.currentList.splice(0, length, ...this.list[0].twoLevelList)
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log('key', key)
      console.log('keyPath', keyPath)
      let length = this.currentList.length
      this.currentList.splice(0, length, ...this.list[key - 1].twoLevelList)
      console.log('this.currentList', this.currentList)
    },
    more (url) {
      console.log('more......', url)
      this.$router.push(url)
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
}
</style>
