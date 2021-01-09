<template>
  <div class="home-w">
    <div class="banner" :class="{'en-banner': $i18n.locale === 'EN'}">
      <!--      text1: '探索秘密的力量',-->
      <div class="banner-v-c" v-if="randomIndex === 1">
        <img src='../assets/img/home/1.jpg'>
        <div class="title" :class="{'eplang': $lang === 'ep' || $lang === 'ru' , 'delang': $lang === 'de'}">{{$t('banner.text1')}}</div>
      </div>
<!--      text2: '每个社群都有自己的秘密',-->
      <div class="banner-v-c" v-if="randomIndex === 2">
        <img src='../assets/img/home/2.jpg'>
        <div class="title" :class="{'eplang': $lang === 'ep' || $lang === 'ru' ,'delang': $lang === 'de'}">{{$t('banner.text2')}}</div>
      </div>
      <!--      text3: '社群，人类文明的价值',-->
      <div class="banner-v-c" v-if="randomIndex === 3">
        <img src='../assets/img/home/pic1.png'>
        <div class="title" :class="{'eplang': $lang === 'ep'|| $lang === 'ru' ,'delang': $lang === 'de'}">{{$t('banner.text3')}}</div>
      </div>
      <!--      text4: '秘密，重建社群',-->
      <div class="banner-v-c" v-if="randomIndex === 4">
        <img src='../assets/img/home/4.png'>
        <div class="title" :class="{'eplang': $lang === 'ep'|| $lang === 'ru' ,'delang': $lang === 'de'}">{{$t('banner.text4')}}</div>
      </div>
      <!--      text5: '人类的信仰，社群的秘密',-->
      <div class="banner-v-c" v-if="randomIndex === 5">
        <img src='../assets/img/home/pic2.png'>
        <div class="title" :class="{'eplang': $lang === 'ep'|| $lang === 'ru' ,'delang': $lang === 'de'}">{{$t('banner.text5')}}</div>
      </div>
      <!--      text6: '社群经济，世界大观'-->
      <div class="banner-v-c" v-if="randomIndex === 6">
        <img src='../assets/img/home/6.png'>
        <div class="title" :class="{'eplang': $lang === 'ep'|| $lang === 'ru'}">{{$t('banner.text6')}}</div>
      </div>
      <div class="play-btn" @click="playBtn()">
        <img src="../assets/img/home/play.png">
      </div>
    </div>
    <div class="c-one-t">
      <div class="one-parent wrap-v-c">
        <div class="big-box">
          <div class="num">
            <img src="../assets/img/borderNumber/01.svg" alt="">
          </div>
          <h3 class="a-title">{{$t('home.text2')}}</h3>
          <p class="desc1">{{$t('home.text3')}}</p>
          <p class="desc1">{{$t('home.text03')}}</p>
          <div class="btn-download hei-btn"><a href="https://www.isecret.im/" target="_blank">{{$t('home.text4')}}</a></div>
        </div>
        <div class="small-box">
          <div class="btn-download-m"><a href="https://www.isecret.im/" target="_blank">{{$t('home.text4')}}</a></div>
          <div class="img-c-a">
            <img src="../assets/img/home/01_secret.gif" alt="">
          </div>
        </div>
      </div>
    </div>
