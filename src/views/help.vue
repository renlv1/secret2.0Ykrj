<template>
  <div class="news-w">
    <div class="wrapper-pc">
      <div class="banner" :class="{'cn-t': $lang === 'cn'}">
        <div class="link-wrapper">
          <div class="one">
            <a :title="$t('help.text9')"></a>
          </div>
          <div class="two">
            <a :title="$t('help.text10')" :href="moneyPdf" target="_blank"></a>
          </div>
          <div class="three">
            <a :title="$t('help.text11')" :href="siePdf" target="_blank"></a>
          </div>
          <div class="four">
            <a :title="$t('help.text12')"></a>
          </div>
          <div class="five">
            <a :title="$t('help.text13')" :href="googlePdf" target="_blank"></a>
          </div>
        </div>
        <div class="banner-text" :class="$lang">
          <div class="text1">OUR MISSION</div>
          <div class="text2 "><span class="blue">{{$t('banner.help.text1')}}</span><span v-show="$lang === 'es'">{{$t('banner.help.text2')}}</span></div>
          <div class="text3" ><span v-show="$lang !== 'es'">{{$t('banner.help.text2')}}</span><span v-show="$lang === 'es'">{{$t('banner.help.text3')}}</span></div>
        </div>
      </div>
    </div>

    <div class="wrapper-mobile">
      <div class="banner">
        <img :src="require(`@img/help/mobile_banner_${$lang}.svg`)" alt="">
      </div>
    </div>

    <div class="help-content">
      <div class="line"></div>
      <div class="right-help">
        <div class="title-w">
          <div class="text1">
            <div class="line-c"></div>
            GUIDE
          </div>
          <div class="text2">{{$t('help.text2')}}</div>
        </div>
        <div class="help-p">
          <div class="help-item">
            <div class="icon">
              <img src="../assets/img/help/help_2.svg" alt="">
            </div>
            <div class="input-w" :class="{'rulang': $lang === 'ru'}">
              <div class="text-c">{{$t('help.text4')}}</div>
              <div class="look"><a :href="googlePdf" target="_blank">{{$t('help.text8')}}</a></div>
            </div>
          </div>
          <div class="help-item">
            <div class="icon">
              <img src="../assets/img/help/help_6.svg" alt="">
            </div>
            <div class="input-w" :class="{'rulang': $lang === 'ru'}">
              <div class="text-c">{{$t('help.text5')}}</div>
              <div class="look"><a :href="moneyPdf" target="_blank">{{$t('help.text8')}}</a></div>
            </div>
          </div>
          <div class="help-item">
            <div class="icon">
              <img src="../assets/img/help/help_5.svg" alt="">
            </div>
            <div class="input-w" :class="{'rulang': $lang === 'ru'}">
              <div class="text-c">{{$t('help.text7')}}</div>
              <div class="look"><a :href="siePdf" target="_blank">{{$t('help.text8')}}</a></div>
            </div>
          </div>
        </div>

      </div>
      <div class="line" style="opacity: 0;"></div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      activeIndex: 0,
      totalPage: 3,
      currentPage: 1,
      googlePdf: '',
      siePdf: '',
      moneyPdf: ''
    }
  },
  created() {
    let hc = 'https://www.secretworth.com'
    if (window.localStorage.getItem('secretLang') === 'CN') {
      this.googlePdf = hc + '/pdf/google_cn.pdf'
      this.siePdf = hc + '/pdf/sieMoney_cn.pdf'
      this.moneyPdf = hc + '/pdf/money_cn.pdf'
    } else {
      this.googlePdf = hc + '/pdf/google_en.pdf'
      this.siePdf = hc + '/pdf/sieMoney_en.pdf'
      this.moneyPdf = hc + '/pdf/money_en.pdf'
    }
  }
}
</script>

