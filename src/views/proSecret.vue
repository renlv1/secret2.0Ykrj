<template>
  <div class="wrapper">
<!--    不要-->
    <div class="wrapper-pc">
      <div class="wrapper-top">
        <div class="top-content" :class="[$lang !== 'cn' ? 'enPcHasLetter': 'cnPcHasLetter']">
          <span class="subTitle">OUR MISSION</span>
          <span class="title title-middle">{{$t('proSecret.text1')}}</span>
          <span class="title">{{$t('proSecret.text1a')}}</span>
        </div>
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="wrapper-top-mobile">
        <div class="top-content" :class="[$lang !== 'cn' ? 'enMobileHasLetter': 'cnMobileHasLetter']">
          <span class="subTitle">OUR MISSION</span>
          <span class="title title-middle">{{$t('proSecret.text1')}}</span>
          <span class="title">{{$t('proSecret.text1a')}}</span>
        </div>
      </div>
    </div>
    <div class="banner-wrapper wrapper-pc">
      <div class="banner">
        <span class="num"></span>
        <p class="title">{{$t('proSecret.text2')}}</p>
        <p class="description">{{$t('proSecret.text3')}}</p>
        <p class="play" @click="play"></p>
      </div>
      <div class="banner-bg"></div>
    </div>
    <div class="wrapper-mobile">
      <div class="banner-wrapper-mobile">
        <div class="wrapper-mobile-top">
          <div class="num"></div>
          <div class="one-banner"></div>
        </div>
        <div class="wrapper-mobile-content">
          <p class="title">{{$t('proSecret.text2')}}</p>
          <p class="description">{{$t('proSecret.text3')}}</p>
          <p class="play" @click="play"></p>
        </div>
        <div class="banner-bg"></div>
      </div>
    </div>
    <div class="content-one wrapper-pc">
      <div class="one-banner"></div>
    </div>
    <div class="content-two wrapper-pc">
      <span class="num"></span>
      <p class="title">{{$t('proSecret.text4')}}</p>
      <p class="description">{{$t('proSecret.text5')}}</p>
      <ul class="list">
        <li class="item" v-for="item in list" :key="item.index">
          <div class="li-left">
            <img :src="item.imgUrl" />
          </div>
          <div class="li-right">
            <p class="title">{{item.title}}</p>
            <p class="description">{{item.description}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="wrapper-mobile">
      <div class="content-two-mobile">
        <span class="num"></span>
        <p class="title">{{$t('proSecret.text4')}}</p>
        <p class="description">{{$t('proSecret.text5')}}</p>
        <ul class="list">
          <li class="item" v-for="item in list" :key="item.index">
            <img :src="item.imgUrl" />
            <p class="title">{{item.title}}</p>
            <p class="description">{{item.description}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="content-three wrapper-pc">
      <div class="three-top">
        <span class="num"></span>
        <div class="title">{{$t('proSecret.text6')}}</div>
        <div class="description">{{$t('proSecret.text7')}}</div>
      </div>
      <div class="three-bottom">
        <div class="btn">
        </div>
        <div class="pic-wrapper">
          <div class="pic-left">
            <img src="../assets/img/product/a.svg" />
            <p class="title">{{$t('proSecret.text9')}}</p>
            <p class="description">{{$t('proSecret.text10')}}</p>
          </div>
          <div class="pic-right">
            <img src="../assets/img/product/b.svg" />
            <p class="title">{{$t('proSecret.text11')}}</p>
            <p class="description">{{$t('proSecret.text12')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="content-three-mobile">
        <div class="three-top">
          <span class="num"></span>
          <div class="title">{{$t('proSecret.text6')}}</div>
          <div class="description">{{$t('proSecret.text7')}}</div>
        </div>
        <div class="three-bottom">
          <div class="pic-wrapper">
            <div class="pic-left">
              <img src="../assets/img/product/a.svg" />
              <p class="title">{{$t('proSecret.text9')}}</p>
              <p class="description">{{$t('proSecret.text10')}}</p>
            </div>
            <div class="pic-right">
              <img src="../assets/img/product/b.svg" />
              <p class="title">{{$t('proSecret.text11')}}</p>
              <p class="description">{{$t('proSecret.text12')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-four wrapper-pc">
      <span class="num"></span>
      <div class="title">{{$t('proSecret.text13')}}</div>
      <div class="description">
        {{$t('proSecret.text14')}}
      </div>
      <div class="content-wrapper">
        <div class="parallelogram-wrapper">
          <div class="parallelogram" style="background-color: #6287DE"></div>
          <span class="title">{{$t('proSecret.text15')}}</span>
          <p class="description">{{$t('proSecret.text16')}}</p>
        </div>
        <div class="parallelogram-wrapper">
          <div class="parallelogram" style="background-color: #91F0D2"></div>
          <span class="title">{{$t('proSecret.text17')}}</span>
          <p class="description">{{$t('proSecret.text18')}}</p>
        </div>
        <div class="parallelogram-wrapper">
          <div class="parallelogram" style="background-color: #D5D5D7"></div>
          <span class="title">{{$t('proSecret.text19')}}</span>
          <p class="description">{{$t('proSecret.text20')}}</p>
        </div>
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="content-four-mobile">
        <span class="num"></span>
        <div class="title">{{$t('proSecret.text13')}}</div>
        <div class="description">
          {{$t('proSecret.text14')}}
        </div>
        <div class="content-wrapper">
          <div class="parallelogram-wrapper">
            <div class="parallelogram" style="background-color: #6287DE"></div>
            <span class="title">{{$t('proSecret.text15')}}</span>
            <p class="description">{{$t('proSecret.text16')}}</p>
          </div>
          <div class="parallelogram-wrapper">
            <div class="parallelogram" style="background-color: #91F0D2"></div>
            <span class="title">{{$t('proSecret.text17')}}</span>
            <p class="description">{{$t('proSecret.text18')}}</p>
          </div>
          <div class="parallelogram-wrapper">
            <div class="parallelogram" style="background-color: #D5D5D7"></div>
            <span class="title">{{$t('proSecret.text19')}}</span>
            <p class="description">{{$t('proSecret.text20')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-bottom">
      <img src="../assets/img/product/footer.png" />
    </div>
    <div class="video" v-show="videoShow">
      <div class="video-content">
        <i class="close" @click="closeVideo"></i>
        <video id="video" ref="video" width="100%" controls="" preload="" webkit-playsinline="true" playsinline="true">
          <source src="" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      videoShow: false,
      videoBShow: false,
      isPC: window.innerWidth > 1200,
      list: [
        {
          imgUrl: require('../assets/img/product/list/1.svg'),
          title: this.$t('proSecret.title1'),
          description: this.$t('proSecret.description1'),
        },
        {
          imgUrl: require('../assets/img/product/list/2.svg'),
          title: this.$t('proSecret.title2'),
          description: this.$t('proSecret.description2'),
        },
        {
          imgUrl: require('../assets/img/product/list/3.svg'),
          title: this.$t('proSecret.title3'),
          description: this.$t('proSecret.description3'),
        },
        {
          imgUrl: require('../assets/img/product/list/4.svg'),
          title: this.$t('proSecret.title4'),
          description: this.$t('proSecret.description4'),
        },
        {
          imgUrl: require('../assets/img/product/list/5.svg'),
          title: this.$t('proSecret.title5'),
          description: this.$t('proSecret.description5'),
        },
        {
          imgUrl: require('../assets/img/product/list/6.svg'),
          title: this.$t('proSecret.title6'),
          description: this.$t('proSecret.description6'),
        },
      ],
      isEN: false,
    }
  },
  created() {
    if (window.localStorage.getItem('secretLang') === 'EN') {
      this.isEN = true
    } else {
      this.isEN = false
    }
  },
  mounted() {
    this.$refs.video.src = `/vedio/${this.$lang === 'cn' ? 'cn' : 'en'}/home.mp4`
  },
  methods: {
    play() {
      this.videoShow = true
      this.$refs.video.play()
    },
    closeVideo() {
      this.videoShow = false
      this.$refs.video.pause()
    },
    download() {
      window.open('https://isecret.im/', '_blank');
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .video {
    position: fixed;
    background: rgba(0, 0, 0, .6);
    width: 100%;
    height: 100%;
    z-index: 99;
    top: 0;
    left: 0;
    &-content {
      width: 800px;
      position: absolute;
      left: 50%;
      top: 20%;
      transform: translateX(-50%);
      background: #000;
      @media screen and (max-width: 1200px) {
        top: 40%;
        width 80%
      }
    }
    .close {
      position: absolute;
      right: 0;
      top: -18px;
      width: 20px;
      height: 20px;
      transform: rotate(-45deg);
      transform-origin: 30% 20%;
      &:before, &:after {
        content: '';
        width: 2px;
        height: 20px;
        position: absolute;
        left: 9px;
        top: 0;
        background: #999;
      }
      &:after {
        transform: rotate(90deg)
      }
      &:hover {
        &:before, &:after {
          background: #dc2f2f;
        }
      }
      cursor: pointer;
      z-index: 22;
    }
  }

  .wrapper
    .wrapper-top
      position relative
      width 100%
      height 90vh
      background url("../assets/img/product/banner.png") no-repeat
      background-position center
      background-size contain
      padding 0 50px
      .top-content
        position absolute
        display flex
        flex-direction column
        justify-content flex-start
        left 150px
        top 262px
        .subTitle
          font-weight bold
          color #636e72
        .title-middle
          margin 26px 0 50px
        .title
          font-weight bold
          font-size 52px
          color #2d3436
        &.cnPcHasLetter
          letter-spacing: 20px;
        &.enPcHasLetter
          letter-spacing: 8px;
      .scroll
        position absolute
        bottom 220px
        right 50px
        font-size: 12px;
        display: inline;
        color: #636e72;
        cursor: pointer;
        line-height: 1.5;
        border-bottom: 1px solid #000;
    .wrapper-top-mobile
      position relative
      width 100%
      height 334px
      background url("../assets/img/product/bannerMobile.png") no-repeat
      background-position center
      background-size contain
      .top-content
        position absolute
        display flex
        flex-direction column
        justify-content flex-start
        left 30px
        top 120px
        .subTitle
          font-weight bold
          display inline
          color #636e72
          font-size 14px
        .title-middle
          margin 7px 0 14px
        .title
          font-weight bold
          font-size 20px
          color #2d3436
        &.cnMobileHasLetter
          letter-spacing 3px
        &.enMobileHasLetter
          letter-spacing: 0;
          width 70%
    .banner-wrapper
      margin 0 auto
      width 1400px
      height 144px
      position relative
      @media screen and (max-width: 1400px)
        width 100%
        padding 0 40px
      .banner
        z-index 2
        margin 0 auto
        width 1400px
        height 288px
        border-radius 5px
        background-color #fff
        display flex
        flex-direction column
        padding 40px 0 0 70px
        -moz-box-shadow 0px 0px 3px #333333
        -webkit-box-shadow 0px 0px 3px #333333
        box-shadow 0px 0px 3px #333333
        @media screen and (max-width: 1400px)
          width 100%
          padding 0 40px
        .num
          display block
          background url("../assets/img/product/01.svg") no-repeat
          width 24px
          height 16px
          background-size 24px 16px
          padding-bottom 20px
          border-bottom 3px solid #000
        .title
          margin-top 24px
          font-size 30px
          color #2d3436
        .description
          width 60%
          line-height 1.8
          margin-top 22px
          font-size 16px
          color #636e72
        .play
          cursor pointer
          user-select none
          margin-top 20px
          width 40px
          height 32px
          background url("../assets/img/product/play.svg") no-repeat
          background-size 40px 32px
      .banner-bg
        z-index -1
        position absolute
        width 630px
        height 140px
        background url("../assets/img/product/bg.png") no-repeat
        background-size 630px 140px
        right -5%
        bottom -220px
        background-position right
        @media (max-width: 1600px) {
          right: 0
        }
    .banner-wrapper-mobile
      position relative
      z-index 2
      width 670px
      background-color #fff
      min-height 450px
      padding-bottom 20px
      -moz-box-shadow 0px 0px 3px #ccc
      -webkit-box-shadow 0px 0px 3px #ccc
      box-shadow 0px 0px 3px #ccc
      @media (max-width: 768px) {
        width 90%
      }
      .wrapper-mobile-top
        display flex
        flex-direction row
        width 670px
        @media (max-width: 768px) {
          width 90%
        }
        .num
          z-index 999
          margin 18px 0 0 18px
          display block
          background url("../assets/img/product/01.svg") no-repeat
          width 18px
          height 14px
          background-size 18px 14px
          padding-bottom 20px
          border-bottom 2px solid #000
        .one-banner
          margin-top 18px
          width 460px
          height 269px
          background url("../assets/img/product/02bg.svg") no-repeat
          background-size 460px 269px
          @media (max-width: 768px) {
            width 85%
            height 169px
            background-size 100% 169px
          }
          @media (max-width: 320px) {
            margin-top 0
          }
      .wrapper-mobile-content
        margin 0 20px
        .title
          font-size 16px
          color #2d3436
          font-weight bold
          margin 40px 0 30px
        .description
          font-size 14px
          color #636e72
          line-height 2
        .play
          cursor pointer
          user-select none
          margin-top 20px
          width 20px
          height 16px
          background url("../assets/img/product/play.svg") no-repeat
          background-size 20px 16px
      .banner-bg
        position absolute
        width 80%
        height 62px
        background url("../assets/img/product/bg.png") no-repeat
        background-size 80% 62px
        background-position right
        right -30px
        bottom -30px
    .content-two-mobile
      margin 50px 20px 0 20px
      display flex
      flex-direction column
      align-items center
      .num
        display block
        background url("../assets/img/product/02.svg") no-repeat
        width 18px
        height 14px
        background-size 18px 14px
        padding-bottom 20px
        border-bottom 2px solid #000
      .title
        text-align center
        margin 30px
        font-size 16px
        color #2d3436
        font-weight bold
      .description
        font-size 14px
        color #636e72
        line-height 2
      .list
        margin-top 51px
        width 100%
        display flex
        flex-direction row
        flex-wrap wrap
        .item
          margin-bottom 38px
          display flex
          flex-direction column
          align-items center
          width 50%
          img
            height 40px
          .title
            height 16px
            margin 10px 0 20px 0
          .description
            padding 0 6px
            text-align center
            font-size 12px

    .content-one
      .one-banner
        margin 320px auto 130px
        width 900px
        height 640px
        background url("../assets/img/product/02bg.svg") no-repeat
        background-size 900px 640px
    .content-two
      padding 0 0 0 70px
      margin 108px auto
      width 1400px
      height auto
      @media screen and (max-width: 1400px)
        width 100%
        padding 0 40px
      .num
        display block
        background url("../assets/img/product/02.svg") no-repeat
        width 24px
        height 16px
        background-size 24px 16px
        padding-bottom 20px
        border-bottom 3px solid #000
      .title
        margin-top 24px
        font-size 30px
        color #2d3436
      .description
        width 80%
        line-height 1.8
        margin-top 22px
        font-size 16px
        color #636e72
      .list
        margin-top 51px
        width 100%
        display flex
        flex-direction row
        flex-wrap wrap
        .item
          margin-bottom 76px
          display flex
          flex-direction row
          align-items flex-start
          width 50%
          .li-left
            margin-right 18px
            img
              width 60px
              height 56px
          .li-right
            .title
              font-weight bold
              font-size 18px
              color #2d3436
              margin-top 0
            .description
              width 95%
              margin-top 10px
              font-size 16px
              line-height 1.6
    .content-three-mobile
      display flex
      flex-direction column
      align-items center
      margin 0 20px
      .three-top
        .num
          display block
          background url("../assets/img/product/03.svg") no-repeat
          width 18px
          height 14px
          background-size 18px 14px
          padding-bottom 20px
          border-bottom 2px solid #000
        .title
          margin 30px 0
          font-size 16px
          color #2d3436
          font-weight bold
        .description
          font-size 14px
          color #636e72
          line-height 2
      .three-bottom
        margin-top 30px
        width 100%
        .pic-wrapper
          width 100%
          .pic-left, .pic-right
            background-color #fff
            width 60%
            border .5px solid rgba(112, 112, 112, .4)
            @media (max-width: 767px) {
              width 80%
            }
            img
              display block
              margin 0 auto
              width 50%
              @media (max-width: 767px) {
                width 80%
              }
            .title
              margin 15px
              font-size 16px
              color #2d3436
              font-weight bold
            .description
              margin 0 15px
              font-size 14px
              color #636e72
              line-height 2
          .pic-left
            min-height 300px
            padding-bottom 20px
            img
              margin-top 40px
          .pic-right
            padding-bottom 5px
            float right
            img
              margin-top 31px
            .btn
              margin-top 50px
              cursor pointer
              user-select none
              font-size 16px
              color #636e72
              text-align center
              line-height 40px
              height 40px
              width 125px
              border 1px solid #2d3436
    .content-three
      padding 0 0 0 70px
      margin 168px auto
      width 1400px
      height auto
      @media screen and (max-width: 1400px)
        width 100%
        padding 0 40px
      .three-top
        .num
          display block
          background url("../assets/img/product/03.svg") no-repeat
          width 24px
          height 16px
          background-size 24px 16px
          padding-bottom 20px
          border-bottom 3px solid #000
        .title
          margin-top 24px
          font-size 30px
          color #2d3436
        .description
          width 80%
          line-height 1.8
          margin-top 22px
          font-size 16px
          color #636e72
      .three-bottom
        .btn
          margin-top 52px
          cursor pointer
          user-select none
          font-size 16px
          color #2d3436
          text-align center
          line-height 56px
          height 56px
          width 200px
        .pic-wrapper
          position relative
          width 100%
          height 800px
          flex-direction row
          .pic-left, .pic-right
            position absolute
            top 90px
            width 50%
            height 600px
            border .5px solid #667070
            img
              display block
              margin 80px auto
              width 400px
              height 240px
            .title
              padding-left 40px
              margin-top 24px
              font-size 30px
              color #2d3436
            .description
              padding-left 40px
              width 90%
              line-height 1.8
              margin-top 22px
              font-size 14px
              color #636e72
          .pic-left
            top 90px
          .pic-right
            top 0
            right 0
    .content-four-mobile
      display flex
      flex-direction column
      margin 80px 20px 30px
      .num
        display block
        background url("../assets/img/product/04.svg") no-repeat
        width 18px
        height 14px
        background-size 18px 14px
        padding-bottom 20px
        border-bottom 2px solid #000
      .title
        margin 30px 0
        font-size 16px
        color #2d3436
        font-weight bold
      .description
        font-size 14px
        color #636e72
        line-height 2
      .content-wrapper
        margin-top 35px
        display flex
        flex-direction column
        .parallelogram-wrapper
          height 100px
          display flex
          flex-direction row
          align-items center
          position relative
          .parallelogram
            height 33px
            width 160px
            -webkit-transform skew(-40deg)
            -moz-transform skew(-40deg)
            -o-transform skew(-40deg)
          .title
            display block
            width 100px
            position absolute
            left -5px
            line-height 15px
            margin 0
            font-size 14px
            font-weight bold
            margin-left 25px
            word-wrap break-word
            color #fff
          .description
            margin-left 30px
            width 90%
            line-height 1.4
            font-size 14px
            color #636e72
        .btn
          cursor pointer
          user-select none
          text-align center
          margin-left 320px
          line-height 56px
          height 56px
          width 200px
          font-size 10px
    .content-four
      padding 0 0 0 70px
      margin 84px auto
      width 1400px
      height auto
      @media screen and (max-width: 1400px)
        width 100%
        padding 0 40px
      .num
        display block
        background url("../assets/img/product/04.svg") no-repeat
        width 24px
        height 16px
        background-size 24px 16px
        padding-bottom 20px
        border-bottom 3px solid #000
      .title
        margin-top 24px
        font-size 30px
        color #2d3436
      .description
        width 70%
        line-height 1.8
        margin-top 22px
        font-size 16px
        color #636e72
      .content-wrapper
        margin-top 35px
        display flex
        flex-direction row
        .parallelogram-wrapper
          position relative
          width 200px
          margin-left 40px
          .parallelogram
            height 52px
            width 200px
            -webkit-transform skew(-40deg)
            -moz-transform skew(-40deg)
            -o-transform skew(-40deg)
          .title
            font-size 16px
            font-weight bold
            position absolute
            top -8px
            left 50px
            color #fff
          .description
            width 98%
            line-height 1.8
            margin-top 11px
            margin-left -10px
            font-size 14px
            color #636e72
        .btn
          cursor pointer
          user-select none
          text-align center
          margin-left 320px
          line-height 56px
          height 56px
          width 200px
          border .5px solid #2d3436
          font-size 10px
          @media (max-width: 1400px) {
            margin-left 10%
          }
    .wrapper-bottom
      margin 110px auto
      width 1400px
      height auto
      @media (max-width: 1400px) {
        margin 50px auto
        width 100%
        padding 0 40px
        height 130px
      }
      @media (max-width: 1200px) {
        margin 50px auto
        width 320px
        height 130px
      }
      img
        display block
        margin 0 auto
        width 100%
</style>