<!--    <div class="one-w">-->
<!--      <div class="banner-v-c">-->
<!--        <div class="img-w">-->
<!--          <img src="../assets/img/home/02BG.svg" alt="" class="banner-img">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="one-parent">-->
<!--        <div class="big-box">-->
<!--          <div class="num">-->
<!--            <img src="../assets/img/productSecret/01.png" alt="">-->
<!--          </div>-->
<!--          <h3 class="a-title">{{$t('home.text2')}}</h3>-->
<!--          <p class="desc1">{{$t('home.text3')}}</p>-->
<!--          <p class="desc1">{{$t('home.text03')}}</p>-->
<!--          <div class="btn-download"><a href="https://www.isecret.im/" target="_blank">{{$t('home.text4')}}</a></div>-->
<!--        </div>-->
<!--        <div class="small-box">-->
<!--          <img src="../assets/img/home/secret_logo01.svg" alt="">-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <!--    02-->
    <div class="two-w">
      <div class="flex-t">
        <div class="two-img-c">
          <img src="@img/borderNumber/02.svg" alt="">
        </div>
        <div class="num-w">
          <div class="two-text1">{{$t('home.text5')}}</div>
          <div class="two-text2">{{$t('home.text6')}}</div>
        </div>
      </div>
      <div class="mobile-t">
        <div class="flex-t-a">
          <img src="@img/borderNumber/02.svg" alt="">
          <div class="n-text1">{{$t('home.text5')}}</div>
        </div>
        <div class="n-cont">{{$t('home.text6')}}</div>
      </div>
      <div class="two-c-t">
        <div class="c-box" ref="scrollUls"  :class="{'rulang': $lang === 'ru' || $lang === 'de' || $lang === 'fra' || $lang === 'es'}">
          <ul class="uls">
            <li class="list">
              <div class="img-box">
                <img src="../assets/img/home/pay.svg" alt="">
              </div>
              <p class="text1">{{$t('home.text7')}}</p>
              <p class="text2">{{$t('home.text8')}}</p>
            </li>
            <li class="list list-two">
              <div class="img-box">
                <img src="../assets/img/home/meeting.svg" alt="">
              </div>
              <p class="text1">{{$t('home.text9')}}</p>
              <p class="text2">{{$t('home.text10')}}</p>
            </li>
            <li class="list">
              <div class="img-box">
                <img src="../assets/img/home/mall.png" alt="">
              </div>
              <p class="text1">{{$t('home.text11')}}</p>
              <p class="text2">{{$t('home.text12')}}</p>
              <div class="more" :class="{'eplang': $lang === 'ep'}">
                <div class="more-t" @click="$router.push('/proCommunity?a=1')">{{$t('home.text13')}}</div>
              </div>
            </li>
          </ul>
          <div class="bg-c">
            <img src="../assets/img/home/bg_box.png" alt="">
          </div>
        </div>
      </div>
      <div class="swiper-container-c-box">
        <div>
          <div class="item"  >
            <div class="img-box">
              <img src="../assets/img/home/pay.svg" alt="">
            </div>
            <p class="text1">{{$t('home.text7')}}</p>
            <p class="text2">{{$t('home.text8')}}</p>
          </div>
          <div class="item">
            <div class="img-box">
              <img src="../assets/img/home/meeting.svg" alt="">
            </div>
            <p class="text1">{{$t('home.text9')}}</p>
            <p class="text2">{{$t('home.text10')}}</p>
          </div>
          <div class="item">
            <div class="img-box">
              <img src="../assets/img/home/mall.png" alt="">
            </div>
            <p class="text1">{{$t('home.text11')}}</p>
            <p class="text2">{{$t('home.text12')}}</p>
          </div>

        </div>
      </div>


      <div class="b-bto">
        <div class="b-bg-c">
          <img src="../assets/img/home/bg_box.png" alt="">
        </div>
        <div class="more">
          <div class="more-t" @click="$router.push('/proCommunity?a=1')">{{$t('home.text13')}}</div>
        </div>
      </div>
    </div>


<!--    <div class="black">-->
<!--      <div class="bg-t">-->
<!--        <div class="bg-c">-->
<!--          <img src="../assets/img/home/bg_box.png" alt="">-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <!--    03-->
    <div class="three-c wrap-v-c">
      <div class="three-item">
        <img src="../assets/img/home/03_secret.gif" alt="">
      </div>
      <div class="three-item pc-three">
        <img src="../assets/img/home/03_border.svg" alt="">
        <div class="three-rihgt-c">
          <div class="img-num">
            <img src="../assets/img/borderNumber/03.svg" alt="">
          </div>
          <div class="three-title">{{$t('home.text24')}}</div>
          <div class="three-desc">{{$t('home.text25')}}</div>
          <div class="hei-btn"  @click="$router.push('/tradingCenter')"><span>{{$t('home.text26')}}</span></div>
        </div>
      </div>
    </div>
    <div class="three-mobile-t">
      <div class="three-item">
        <img src="../assets/img/home/03_border_m.svg" alt="">
        <div class="three-rihgt-c">
          <div class="img-num">
            <img src="../assets/img/borderNumber/03.svg" alt="">
          </div>
          <div class="three-title">{{$t('home.text24')}}</div>
          <div class="three-desc" :class="{'delang': $lang === 'de' || $lang === 'ru' || $lang === 'ep' || $lang === 'fra'}">{{$t('home.text25')}}</div>
          <div class="hei-btn"  @click="$router.push('/tradingCenter')"><span>{{$t('home.text26')}}</span></div>
        </div>
      </div>
      <div class="three-item three-two-m">
        <img src="../assets/img/home/03_secret_m.gif" alt="">
      </div>

    </div>

<!-- 04-->
    <div class="five-w">
      <div class="five">
        <div>
          <img class="num" src="../assets/img/borderNumber/04.svg" />
        </div>
        <p class="title">{{$t('home.text14')}}</p>
        <img class="five-bg" src="../assets/img/home/good-p.svg" alt="">
        <p class="description">{{$t('home.text15')}}{{$t('home.text16')}}{{$t('home.text17')}}</p>
        <p class="blue-desc">{{$t('home.text18')}}</p>
      </div>
    </div>
