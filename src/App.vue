<template>
  <div id="app" :class="`${$lang}`">
    <input type="text" style="display: none">
    <input type="password" style="display: none">


    <div v-if="isTopHeader && isHome && isPC">
      <v-top-header class="top"></v-top-header>
    </div>
    <div v-if="!isTopHeader || !isHome || !isPC">
      <v-header class="top"  v-show="isNewsDetials"></v-header>
    </div>
    <!--    <div class="scroll" @click="toTop"><img width="50" height="50" src="./assets/img/top.png"></div>-->
    <router-view class="main-container" />
    <v-footer v-show="isShow"></v-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      isPC: window.innerWidth > 1200,
      isTopHeader: true,
      isHome: true,
      isNewsDetials: true
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        let _this = this
        if (route.path === '/') {
          _this.isHome = true
        } else {
          _this.isHome = false
        }
        if (route.path === '/newsDetails' && window.innerWidth < 1200) {
          _this.isNewsDetials = false
        } else {
          _this.isNewsDetials = true
        }
        setTimeout(() => {
          _this.isShow = true
        }, 1000)
      },
      immediate: true
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true)
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
    let _this = this
    setTimeout(() => {
      if (_this.$route.path.indexOf('newsDetails') > -1 && window.innerWidth < 1200) {
        _this.isNewsDetials = false
      } else {
        _this.isNewsDetials = true
      }
      window.onresize = function () {
        if (_this.$route.path.indexOf('/newsDetails') > -1 && window.innerWidth < 1200) {
          _this.isNewsDetials = false
        } else {
          _this.isNewsDetials = true
        }
      }
    }, 100)
  },
  components: {
    vHeader: resolve => require(['@/components/header.vue'], resolve),
    vTopHeader: resolve => require(['@/components/headerClone.vue'], resolve),
    vFooter: resolve => require(['@/components/footer.vue'], resolve)
  },
  methods: {
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop ||
        document.body.scrollTop ||
        document.querySelector('.top').scrollTop
      if (scrollTop < 800) {
        this.isTopHeader = true
      } else {
        this.isTopHeader = false
      }
    }
  }
};
</script>

<style lang="stylus">
  @import "assets/css/reset.css";
  @import "assets/css/banner.styl";
  #app
    position relative
    .main-container
      padding-top: 88px
      min-height 500px
      @media screen and (max-width: 1200px)
        padding-top: 100px
      @media screen and (max-width: 750px)
        padding-top: 70px
    .scroll
      cursor pointer
      box-shadow: 0 0 18px rgba(45, 52, 54, .14);
      z-index 999
      position fixed
      top 90vh
      right 30px
      font-size: 12px
      display inline
      color #636e72
      .scroll-t
        cursor pointer
        line-height: 1.5
        border-bottom: 1px solid #000
      @media screen and (max-width: 1200px)
        right 10px
        img
          width 40px
          height 40px
</style>


