<template>
  <div class="wrapper">
    <div class="wrapper-pc">
      <div class="banner banner-m-t">
        <img :src="require(`@img/gif2/tecBlock/banner_${$lang}.svg`)" alt="" class="img-c-m">
        <div class="gif">
          <img src="@img/gif2/tecBlock/tecBlock.gif" alt="" class="gif-img">
        </div>
      </div>
    </div>

    <div class="wrapper-mobile">
      <img style="width: 100%; overflow: hidden" :src="require(`@img/block/mobile_banner_${$lang}.svg`)" alt="">
    </div>

    <div class="wrapper-pc one-banner">
      <div class="banner-v-c">
        <div class="img-w">
          <img src="../assets/img/block/01BG.svg" alt="" class="banner-img" style="height: 734px">
        </div>
      </div>
      <div class="banner-wrapper one-wrapper">
        <div class="top">
          <span class="line"></span>
          <div class="num-wrapper">
            <img src="../assets/img/home/01.svg" alt="">
          </div>
          <span class="title">{{$t('tecBlock.text3')}}</span>
        </div>
        <ul>
          <li v-for="item in list" :key="item.index">
            <p class="title">{{item.title}}</p>
            <img :src="item.imgUrl" />
            <p class="description">{{item.description}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrapper-mobile wrapper-mobile-02">
      <div class="banner-wrapper-mobile">
        <div class="top">
          <span class="line"></span>
          <span class="num">
            <img src="../assets/img/home/01.svg" alt="">
          </span>
          <span class="title">{{$t('tecBlock.text3')}}</span>
        </div>
      </div>
      <div class="swiper-container">
        <div>
          <div class="item" v-for="item in list" :key="item.key">
            <p class="title">{{item.title}}</p>
            <img :src="item.imgUrl" />
            <p class="description">{{item.description}}</p>
          </div>
          <div class="bg-c-d">
            <img src="@img/home/bg_box.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-pc">
      <div class="top-wrapper">
        <div class="num">
          <img src="../assets/img/product/02.svg" alt="">
        </div>
        <p class="title">{{$t('tecBlock.text4')}}</p>
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="top-wrapper-mobile">
        <span class="line"></span>
        <span class="num">
          <img src="../assets/img/home/02.svg" alt="">
        </span>
        <p class="title">{{$t('tecBlock.text4')}}</p>
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="content-one-mobile">
        <div class="box">
          <div class="img-box">
            <img src="../assets/img/block/a.png" />
          </div>
          <div class="content-box">
            <p class="title"><img src="../assets/img/block/02-1point.svg">{{$t('tecBlock.text6')}}</p>
            <p class="description">{{$t('tecBlock.text7')}}</p>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="../assets/img/block/b.jpg" />
          </div>
          <div class="content-box">
            <p class="title"><img src="../assets/img/block/02-2point.svg">{{$t('tecBlock.text9')}}</p>
            <p class="description">{{$t('tecBlock.text10')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-pc">
      <div class="content-one">
        <div class="box">
          <div class="img-box">
            <img src="../assets/img/block/a.svg" />
          </div>
          <div class="content-box">
            <p class="title"><img src="../assets/img/block/02-1point.svg">{{$t('tecBlock.text6')}}</p>
            <p class="description">{{$t('tecBlock.text7')}}</p>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="../assets/img/block/f.png" />
          </div>
          <div class="content-box">
            <p class="title"><img src="../assets/img/block/02-2point.svg">{{$t('tecBlock.text9')}}</p>
            <p class="description">{{$t('tecBlock.text10')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="content-two-mobile">
        <p class="description a-desc">{{$t('tecBlock.text11')}}</p>
        <div class="btn-wrapper">
          <div class="btn" @click="download">{{$t('tecBlock.text12')}}</div>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="wrapper-pc">
      <div class="content-two">
        <p class="description">{{$t('tecBlock.text14')}}</p>
        <p class="description two-description">{{$t('tecBlock.text13')}}</p>
        <div class="btn-wrapper">
          <div class="btn" @click="download">{{$t('tecBlock.text12')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tecBlock",
  data() {
    return {
      swiperOptionInner: {
        autoHeight: true,
        height: 280, // 高度占满整个设备高度
        initialSlide: 1,
        slidesPerView: 'auto',
        loop: true
      },
      list: this.$t('tecBlock.list'),
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
  methods: {
    download() {
      window.open('https://isecret.im/', '_blank');
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .banner-m-t{
    position: relative;
    .gif{
      position: absolute;
      right: 500px;
      top: 50%;
      transform: translateY(-50%);
      margin-top: -100px;
      @media screen and (max-width: 1950px){
        right: 300px;
      }
      @media screen and (max-width: 1800px){
        right: 100px;
      }
      @media screen and (max-width: 1600px){
        width: 500px;
        right: 300px;
      }
      @media screen and (max-width: 1450px){
        right: 200px;
      }
    }
  }
  .swiper-slide {
    width: 50% !important;
    height: 100% !important;
    margin: 0 15% 0 23%;
    border: 1px solid #ccc;
    -moz-box-shadow: 1px 1px 3px #ccc;
    -webkit-box-shadow: 0px 0px 3px #ccc;
    box-shadow: 0px 0px 3px #ccc;
  }
  .wrapper-mobile-02
    background-color: #fafafa
    padding-top: 1px
    padding-bottom: 20px
  .img-w {
    padding 0 !important
  }
  .img-f{
    img{
      width: 100%
    }
  }
  .swiper-slide-active {
    height: 220px !important;
  }

  .swiper-slide-prev {
    right: -30%;
    margin-top: 20px;
    max-height: 200px;
    overflow: hidden;
  }

  .swiper-slide-next {
    left: -30%;
    margin-top: 20px;
    max-height: 200px;
    overflow: hidden;
  }

  .wrapper
    .wrapper-top
      .top-content
        display flex
        flex-direction column
        justify-content flex-start
        padding-left 150px
        padding-top 370px
        width 100%
        height 880px
        background url("../assets/img/block/banner.png") no-repeat
        background-position center
        background-size cover
        .subTitle
          display inline
          color #636e72
          font-weight bold
        .title
          margin-top 26px
          font-size 52px
          color #2d3436
          font-weight bold
          white-space nowrap
        .title-middle
          margin 26px 0 50px
        &.cnPcHasLetter
          letter-spacing: 20px;
        &.enPcHasLetter
          letter-spacing: 5px;
    .wrapper-top-mobile
      position relative
      width 100%
      height 334px
      background url("../assets/img/block/banner.png") no-repeat
      background-position center
      background-size contain
      .top-content
        position absolute
        display flex
        flex-direction column
        justify-content flex-start
        left 20px
        top 132px
        font-weight bold
        .subTitle
          display inline
          color #636e72
          font-size 14px
        .title
          font-weight bold
          margin-top 10px
          font-size 20px
          color #2d3436
        &.cnMobileHasLetter
          letter-spacing 3px
        &.enMobileHasLetter
          letter-spacing: 0;
          width 70%
    .one-banner {
      position relative
      width 100%
      height 734px
      background #fafafa
      /*background url("../assets/img/block/01BG.svg") no-repeat*/
    }
    .one-wrapper {
      top 0
      position absolute
      left 50%
      transform translate(-50%)
    }
    .banner-wrapper
      margin 0 auto
      padding 40px 70px
      width 1200px
      @media screen and (max-width: 1200px)
        width 100%
        padding 0 40px
      .top
        display flex
        align-items center
        margin-top 60px
        .line
          width 50px
          height 1px
          background-color #636e72
        .num-wrapper
          margin: 0 10px
          img
            display: block
          .bottom-line
            display block
            width 80px
            height 1px
            background-color #ccc
        .title
          font-size 30px
          font-weight bold
          color #2d3436
      ul
        display flex
        flex-direction row
        justify-content center
        margin 80px auto 0
        /*background url("../assets/img/block/01BG.svg") no-repeat*/
        /*width 100%*/
        /*height 734px*/
        li
          width 320px
          height 340px
          display flex
          flex-direction column
          align-items center
          -moz-box-shadow 0px 0px 3px #ccc
          -webkit-box-shadow 0px 0px 3px #ccc
          box-shadow 0px 0px 3px #ccc
          background-color #fff
          .title
            margin-top 80px
            font-size 18px
            font-weight bold
            color #2d3436
            text-align center
          img
            margin 20px 0 30px
          .description
            text-align center
            font-size 14px
            color #2d3436
            width 80%
            line-height 1.6
          &:nth-child(2)
            margin 0 60px
          &:nth-child(1)
            margin-top 40px
          &:nth-child(3)
            margin-top 40px
    .banner-wrapper-mobile
      margin-top 40px
      .top
        margin 0 30px
        display flex
        flex-direction row
        align-items center
        .line
          width 20px
          height 1px
          background-color #636e72
        .num
          margin 0 10px
          img
            display: block
        .title
          width 82%
          font-size 16px
          color #2d3436
          font-weight bold
    .swiper-container
      margin-top 50px
      position: relative
      .bg-c-d
        margin-top: -50px
        img
          width: 90%
          margin-left: 5%
      .item
        width: 80%
        margin: 0 auto
        display flex
        flex-direction column
        justify-content center
        padding-bottom 20px
        box-shadow: 0 0 5px #eee;
        margin-bottom: 30px
        background-color: #fff
        position: relative
        .title
          padding 15px 0 10px 0
          font-size 16px
          color #2d3436
          font-weight bold
          text-align center
        img
          display block
          margin 8px auto
        .description
          text-align center
          margin 0 10px
          font-size 14px
          color #2d3436
          line-height 1.6
    .top-wrapper-mobile
      margin 60px 30px 30px
      display flex
      flex-direction row
      align-items center
      .line
        display block
        width 20px
        height 1px
        background-color #636e72
      .num
        margin 0 10px
        display block
        img
          display: block
      .title
        width 75%
        font-size 16px
        color #2d3436
        font-weight bold
    .top-wrapper
      display flex
      flex-direction column
      align-items center
      height 28px
      width 1200px
      margin 90px auto 0
      .line
        display block
        width 400px
        height 1px
        background-color #636e72
      .num
        margin-bottom 40px
      .title
        font-size 28px
        font-weight bold
        margin-bottom 80px
    .content-one-mobile
      .box
        margin 0 30px 40px
        padding-bottom 20px
        -moz-box-shadow 0px 0px 3px #ccc
        -webkit-box-shadow 0px 0px 3px #ccc
        box-shadow 0px 0px 3px #ccc
        .img-box
          img
            width 100%
        .content-box
          padding 0 20px
          background-color #fff
          width 100%
          @media screen and (max-width: 1200px)
            width 100%
            padding 0 20px
          .subTitle
            padding-top 30px
            display flex
            font-size 14px
            flex-direction row
            align-items center
            .line
              height 1px
              width 4px
              background-color #ff7675
              margin-right 5px
            .text
              font-weight bold
              color #636e72
          .title
            display flex
            align-items center
            margin 18px 0 10px
            font-size 20px
            font-weight bold
            color #2d3436
            img
              margin-right 10px
          .description
            font-size 12px
            color #636e72
            line-height 1.6
          .btn
            margin-top 15px
            cursor pointer
            user-select none
            font-size 14px
            color #2d3436
            text-align center
            line-height 30px
            height 30px
            width 100px
            border .5px solid #667070
    .content-one
      margin 80px auto
      display flex
      justify-content space-between
      width 1200px
      @media screen and (max-width: 1400px)
        width 1150px
        padding 0 40px
      .box
        display flex
        flex-direction column
        margin-bottom 50px
        margin-top 80px
        -moz-box-shadow 0px 0px 3px #ccc
        -webkit-box-shadow 0px 0px 3px #ccc
        box-shadow 0px 0px 3px #ccc
        .img-box
          width 500px
        .content-box
          padding 20px 40px 50px
          background-color #fff
          width 500px
          .title
            display flex
            margin 20px 0
            font-size 20px
            font-weight bold
            color #2d3436
            img
              margin-right 10px
          .description
            font-size 16px
            color #636e72
            line-height 2
    .content-two-mobile
      margin 60px 30px
      .description
        width 95%
        font-weight bold
        font-size 20px
        color #2d3436
        line-height 1.6
      .a-desc
        color #0080f4
      .btn-wrapper
        margin-top 30px
        width 100px
        height 30px
        position relative
        .btn
          cursor pointer
          user-select none
          font-size 14px
          color #2d3436
          text-align center
          line-height 30px
          height 30px
          width 120px
          border .5px solid #0080f4
          transition: .5s;
          &:hover
            background-color: #0080f4;
            color: #fff;
        .line
          position absolute
          top 50%
          right -70px
          width 60px
          height 1px
          background-color #2d3436
    .content-two
      /*margin 260px auto*/
      /*width 1200px*/
      background #fafafa
      @media screen and (max-width: 1200px)
        width 100%
        padding 0 40px
      .description
        padding-top 120px
        width 100%
        text-align center
        font-size 40px
        color #0080f4
        line-height 1.6
        max-width 1300px
        margin: 0 auto
        padding-left: 50px
        @media screen and (max-width: 1400px)
          padding-top 80px
      .two-description
        padding-top 25px
        @media screen and (max-width: 1400px)
          padding-top 15px
      .btn-wrapper
        margin 60px auto 0
        width 200px
        height 56px
        position relative
        padding-bottom 160px
        transition: .5s;
        .btn
          cursor pointer
          user-select none
          font-size 14px
          color #2d3436
          text-align center
          line-height 56px
          height 56px
          width 200px
          border 1px solid #0080f4
          &:hover
            background-color: #0080f4;
            color: #fff;
        .line
          position absolute
          top 50%
          right -80px
          width 100px
          height 1px
          background-color #2d3436
</style>