<!-- 05-->
    <div class="six">
      <img class="num" src="../assets/img/borderNumber/05.svg" />
      <p class="title">{{$t('home.text27')}}</p>
      <p class="description">{{$t('home.text28')}}</p>
      <ul class="c-uls">
        <li class="list-c">
          <div class="img-c"><img src="../assets/img/home/a.svg" alt=""></div>
          <p class="title">{{$t('home.text29')}}</p>
          <p class="description">{{$t('home.text30')}}</p>
        </li>
        <li class="list-c">
          <img src="../assets/img/home/b.svg" alt="">
          <p class="title">{{$t('home.text31')}}</p>
          <p class="description">{{$t('home.text32')}}</p>
        </li>
        <li class="list-c">
          <div class="img-c"><img src="../assets/img/home/c.svg" alt=""></div>
          <p class="title">{{$t('home.text33')}}</p>
          <p class="description">{{$t('home.text34')}}</p>
        </li>
      </ul>
    </div>

    <!--     06-->
    <div class="four-w">
      <div class="img-w">
        <img src="../assets/img/home/06-bg.svg" alt="" class="m-06">
        <!--        <img src="../assets/img/bannerA/banner_mobile.png" alt=""  class="m-banner">-->
      </div>
      <div class="four-flex wrap-v-c">
        <div class="wrap-c">
          <div class="title-w">
            <div class="icon">
              <img src="../assets/img/borderNumber/06.svg" alt="">
            </div>
            <h3>{{$t('home.text19')}}</h3>
          </div>
          <p class="four-desc">{{$t('home.text20')}}</p>
        </div>
        <div class=" img-earth">
          <img src="../assets/img/home/earth.png" alt="" class="pc-banner">
        </div>
      </div>
    </div>
<!--
preload="metadata" playsinline="true" webkit-playsinline="true" x5-video-player-fullscreen="false" x5-video-player-type="h5" x5-video-orientation="portraint"
-->
    <div class="video" v-show="videoShow">
      <div class="video-content">
        <i class="close" @click="close"></i>
        <video ref="video1" width="100%" controls="controls" preload="metadata" playsinline="true" webkit-playsinline="true" x5-video-player-fullscreen="false" x5-video-player-type="h5" x5-video-orientation="portraint"
               v-show="cuIndex === 0">
          <source :src="videoSrc1" type="video/mp4">
        </video>
        <video ref="video2" width="100%" controls="controls" preload="metadata" playsinline="true" webkit-playsinline="true" x5-video-player-fullscreen="false" x5-video-player-type="h5" x5-video-orientation="portraint"
               v-show="cuIndex === 1">
          <source :src="videoSrc2" type="video/mp4">
        </video>
        <video ref="video3" width="100%" controls="controls" preload="metadata" playsinline="true" webkit-playsinline="true" x5-video-player-fullscreen="false" x5-video-player-type="h5" x5-video-orientation="portraint"
               v-show="cuIndex === 2">
          <source :src="videoSrc3" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import 'swiper/dist/css/swiper.css'
// import {swiper, swiperSlide} from 'vue-awesome-swiper'
// import Swiper from 'swiper'

export default {
  data() {
    return {
      randomIndex: Math.round(Math.random() * 5) + 1,
      cuIndex: 0,
      // loop: true,
      videoShow: false,
      swiperOptionInner: {
        autoHeight: true,
        height: 280, // 高度占满整个设备高度
        initialSlide: 1,
        slidesPerView: 'auto',
        loop: true
      },
      swiperOption2: {
        loop: true,
        pagination: {
          el: '.swiper-pagination2',
          clickable: true,
        },
        autoplay: {
          delay: 5000,//1秒切换一次
        },
        autoHeight: true,
        paginationClickable: true,
        autoplayDisableOnInteraction: false
      },
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 5000,//1秒切换一次
        },
        // autoHeight: true,
        // loop: true,
        // autoplay: true,
        paginationClickable: true,
        autoplayDisableOnInteraction: false
      },

      videoSrc1: '',
      videoSrc2: '',
      videoSrc3: '',
    }
  },
  created() {
  },
  mounted() {
    setTimeout(() => {
      this.$refs.scrollUls.scrollLeft = 160
    }, 100)
    // var galleryTop = new Swiper('.gallery-top', {
    //   loop: true,
    //   // autoplay: true,
    //   autoHeight: true,
    //   centeredSlides: true,
    //   activeitem: 0,
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    //   paginationClickable: true,
    //   autoplayDisableOnInteraction: false,
    //   // initialSlide :2,
    //   observeParents: true,
    //   onSlideChangeEnd: function (galleryTop, activeIndex) {
    //     console.log(galleryTop.activeIndex)
    //   },
    // })
    // let hc = 'https://secretworth.blob.core.windows.net/videos'
    // if (this.$i18n.locale === 'CN') {
    //   this.videoSrc1 = hc + '/secret.mp4'
    //   this.videoSrc2 = hc + '/power.mp4'
    //   this.videoSrc3 = hc + '/every.mp4'
    // } else {
    //   this.videoSrc1 = hc + '/secret_en.mp4'
    //   this.videoSrc2 = hc + '/power_en.mp4'
    //   this.videoSrc3 = hc + '/every_en.mp4'
    // }
    let hc = 'https://www.secretworth.com/static'
    if (this.$i18n.locale === 'CN') {
      this.videoSrc1 = hc + '/video2/secret.mp4'
      this.videoSrc2 = hc + '/video2/power.mp4'
      this.videoSrc3 = hc + '/video2/every.mp4'
    } else {
      this.videoSrc1 = hc + '/video2/secret_en.mp4'
      this.videoSrc2 = hc + '/video2/power_en.mp4'
      this.videoSrc3 = hc + '/video2/every_en.mp4'
    }
  },
  methods: {

    cLickFn(index) {
      console.log(index)
    },
    getRandomArrayElements(arr, count) {
      var shuffled = arr.slice(0),
        i = arr.length,
        min = i - count,
        temp,
        index;
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }
      return shuffled.slice(min);
    },
    playBtn() {
      this.videoShow = true
      let cindex = this.getRandomArrayElements([0, 1, 2], 1)[0]
      this.cuIndex = cindex
      if (cindex === 0) {
        this.$refs.video1.play()
      } else if (cindex === 1) {
        this.$refs.video2.play()
      } else if (cindex === 2) {
        this.$refs.video3.play()
      }
      this.swiperOption.autoplay.disableOnInteraction = true
      this.swiperOption.loop = false
    },
    close() {
      this.swiperOption.autoplay.disableOnInteraction = false
      this.videoShow = false
      this.$refs.video1.pause()
      this.$refs.video2.pause()
      this.$refs.video3.pause()
    },
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper
    // },
  }
}
</script>

