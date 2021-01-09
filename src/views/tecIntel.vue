<template>
  <div class="wrapper">
<!--    不要-->
    <div class="wrapper-pc">
      <div class="wrapper-top">
        <div class="top-content" :class="[$lang !== 'cn' ? 'enPcHasLetter': 'cnPcHasLetter']">
          <span class="subTitle">OUR MISSION</span>
          <span class="title title-middle">{{$t('tecIntel.text1')}}</span>
          <span class="title">{{$t('tecIntel.text1a')}}</span>
        </div>
      </div>
    </div>
    <div class="wrapper-mobile">
      <img :src="require(`@img/intel/mobile_banner_${$lang}.svg`)" alt="">
    </div>
    <div class="wrapper-mobile">
      <div class="banner-wrapper-mobile">
        <div class="top">
          <div class="line"></div>
          <div class="num"></div>
          <div class="title">{{$t('tecIntel.text3')}}</div>
        </div>
        <div class="ul-wrapper">
          <ul>
            <li v-for="item in list" :key="item.index">
              <span class="title">{{item.title}}</span>
              <img :src="item.picUrl" />
              <p class="description">{{item.description}}</p>
            </li>
          </ul>
          <div class="banner-bg"></div>
        </div>
      </div>
    </div>
    <div class="wrapper-pc">
      <div class="banner-wrapper">
        <div class="top">
          <div class="line"></div>
          <div class="num"></div>
          <div class="title">{{$t('tecIntel.text3')}}</div>
        </div>
        <div class="ul-wrapper">
          <ul>
            <li v-for="item in list" :key="item.index">
              <span class="title">{{item.title}}</span>
              <img :src="item.picUrl" />
              <p class="description">{{item.description}}</p>
            </li>
          </ul>
          <div class="banner-bg"></div>
        </div>
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="top-mobile">
        <span class="line"></span>
        <span class="num"></span>
        <p class="title">{{$t('tecIntel.text4')}}</p>
      </div>
    </div>
    <div class="wrapper-pc">
      <div class="top">
        <span class="line"></span>
        <span class="num"></span>
        <p class="title">{{$t('tecIntel.text4')}}</p>
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="content-one-mobile">
        <div class="box">
          <div class="img-box">
            <img src="../assets/img/intel/a.png" />
          </div>
          <div class="content-box">
            <p class="title">{{$t('tecIntel.text6')}}</p>
            <p class="description">{{$t('tecIntel.text7')}}</p>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="../assets/img/intel/b.png" />
          </div>
          <div class="content-box">
            <p class="title">{{$t('tecIntel.text9')}}</p>
            <p class="description">{{$t('tecIntel.text10')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-pc">
      <div class="content-one">
        <div class="box">
          <div class="img-box">
            <img src="../assets/img/intel/a.png" />
          </div>
          <div class="content-box">
            <p class="title">{{$t('tecIntel.text6')}}</p>
            <p class="description">{{$t('tecIntel.text7')}}</p>
          </div>
        </div>
        <div class="box">
          <div class="content-box">
            <p class="title">{{$t('tecIntel.text9')}}</p>
            <p class="description">{{$t('tecIntel.text10')}}</p>
          </div>
          <div class="img-box">
            <img src="../assets/img/intel/b.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="content-two-mobile">
        <p class="description">{{$t('tecIntel.text11')}}</p>
        <div class="btn-wrapper">
          <div class="btn" @click="join">{{$t('tecIntel.text12')}}</div>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="wrapper-pc">
      <div class="content-two">
        <p class="description">{{$t('tecIntel.text11')}}</p>
        <div class="btn-wrapper">
          <div class="btn" @click="join">{{$t('tecIntel.text12')}}</div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tecIntel",
  data() {
    return {
      list: this.$t('tecIntel.list'),
    }
  },
  created() {
  },
  methods: {
    download() {
      window.open('https://isecret.im/', '_blank');
    },
    join() {
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrapper
    .wrapper-top
      position relative
      width 100%
      height 880px
      background url("../assets/img/intel/banner.png") no-repeat
      background-position center
      background-size cover
      .top-content
        position absolute
        display flex
        flex-direction column
        justify-content flex-start
        left 150px
        top 260px
        .subTitle
          font-weight bold
          display inline
          color #636e72
        .title-middle
          margin 26px 0 5px
        .title
          font-weight bold
          font-size 52px
          color #2d3436
        &.cnPcHasLetter
          letter-spacing: 20px;
        &.enPcHasLetter
          letter-spacing: 8px;
    .wrapper-top-mobile
      position relative
      width 100%
      height 334px
      background url("../assets/img/intel/banner.png") no-repeat
      background-position center
      background-size contain
      .top-content
        position absolute
        display flex
        flex-direction column
        justify-content flex-start
        left 30px
        top 108px
        .subTitle
          display inline
          font-weight bold
          color #636e72
          font-size 12px
        .title-middle
          margin 7px 0 10px
        .title
          font-weight bold
          font-size 20px
          color #2d3436
        &.cnMobileHasLetter
          letter-spacing 3px
        &.enMobileHasLetter
          letter-spacing: 0;
          width 70%
    .banner-wrapper-mobile
      margin 0 30px 0
      .top
        display flex
        flex-direction row
        align-items center
        .line
          margin-bottom 8px
          width 20px
          height 1px
          background-color #636e72
        .num
          margin 0 10px
          display block
          background url("../assets/img/product/01.svg") no-repeat
          width 18px
          height 14px
          background-size 18px 14px
          padding-bottom 20px
        .title
          width 75%
          margin-bottom 5px
          font-size 16px
          color #2d3436
          font-weight bold
      .ul-wrapper
        position relative
        height auto
        z-index 2
        ul
          margin-top 50px
          display flex
          flex-direction row
          justify-content space-between
          flex-wrap wrap
          li
            width 46%
            margin-bottom 20px
            padding-bottom 10px
            display flex
            flex-direction column
            align-items center
            -moz-box-shadow 0px 0px 3px #ccc
            -webkit-box-shadow 0px 0px 3px #ccc
            box-shadow 0px 0px 3px #ccc
            background-color #fff
            .title
              margin-top 40px
              font-size 18px
              font-weight bold
              color #2d3436
              text-align center
            img
              display block
              margin 15px auto 20px
              width 50%
              @media (max-width: 767px) {
                width 30%
              }
            .description
              text-align center
              font-size 14px
              color #2d3436
              width 80%
              line-height 1.6

        .banner-bg
          z-index -1
          position absolute
          width 80%
          height 70px
          background url("../assets/img/product/bg.png") no-repeat
          background-size cover
          right 10%
          bottom -20px
    .banner-wrapper
      margin 100px auto
      padding 40px 70px
      width 1400px
      @media screen and (max-width: 1400px)
        width 100%
        padding 0 40px
      .top
        display flex
        flex-direction row
        align-items center
        .line
          width 100px
          height 1px
          background-color #636e72
        .num
          display block
          background url("../assets/img/product/01.svg") no-repeat
          width 24px
          height 16px
          background-size 24px 16px
          padding-bottom 20px
          margin 0 20px
        .title
          margin-bottom 5px
          font-size 28px
          font-weight bold
          color #2d3436
      .ul-wrapper
        position relative
        height auto
        z-index 2
        ul
          margin-top 124px
          display flex
          flex-direction row
          justify-content center
          flex-wrap wrap
          li
            width 320px
            height 400px
            margin-bottom 60px
            display flex
            flex-direction column
            align-items center
            -moz-box-shadow 0px 0px 3px #ccc
            -webkit-box-shadow 0px 0px 3px #ccc
            box-shadow 0px 0px 3px #ccc
            background-color #fff
            &:nth-child(2), &:nth-child(5)
              margin -30px 60px 0 60px
            .title
              margin-top 80px
              font-size 18px
              font-weight bold
              color #2d3436
              text-align center
            img
              margin 50px 0 120px
            .description
              text-align center
              font-size 14px
              color #2d3436
              width 80%
              line-height 1.6

        .banner-bg
          z-index -1
          position absolute
          width 630px
          height 140px
          background url("../assets/img/product/bg.png") no-repeat
          background-size 630px 140px
          right -20px
          bottom -5px
    .top-mobile
      display flex
      flex-direction row
      align-items center
      margin 60px 0 30px 30px
      .line
        margin-bottom 8px
        width 20px
        height 1px
        background-color #636e72
      .num
        margin 0 10px
        display block
        background url("../assets/img/product/02.svg") no-repeat
        width 18px
        height 14px
        background-size 18px 14px
        padding-bottom 20px
      .title
        width 75%
        margin-bottom 5px
        font-size 16px
        color #2d3436
        font-weight bold
    .top
      display flex
      flex-direction row
      align-items center
      height 28px
      .line
        display block
        width 400px
        height 1px
        background-color #636e72
      .num
        display block
        background url("../assets/img/product/02.svg") no-repeat
        width 24px
        height 16px
        background-size 24px 16px
        margin 0 20px
      .title
        font-size 28px
        font-weight bold
        margin-bottom 5px
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
            margin 18px 0 10px
            font-size 20px
            font-weight bold
            color #2d3436
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
      width 1400px
      @media screen and (max-width: 1400px)
        width 100%
        padding 0 40px
      .box
        display flex
        flex-direction row
        margin-bottom 155px
        .img-box
          width 670px
        .content-box
          padding 0 40px
          height 384px
          background-color #fff
          width 670px
          -moz-box-shadow 0px 0px 3px #ccc
          -webkit-box-shadow 0px 0px 3px #ccc
          box-shadow 0px 0px 3px #ccc
          .title
            margin 40px 0
            font-size 38px
            font-weight bold
            color #2d3436
          .description
            font-size 14px
            color #636e72
            line-height 1.6
    .content-two-mobile
      margin 60px 30px
      .description
        width 95%
        font-weight bold
        font-size 20px
        color #2d3436
        line-height 1.6
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
          width 100px
          border .5px solid #667070
        .line
          position absolute
          top 50%
          right -45px
          width 60px
          height 1px
          background-color #2d3436
    .content-two
      margin 260px auto
      width 1400px
      @media screen and (max-width: 1400px)
        width 100%
        padding 0 40px
      .description
        width 90%
        font-weight bold
        font-size 38px
        color #2d3436
        line-height 1.6
      .btn-wrapper
        margin-top 30px
        width 200px
        height 56px
        position relative
        .btn
          cursor pointer
          user-select none
          font-size 16px
          color #2d3436
          text-align center
          line-height 56px
          height 56px
          width 200px
          border .5px solid #667070
        .line
          position absolute
          top 50%
          right -80px
          width 100px
          height 1px
          background-color #2d3436
</style>