<style scoped lang="stylus">
  .news-w
    overflow hidden
    .wrapper-pc
      .banner
        width: 100%
        height: 850px
        @media screen and (max-width: 1600px)
          height: 600px
        .banner-text
          &.cn,&.ko
            .text2,.text3
              font-size: 50px
          &.tha
            .text2,.text3
              font-size: 40px
          &.ep,&.ru,&.de,&.es,&.en
            top: 38%
            .text2,.text3
              letter-spacing 5px
              font-size: 34px
          &.ru
            .text1
              margin-top: -20px
          &.fra
            .text1
              margin-top: 60px
            .text2,.text3
              letter-spacing 2px
              font-size: 30px
    .banner
      position relative
      border-bottom: 1px solid #e6e4e4
      background url("../assets/img/help/bg.svg") no-repeat center / cover
      &.de
        .link-wrapper
          @media screen and (min-width: 1700px)
            right: 200px !important
      .link-wrapper
        top 120px
        width 814px
        height 545px
        position absolute
        right 460px
        background url("../assets/img/help/target2.gif") no-repeat
        @media screen and (max-width: 1930px)
          right: 150px
        @media screen and (min-width: 1360px) and (max-width: 1600px)
          top 0
          right 57px
          width 850px
        @media screen and (min-width: 1200px) and (max-width: 1360px)
          top 0
          right 0
          width 850px
        @media screen and (max-width: 1300px)
          width: 700px
          height: 467px
          -webkit-background-size: cover
          background-size: cover
          right: 50px
          top: 10px
        a
          display block
          width 100%
          height 100%
          color #900
          text-decoration none
          position relative
        .one
          position absolute
          right 180px
          top 50px
          width 128px
          height 140px
          cursor pointer
          @media screen and (max-width: 1600px)
            right 190px
            top 50px
          @media screen and (min-width: 1360px) and (max-width: 1600px)
            right 186px
          @media screen and (max-width: 1300px)
            right 150px
          a
            display block
            width 100%
            height 100%
            color #900
            text-decoration none
            position relative
        .two
          position absolute
          right: 486px;
          top 60px
          width 155px
          height 140px
          cursor pointer
          @media screen and (max-width: 1600px)
            right 500px
          @media screen and (min-width: 1360px) and (max-width: 1600px)
            right 520px
          @media screen and (max-width: 1300px)
            right: 402px;
            top: 45px
          a
            display block
            width 100%
            height 100%
            color #900
            text-decoration none
            position relative
        .three
          position absolute
          right 0
          top 286px
          width 128px
          height 140px
          cursor pointer
          @media screen and (max-width: 1300px)
            top: 239px;
          a
            display block
            width 100%
            height 100%
            color #900
            text-decoration none
            position relative
        .four
          position absolute
          top 370px
          right 514px
          width 120px
          height 108px
          cursor pointer
          @media screen and (max-width: 1600px)
            right 540px
          @media screen and (max-width: 1300px)
            right: 443px;
            top: 312px;
          a
            display block
            width 100%
            height 100%
            color #900
            text-decoration none
            position relative
        .five
          position absolute
          top 423px
          right 190px
          width 110px
          height 120px
          cursor pointer
          @media screen and (max-width: 1600px)
            right 210px
          @media screen and (max-width: 1300px)
            top: 358px;
            right: 160px;
          a
            display block
            width 100%
            height 100%
            color #900
            text-decoration none
            position relative
    .banner-v-c
      .en-text
        font-size: 52px
        letter-spacing 8px
        @media screen and (max-width: 1200px)
          font-size: 16px
          letter-spacing 0 !important
    .help-content
      display: flex
      padding-top: 80px
      @media screen and (max-width: 1200px)
        padding: 30px 10px
      .line
        width: 400px
        margin-top: 31px
        border-top: 1px solid #636e72
        @media screen and (max-width: 1300px)
          width: 100px
        @media screen and (max-width: 1200px)
          display: none
        @media screen and (min-width: 1200px)
          display: block
      .right-help
        padding-right: 20px
        flex 1
        .title-w
          display: flex
          align-items center
          margin-bottom: 50px
          @media screen and (max-width: 1200px)
            margin-bottom: 20px
          .text1
            font-size: 30px
            color #636e72
            @media screen and (max-width: 1200px)
              display: flex
              align-items center
              font-size: 20px
            .line-c
              width: 30px
              border-top: 1px solid #636e72
              margin-right: 10px
              @media screen and (max-width: 1200px)
                display: block
              @media screen and (min-width: 1200px)
                display: none
          .text2
            margin-left: 42px
            font-size: 48px
            font-weight: bold
            color #2d3436
            @media screen and (max-width: 1200px)
              font-size: 18px
              font-weight normal
        .help-p
          margin-bottom: 148px
          width: 1200px
          margin-left: 139px
          @media screen and (max-width: 1420px)
            margin-left: 0
          @media screen and (max-width: 1300px)
            width: 100%
            flex 1
          @media screen and (max-width: 1200px)
            margin-bottom: 50px
          .help-item
            display: flex
            align-items center
            &:nth-child(odd) .input-w
              background-color: #f4f5f6
            &:nth-child(even) .input-w
              background-color: #fff
            .icon
              margin-right: 30px
              @media screen and (max-width: 1200px)
                margin-right: 10px
                img
                  width: 30px
            .input-w
              flex 1
              height: 80px
              display: flex
              align-items center
              justify-content space-between
              padding: 0 20px
              color #636e72
              cursor pointer
              @media screen and (max-width: 1200px)
                flex 1
                height: 60px
                padding: 0 10px
                &.rulang
                  height 110px
              .text-c
                font-size: 18px
                @media screen and (max-width: 1200px)
                  font-size: 14px
              .look
                line-height: 2
                padding-left: 30px
                border-bottom: 1px solid #2d3436
                @media screen and (max-width: 1200px)
                  padding-left: 10px
                  font-size: 14px
                  white-space nowrap
                a
                  white-space nowrap
</style>