<style scoped lang="stylus">
  .three-mobile-t
    display: none
    padding: 30px 20px
    @media screen and (max-width: 1200px)
      display: block
    .three-two-m
      top: -1px
    .three-item
      position: relative
      img
        width: 100%
        display: block
      .three-rihgt-c
        position: absolute
        left: 0
        top:0
        width: 100%
        height: 100%
        display: flex
        align-items center
        justify-content center
        flex-direction column
        /*width: 400px*/
        .three-title
          font-size: 30px
          color #2d3436
          margin: 10px 0 6px
          @media screen and (max-width: 1200px)
            font-size: 22px
            font-weight: bold
        .three-desc
          font-size: 14px
          color #636e72
          line-height: 1.5
          width: 70%
          &.delang
            font-size 12px
        .hei-btn  span
          min-width: 150px
          height: 30px
          display: flex
          align-items center
          justify-content center
          font-size: 14px
          border: 1px solid #000
          margin-top:10px
          color #000
          text-align: center
          cursor pointer
  .three-c
    display: flex
    align-items center
    @media screen and (max-width: 1400px)
      width: 1000px
    @media screen and (max-width: 1200px)
      display: none
    .pc-three
      margin-left: -1px
    .three-item
      width: 50%
      position: relative
      img
        width: 100%
      .three-rihgt-c
        position: absolute
        left: 0
        top:0
        width: 100%
        height: 100%
        display: flex
        align-items center
        justify-content center
        flex-direction column
        /*width: 400px*/
        .three-title
          font-size: 30px
          color #2d3436
          margin: 40px 0 30px
          @media screen and (max-width: 1200px)
            font-size: 22px
            font-weight: bold
        .three-desc
          font-size: 16px
          color #636e72
          line-height: 1.5
          width: 400px
        .hei-btn  span
          width: 250px
          height: 60px
          display: flex
          align-items center
          justify-content center
          font-size: 14px
          border: 1px solid #000
          margin-top: 75px
          color #000
          cursor pointer
  .cnPcHasLetter
    letter-spacing: 20px !important;
    @media screen and (max-width: 1200px)
      letter-spacing: 0 !important;

  .enPcHasLetter
    letter-spacing: 3px !important;
    white-space nowrap
    @media screen and (max-width: 1200px)
      letter-spacing: 0 !important;

  .banner
    top -88px
    width 100%
    position relative
    overflow hidden
    @media screen and (max-width: 1200px)
      height auto
      top 0
    .banner-v-c
      .title
        left 50%
        transform translateX(-50%)
        position absolute
        bottom 53%
        letter-spacing 10px
        font-size 68px
        color #fff
        text-align center
        width: 100%
        padding: 0 50px
        @media screen and (max-width: 1200px) {
          bottom: 53%
        }
        &.delang{
          letter-spacing 0
          font-size 54px
          @media screen and (max-width: 1400px) {
            font-size 40px
          }
          @media screen and (max-width: 786px) {
            font-size 24px
          }
          @media screen and (max-width: 400px) {
            font-size 14px
          }
        }
        &.eplang{
          @media screen and (max-width: 1700px) {
            letter-spacing 0
          }
        }
        @media screen and (max-width: 1400px) {
          font-size 48px
        }
        @media screen and (max-width: 1200px)
          letter-spacing 5px
          font-size 20px
        @media screen and (max-width: 768px)
          font-size 16px
          width 100%
          padding 0 5px
    .play-btn
      position absolute
      left 50%
      transform translateX(-50%)
      cursor pointer
      bottom 40%
      margin-top 120px
      @media screen and (max-width: 1400px)
        bottom 30%
      @media screen and (max-width: 1200px)
        bottom 10%
      @media screen and (max-width: 768px)
        bottom 32%
      img
        width 100%
        @media screen and (max-width: 768px)
          width 110px
          height 50%
  .en-banner
    .title
      @media screen and (max-width: 768px)
        font-size: 14px !important
        letter-spacing 2px !important
  .home-w
    .gallery-top-box
      position relative
      .ul-page {
        position absolute
        right 10px
        top 40%
        transform translate(-50%)
        z-index 99
        .li-page {
          width: 5px
          height: 30px
          border-radius 5px
          background-color: #E0E0E0
          opacity: 1
          margin-bottom 10px
          &.liActive {
            opacity: 1
            background-color: #FFC200
          }
        }
      }
    .banner-v-c
      .img-w
        padding 0 !important
      .banner-img
        min-height 150px
        img
          width: 100%
      .text-w
        position absolute
        left 50%
        transform translate(-50%)
        .banner-title
          text-align center
          font-size 12px
          color #fff
          margin-top -220px
          letter-spacing 10px
          @media screen and (max-width: 1200px)
            margin-top -50px
            letter-spacing: 5px;
          .our
            display inline-block
            margin-left 20px
            @media screen and (max-width: 1200px)
              margin-left 5px
      .banner-text3
        color: #fff
        text-align center
        margin-top 24px
        letter-spacing: 20px;
        font-size 52px
        @media screen and (max-width: 1200px)
          font-size 18px
      .banner-text2
        color: #fff
        text-align center
        margin-top 24px
        letter-spacing: 20px;
        font-size 52px
        @media screen and (max-width: 1200px)
          font-size 18px
      .play-btn
        cursor pointer
        position relative
        width 60px
        margin 0 auto
        margin-top 120px
        @media screen and (max-width: 1200px)
          margin-top 20px
          width 30px
        img
          width 100%
    .one-w
      margin-top 180px
      display: flex
      justify-content center
      /*padding-bottom: 150px*/
      position relative
      @media screen and (max-width: 1200px)
        display: none
      @media screen and (min-width: 1200px)
        display: flex
      .big-box
        width: 672px
        height: 527px
        background-color: #fff
        box-shadow 0 0 20px rgba(0, 0, 0, 0.2)
        padding: 40px 0 20px 40px
        margin-top -120px
        .num
          margin: 10px 0 60px
        .a-title
          font-size: 30px
          color #2d3436
          margin-bottom: 30px
          @media screen and (max-width: 1200px)
            font-size: 22px
            font-weight: bold
        .desc1
          font-size: 16px
          color #636e72
          line-height: 1.5
          padding-right 100px
          margin-bottom 10px
        .bg_box
          position: absolute
          left: -105px;
          bottom: -74px;
          z-index: -1;
      .small-box
        margin 80px 0 0 -72px
        z-index 2
      .scroll
        font-size: 12px
        display inline
        color #636e72
        .scroll-t
          cursor pointer
          line-height: 1.5
          border-bottom: 1px solid #000
    .c-one-t
      margin-bottom: 80px
      @media screen and (max-width: 1200px)
        margin-bottom: 50px
      .one-parent
        display: flex
        align-items center
        justify-content space-between
        padding: 126px 130px 126px 80px
        border: 1px solid #ddd
        @media screen and (max-width: 1200px)
          flex-direction column
          padding: 0 20px
          border none
        .hei-btn
          width: 250px
          height: 60px
          display: flex
          align-items center
          justify-content center
          font-size: 14px
          border: 1px solid #000
          margin-top: 75px
          color #000
          cursor pointer
          transition: .3s;
          @media screen and (max-width: 1200px)
            display: none
      .big-box
        margin-right: 100px
        background-color: #fff
        @media screen and (max-width: 1200px)
          margin-right: 0
        .num
          margin: 10px 0 40px
          @media screen and (max-width: 1200px)
            margin: 20px 0 20px
        .a-title
          font-size: 30px
          color #2d3436
          margin-bottom: 30px
          @media screen and (max-width: 1200px)
            font-size: 22px
            font-weight: bold
        .desc1
          font-size: 16px
          color #636e72
          line-height: 1.5
          margin-bottom 10px
        .bg_box
          position: absolute
          left: -105px;
          bottom: -74px;
          z-index: -1;
      .small-box
        @media screen and (max-width: 1200px)
          margin-top: 20px
          display: flex
          align-items center
          justify-content center
        img
          display: block
          width: 500px
        .img-c-a
          @media screen and (max-width: 800px)
            flex 1
            img
              width: 100%
        .btn-download-m
          display: none
          @media screen and (max-width: 1200px)
            width: 120px
            height: 40px
            text-align: center
            display: flex
            align-items center
            justify-content center
            font-size: 14px
            border: 1px solid #357eec
            color #636e72
            margin-right: 20px
            cursor pointer
    .two-w
      padding-top 20px
      padding-bottom: 140px
      background-color: #fafafa
      position: relative
      @media screen and (max-width: 1200px)
        height auto
        padding-bottom: 0
      .flex-t
        margin 60px auto
        display: flex
        justify-content center
        @media screen and (max-width: 1200px)
          display: none
        .two-img-c
          margin: 10px 30px 0 0;
        .num
          display: flex
          margin-top: 15px;
          @media screen and (max-width: 1200px)
            margin-right: 10px
            margin-top: 0
          img
            display: block
            margin-right: 30px
            margin-top 10px
            @media screen and (max-width: 1200px)
              margin-top 0
              margin-right 12px
        .two-text1
          font-size: 30px
          color #2d3436
          margin-bottom: 30px
          @media screen and (max-width: 1200px)
            font-weight: bold
            line-height: 1
            font-size: 22px
        .two-text2
          line-height: 1.5
          max-width 700px
          font-size: 16px
          color #59687c
          @media screen and (max-width: 1200px)
            margin-left: -39px
            margin-right: 0
            padding-right 15px
      .mobile-t
        display: none
        @media screen and (max-width: 1200px)
          display: block
          padding: 0 20px
          .flex-t-a
            display: flex
            align-items center
            img
              display: block
            .n-text1
              font-weight: 700;
              line-height: 1;
              font-size: 22px;
              margin-left: 15px
          .n-cont
            line-height: 1.5;
            max-width: 700px;
            font-size: 16px;
            color: #59687c;
            margin-top: 20px
      .two-c-t
        width: 100%
        .bg-c
          position: absolute
          bottom: -75px;
          right: -87px;
          @media screen and (max-width: 1400px)
            right: -30px
      .c-box
        width: 1200px
        height: 460px
        background-color: #fff
        box-shadow 0 0 20px #eee
        margin: 0 auto
        position: relative
        &.rulang
          height 550px
        @media screen and (max-width: 1400px)
          width: 1000px
        @media screen and (max-width: 1200px)
          display none
          position: relative
          top: 30px
          left: 0
          width: 100%
          height auto
          transform translate(0, 0)
          background-color: transparent
          overflow: auto
          box-shadow none
          padding-bottom: 20px
          &::-webkit-scrollbar
            width: 0
        .uls
          height: 100%
          display: flex
          justify-content center
          position: relative
          z-index: 10
          @media screen and (max-width: 1200px)
            width: 700px
            padding-top: 20px;
            margin: 0 auto // transform: translate3d(-300px, 0px, 0px);
          .list
            flex 1
            position: relative
            z-index: 10
            background-color: #fff
            @media screen and (max-width: 1200px)
              width: 200px
              flex none
              box-shadow 0 0 10px #eee
              margin: 0 8px
              background-color: #fff
              padding: 30px 10px
            .img-box
              margin: 96px auto 30px
              @media screen and (max-width: 1200px)
                margin: 30px auto 10px
              img
                display: block
                margin: 0 auto
            .text1
              font-size: 20px
              color #2d3436
              font-weight: bold
              text-align: center
              margin-bottom: 40px
            .text2
              text-align: center
              width: 276px
              margin: 0 auto
              font-size: 14px
              color #636e72
              line-height: 2
              word-wrap: break-word;
              word-break: normal;
              @media screen and (max-width: 1200px)
                width: 100%
          .list-two
            @media screen and (max-width: 1200px)
              position: relative
              top: -20px
          .more
            width: 276px
            /*margin: 100px auto 0*/
            cursor pointer
            text-align: right
            line-height: 2
            position: absolute
            right: 30px
            bottom: 30px
            &.eplang
              bottom: 10px
            @media screen and (max-width: 1200px)
              display: none
            .more-t
              font-size 16px
              display inline-block
              color #F16EAF
              border-bottom: 1px solid #357eec
      .swiper-container-c-box
        margin-top: 20px
        .en-sc .item
          height: 380px
        .item
          padding: 30px 10px
          .img-box
            margin: 96px auto 30px
            @media screen and (max-width: 1200px)
              margin: 10px auto 10px
            img
              display: block
              margin: 0 auto
          .text1
            font-size: 20px
            color #2d3436
            font-weight: bold
            text-align: center
            margin-bottom: 20px
          .text2
            text-align: center
            width: 276px
            margin: 0 auto
            font-size: 14px
            color #636e72
            line-height: 1.4
            word-wrap: break-word;
            word-break: normal;
            @media screen and (max-width: 1200px)
              width: 80%
        @media screen and (max-width: 1200px)
          display: block
        @media screen and (min-width: 1200px)
          display: none
        >>> .swiper-slide-active
          height: 300px
        >>> .swiper-slide-prev
          right: -30%;
          margin-top: 20px !important;
          overflow: hidden;
        >>> .swiper-slide-next
          left: -30%;
          margin-top: 20px !important;
          overflow: hidden;
        .en-sc >>> .swiper-slide-active
          height: 400px
      .b-bto
        position: relative
        @media screen and (max-width: 1200px)
          display: block
        @media screen and (min-width: 1200px)
          display: none
        .b-bg-c
          text-align: center
          img
            width: 80%
        .more
          text-align: center
          position: absolute
          left: 0
          top: 0
          display: flex
          align-items center
          justify-content center
          width: 100%
          height: 100%
          .more-t
            display inline-block
            padding-bottom: 5px
            font-size: 14px
            color #0080f4
            border-bottom: 1px solid #0080f4
    .black
      height 405px
      background-color: #fafafa
      overflow: hidden
      @media screen and (max-width: 1200px)
        display: none
      @media screen and (min-width: 1200px)
        display: block
      .bg-t
        width: 1174px
        margin: 0 auto
        .bg-c
          padding-top: 220px;
          padding-bottom: 50px
          display: flex
          align-items flex-end
          justify-content flex-end
        img
          margin-right: -110px;
          margin-top: 50px
    .three-w
      background-color: #fff
      height 800px
      @media screen and (max-width: 1200px)
        height auto
      >>> .swiper-container
        height: 100%
      >>> .swiper-pagination
        bottom: 30px
        .swiper-pagination-bullet
          width: 12px
          height: 12px
          background-color: #E0E0E0
          opacity: 1
          &.swiper-pagination-bullet-active
            opacity: 1
            background-color: #0080f4
      .side-item
        display: flex
        align-items center
        justify-content center
        flex-direction column
        padding-bottom: 50px
        @media screen and (max-width: 750px)
          padding-bottom: 80px
        .img-slide-one
          margin-bottom: 70px
          @media screen and (max-width: 1200px)
            margin-bottom: 30px
            text-align: center
          img
            @media screen and (max-width: 1200px)
              width: 60%
        .more-btn
          width: 250px
          height: 60px
          display: flex
          align-items center
          justify-content center
          font-size: 16px
          border: 1px solid #0080f4
          margin-top: 40px
          color #636e72
          cursor pointer
          border-radius 2px
          @media screen and (max-width: 750px)
            width: 180px
            height: 40px
            margin-top: 20px
        .slide-img2
          text-align: center
          @media screen and (max-width: 1200px)
            margin-bottom: 20px
            img
              width: 80%
      .icon
        border-bottom: 2px solid #000
        display inline-block
        margin: 100px 0 40px
        @media screen and (max-width: 1200px)
          margin: 40px 0 10px
      .title-p
        font-size: 30px
        font-weight: bold
        color #2d3436
        text-align: center
        margin-bottom: 80px
        @media screen and (max-width: 1200px)
          font-size: 16px
          margin-bottom: 30px
      .p-w
        display: flex
        align-items center
        justify-content space-between
        font-size: 18px
        color #2d3436
        margin: 10px 0 64px
        @media screen and (max-width: 1200px)
          display: none
        &.en-p
          padding: 0 20px
          width: 120%
          margin-left: -10%
      .text-three
        font-size: 18px
        color #636e72
        line-height: 1.5
        text-align: center
        width: 80%
        @media screen and (max-width: 1200px)
          font-size: 14px
          padding: 0 20px
          width: 100%
    .four
      position relative
      display flex
      flex-direction row
      justify-content center
      width 100%
      margin 123px auto
      @media screen and (max-width: 1200px)
        margin 0
        flex-direction column
      .four-left
        z-index 30
        margin-top 70px
        margin-right -50px
        width 600px
        height 500px
        @media screen and (max-width: 1200px)
          z-index 0
          margin 0
          width 100%
          padding 0 15px
        @media screen and (max-width: 768px)
          width 100%
          padding 0
          height 383px
          img
            z-index 30
            @media screen and (max-width: 1200px)
              display block
              margin 0 auto
            @media screen and (max-width: 768px)
              width 100%
      .four-right
        z-index auto
        padding 0 80px
        display flex
        flex-direction column
        align-items flex-end
        width 672px
        height 460px
        box-shadow 0 0 10px rgba(0, 0, 0, .2)
        @media screen and (max-width: 1200px)
          height auto
          padding 0 15px 60px
          align-items flex-start
          width 90%
          margin -55px auto
          border none
          box-shadow 0 0 10px rgba(0, 0, 0, .2)
          z-index 30
          background-color #fff
        img
          margin 60px 0 40px
          @media screen and (max-width: 1200px)
            margin 30px 0 20px
        .title
          font-size 22px
          font-weight bold
          color #2d3436
          margin-bottom 30px
        .description
          text-align right
          font-size 16px
          line-height 2
          color #636e72
          @media screen and (max-width: 768px)
            text-align center
        .more-btn
          width: 250px
          height: 60px
          display: flex
          align-items center
          justify-content center
          font-size: 16px
          border: 1px solid #0080f4
          margin-top: 40px
          color #636e72
          cursor pointer
          border-radius 2px
          @media screen and (max-width: 750px)
            width: 180px
            height: 40px
            margin 20px auto
            border: 1px solid #000

      .bg-icon
        position absolute
        left 150px
        bottom -60px
        @media screen and (max-width: 1500px)
          left 20px
        @media screen and (max-width: 1200px)
          right: 10px
          left auto
          bottom: -90px
          width: 80%
    .five-w
      background-color: #FAFAFA
      padding 70px 0 200px
    .five
      display flex
      flex-direction column
      justify-content center
      width 1200px
      margin: 0 auto
      @media screen and (max-width: 1200px)
        margin 0
        width 100%
        padding 0 20px
      .blue-desc
        color: #0080f4
        text-align: center
        font-size: 16px
        line-height: 2
        @media screen and (max-width: 1200px)
          text-align: left
      .num
        margin 0 auto
        display block
      .title
        text-align center
        margin-top 40px
        font-size 30px
        color #2d3436
        @media screen and (max-width: 1400px)
          margin 20px 0 30px
          font-size 22px
          font-weight bold
      .five-bg
        margin-top 80px
        display: block
        @media screen and (max-width: 1400px)
          width: 100%
          display: block
          margin: 0 auto
      .description
        margin 80px auto 0
        font-size 16px
        width 1000px
        text-align center
        line-height 2
        color #636e72
        @media screen and (max-width: 1200px)
          text-align: left
          margin 20px 0 0
          width 100%
    .six
      padding-bottom 50px
      margin -100px auto 0
      width 1200px
      display flex
      align-items center
      flex-direction column
      justify-content center
      box-shadow: 0 0 20px #eee;
      background-color: #fff
      @media screen and (max-width: 1400px) {
        width: 100%;
        padding: 0 20px;
      }
      .num
        margin-top 100px
        width 22px
        @media screen and (max-width: 1200px) {
          margin-top 70px
        }
      .title
        margin-top 40px
        color #2d3436
        font-size 30px
        @media screen and (max-width: 1200px) {
          margin-top 20px
          font-size 22px
          font-weight bold
        }
      .description
        margin-top 30px
        font-size 16px
        line-height 2
        color #636e72
        text-align center
        width: 80%
        @media screen and (max-width: 1200px)
          width: 100%
      .c-uls
        margin-top 30px
        display flex
        flex-direction row
        padding-bottom: 50px
        @media screen and (max-width: 1400px) {
         width 75%
        }
        @media screen and (max-width: 1200px)
          flex-direction column
          padding-bottom 50px
          margin-top 0
        li
          width 322px
          display flex
          flex-direction column
          align-items center
          @media screen and (max-width: 768px) {
            width 100%
          }
          img
            margin-top 50px
            width 113px
            height 100px
          .title
            text-align center
            height 50px
            font-size 20px
            color #0c111a
            margin-top 40px
            @media screen and (max-width: 768px) {
              margin-top 20px
            }
          .description
            color #0c111a
            font-size 16px
            @media screen and (max-width: 768px) {
              margin-top 0
            }
          &:nth-child(2)
            margin 4px 20px 0
            @media screen and (max-width: 768px) {
              margin 0
            }
            @media screen and (max-width: 768px) {
              height auto
            }
    .four-w
      display flex
      align-items center
      justify-content space-between
      position relative
      @media screen and (max-width: 1200px)
        padding: 50px 0 100px
      @media screen and (max-width: 1200px)
        padding: 20px 0 50px
      .img-w
        width 100%
        height 100%
        position: absolute
        left: 0
        top: 0
        .m-06
          display: block
          width: 100%
          height: 100%
        .pc-banner {
          display block
          width 100%
        }
      .four-flex
        display flex
        align-items center
        justify-content space-between
        width 1200px
        height: 680px
        margin: 0 auto
        position: relative
        z-index: 10
        @media screen and (max-width: 1400px)
          width: 1100px
          padding: 0 40px
        @media screen and (max-width: 1200px)
          width: 100%
          flex-direction column
          align-items center
          justify-content center
          height auto
          padding: 0 20px
        img
          display: block
      .wrap-c
        .title-w
          display: flex
          align-items center
          color #2d3436
          margin-bottom: 20px
          text-align left
          @media screen and (max-width: 1200px)
            align-items flex-start
          h3
            font-size: 30px
            @media screen and (max-width: 1200px)
              font-size: 22px
              line-height: 1
              font-weight: bold
          .icon
            margin-right: 40px
            height: 22px
            display: flex
            align-items center
            justify-content center
            @media screen and (max-width: 1200px)
              margin-right: 10px
        .four-desc
          width: 528px;
          font-size: 16px
          line-height: 2
          color #636e72
          @media screen and (max-width: 1200px)
            width: 100%
          @media screen and (max-width: 600px)
            width 100%
            font-size: 14px
      .img-earth
        display: flex
        align-items center
        justify-content center
        img
          width: 400px
          @media screen and (max-width: 1200px)
            width: 300px
            margin-top: 20px
          @media screen and (max-width: 350px)
            width: 90%
    .top-home
      &:nth-child(3) .play-btn
        @media screen and (min-width: 1900px)
          margin-top: 150px

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
      @media screen and (max-width: 800px) {
        width 90%
      }
    }
    .close {
      position: absolute;
      right: 0;
      top: -18px;
      width: 20px;
      height: 20px;
      transform: rotate(-45deg);
      -webkit-transform-origin: 30% 20%;
      -ms-transform-origin: 30% 20%;
      -moz-transform-origin: 30% 20%;
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
</style>
