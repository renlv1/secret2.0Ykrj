<template>
  <div class="trading-center-w">
    <div class="wrapper-pc">
      <div class="banner banner-m-t" :class="{'cn-t': $lang === 'cn'}">
        <img :src="require(`@img/gif2/tradingCenter/banner.svg`)" alt="" class="img-c-m">
        <div class="banner-text" :class="$lang">
          <div class="text1">OUR MISSION</div>
          <div class="text2">{{$t('banner.tradingCenter.text1')}}<span class="blue">{{$t('banner.tradingCenter.text2')}}</span></div>
          <div class="text3">{{$t('banner.tradingCenter.text3')}}</div>
          <a class="text2-m-c text2-m-c2" href="https://kleingame.ai/#/newExchange" target="_blank">{{$t('tradingCenter.text2')}}</a>
          <div class="gif-t">
            <img src="@img/gif2/tradingCenter/tradingCenter.gif" alt="" >
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="banner">
        <img :src="require(`@img/tradingCenter/mobile_banner_${$lang}.svg`)" alt="">
        <div class="">
          <a class="text2-m-c btn-trad trade-btn"
             :class="{'delang-m-c': $lang === 'de' || $lang === 'jn'}"
             href="https://kleingame.ai/#/newExchange" target="_blank" >{{$t('tradingCenter.text2')}}</a>
        </div>
      </div>
    </div>
    <div class="section">
    <div class="sie-w">
      <div class="sie-mc-c wrap-v-c">
        <div class="left-t">
          <div class="icon-w">
            <img src="../assets/img/borderNumber/01.svg" alt="">
          </div>
          <div class="sie-title title-c-v">{{$t('tradingCenter.text3')}}</div>
          <div class="sie-text1">{{$t('tradingCenter.text4')}}</div>
          <div class="sie-text2">{{$t('tradingCenter.text5')}}</div>
          <div class="supera-bg">SUPER</div>
        </div>
        <div class="right-t">
          <div class="sie-img-item a-tim">
            <div class="img-t"><img src="../assets/img/tradingCenter/sie-1.svg" alt=""></div>
            <p>{{$t('tradingCenter.text6')}}</p>
          </div>
          <div class="sie-img-item">
            <div class="img-t"><img src="../assets/img/tradingCenter/sie-2.svg" alt=""></div>
            <p>{{$t('tradingCenter.text7')}}</p>
          </div>
        </div>
      </div>
      <!-- <div class="bg-sie">
        <div class="super-bg">SUPER</div>
        <div class="secret-bg">SECRET</div>
      </div> -->
    </div>
    <div class="tangguo-c wrap-v-c">
      <div class="tangguo-img">
        <img src="@img/gif2/tradingCenter/tangguo.gif" alt="">
      </div>
      <div class="right-t">
        <div class="icon-w">
          <img src="../assets/img/borderNumber/02.svg" alt="">
        </div>
        <p class="title-p title-c-v">{{$t('tradingCenter.text32')}}</p>
        <p class="super-t">{{$t('tradingCenter.text33')}}</p>
      </div>
    </div>
    <div class="tangguo-c-mobile">
      <div class="right-t">
        <div class="icon-w">
          <img src="../assets/img/borderNumber/02.svg" alt="">
        </div>
        <p class="title-p title-c-v">{{$t('tradingCenter.text32')}}</p>
        <p class="super-t">{{$t('tradingCenter.text33')}}</p>
<!--        <div class="btn-trad">-->
<!--          <a href="https://kleingame.ai/#/newExchange" target="_blank">{{$t('tradingCenter.text2')}}</a>-->
<!--        </div>-->
      </div>
      <div class="tangguo-img">
        <img src="@img/gif2/tradingCenter/tangguo.gif" alt="">
      </div>
    </div>
    </div>
<!--    政策-->
    <div class="policy-w">
      <div class="policy-w-title">
        <div class="line-c"></div>
        <div class="c-m-t">
          <img style="margin: 0 20px 0 10px;vertical-align:middle" src="@com/03.svg" alt="">
          <p class="policy-title title-c-v">{{$t('tradingCenter.text8')}}</p>
        </div>
        <div class="line-c" style="opacity: 0;"></div>
      </div>
      <div class="right-c">
        <div class="input-item" @click="moreFn(0)">
          <div class="left">
            <span class="left-text1" :class="{'delang': $lang === 'de'}">{{$t('tradingCenter.text9')}}</span>
            <span class="left-text2">{{$t('tradingCenter.text10')}}</span>
          </div>
          <div class="more">{{$t('news.text9')}}</div>
        </div>
        <div class="input-item"  @click="moreFn(1)">
          <div class="left">
            <span class="left-text1" :class="{'delang': $lang === 'de'}">{{$t('tradingCenter.text13')}}</span>
            <span class="left-text2">{{$t('tradingCenter.text14')}}</span>
          </div>
          <div class="more">{{$t('news.text9')}}</div>
        </div>
        <div class="input-item"  @click="moreFn(2)">
          <div class="left">
            <span class="left-text1" :class="{'delang': $lang === 'de'}">{{$t('tradingCenter.text17')}}</span>
            <span class="left-text2">{{$t('tradingCenter.text18')}}</span>
          </div>
          <div class="more">{{$t('news.text9')}}</div>
        </div>
<!--        <div class="input-item" @click="moreFn(3)">-->
<!--          <div class="left">-->
<!--            <span class="left-text1">{{$t('tradingCenter.text24')}}</span>-->
<!--            <span class="left-text2">{{$t('tradingCenter.text25')}}</span>-->
<!--          </div>-->
<!--          <div class="more">{{$t('news.text9')}}</div>-->
<!--        </div>-->
        <ul class="uls">
          <li class="list-t" :class="{'rulang': $lang === 'ru'}">
            <div><img src="../assets/img/tradingCenter/01.svg" alt=""></div>
            <div class="t-c">{{$t('tradingCenter.text28')}}</div>
          </li>
          <li class="list-t" :class="{'rulang': $lang === 'ru'}">
            <div><img src="../assets/img/tradingCenter/02.svg" alt=""></div>
            <div class="t-c">{{$t('tradingCenter.text29')}}</div>
          </li>
          <li class="list-t" :class="{'rulang': $lang === 'ru'}">
            <div><img src="../assets/img/tradingCenter/03.svg" alt=""></div>
            <div class="t-c">{{$t('tradingCenter.text30')}}</div>
          </li>
          <li class="list-t" :class="{'rulang': $lang === 'ru'}">
            <div><img src="../assets/img/tradingCenter/04.svg" alt=""></div>
            <div class="t-c">{{$t('tradingCenter.text31')}}</div>
          </li>
        </ul>
      </div>
    </div>
    <transition name="safeDialog">
      <div class="dialog-w dialog-safe-w" v-show="visible">
        <div class="dialog-safe">
          <div class="close" @click="visible = false">
            <div class="close-icon">
              <img src="../assets/img/common/nav_close.svg" alt="">
            </div>
          </div>
          <div class="c-title">{{dialogData.text1}}</div>
          <p class="p-text">{{dialogData.text2}}</p>
          <p class="p-text">{{dialogData.text3}}</p>
          <p class="p-text">{{dialogData.text4}}</p>
          <p class="p-text">{{dialogData.text5}}</p>
          <div class="h-a" v-show="isSHow1"></div>
          <p class="p-text">{{dialogData.text6}}</p>
          <p class="p-text">{{dialogData.text7}}</p>
          <p class="p-text">{{dialogData.text8}}</p>
          <p class="p-text">{{dialogData.text9}}</p>
          <div class="h-a" v-show="isSHow1"></div>
          <p class="p-text">{{dialogData.text10}}</p>
          <p class="p-text">{{dialogData.text11}}</p>
          <p class="p-text">{{dialogData.text12}}</p>
          <p class="p-text">{{dialogData.text13}}</p>
          <div class="h-a" v-show="isSHow1"></div>
          <div class="p-text">{{dialogData.text16}}</div>
          <p class="p-text">{{dialogData.text14}}</p>
          <p class="p-text">{{dialogData.text15}}</p>
          <div class="btn-a" @click="visible = false">{{$t('header.text18')}}</div>
          <div class="m-c"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
        visible: false,
        dialogData: '',
        isSHow1: false
      }
		},
    methods: {
      okCallback () {
        this.visible = false
      },
      moreFn (index) {
        this.visible = true
        this.isSHow1 = false
        let obj = {}
        if (index === 0) {
          obj.text1 = this.$t('tradingCenter.text9')
          // obj.text2 = this.$t('tradingCenter.text10')
          obj.text3 = this.$t('tradingCenter.text11')
          obj.text4 = this.$t('tradingCenter.text12')
        } else if (index === 1) {
          this.isSHow1 = true
          obj.text1 = this.$t('tradingCenter.text13')
          // obj.text2 = this.$t('tradingCenter.text14')
          obj.text3 = this.$t('tradingCenter.text15')
          obj.text4 = this.$t('tradingCenter.text16')
          obj.text5 = this.$t('tradingCenter.text16_0')
          obj.text6 = this.$t('tradingCenter.text16_1')
          obj.text7 = this.$t('tradingCenter.text16_2')
          obj.text8 = this.$t('tradingCenter.text16_3')
          obj.text9 = this.$t('tradingCenter.text16_4')
          obj.text10 = this.$t('tradingCenter.text16_5')
          obj.text11 = this.$t('tradingCenter.text16_6')
          obj.text12 = this.$t('tradingCenter.text16_7')
          obj.text13 = this.$t('tradingCenter.text16_8')
          obj.text14 = this.$t('tradingCenter.text16_9')
          obj.text16 = this.$t('tradingCenter.text16_10')
        } else if (index === 2) {
          obj.text1 = this.$t('tradingCenter.text17')
          // obj.text2 = this.$t('tradingCenter.text18')
          obj.text3 = this.$t('tradingCenter.obj.text1')
          obj.text4 = this.$t('tradingCenter.obj.text2')
          obj.text5 = this.$t('tradingCenter.obj.text3')
          obj.text6 = this.$t('tradingCenter.obj.text4')
          obj.text7 = this.$t('tradingCenter.obj.text5')
          obj.text8 = this.$t('tradingCenter.obj.text6')
          obj.text9 = this.$t('tradingCenter.obj.text7')
        } else if (index === 3) {
          obj.text1 = this.$t('tradingCenter.text24')
          obj.text2 = this.$t('tradingCenter.text25')
          obj.text3 = this.$t('tradingCenter.text26')
          obj.text4 = this.$t('tradingCenter.text27')
        }
        this.dialogData = obj
      }
    }
	}
</script>

<style scoped lang="stylus">
  .banner-m-t{
    position: relative;
    .banner-text{
      &.de{
        .text1{
          margin-top: 100px
        }
        .text2,.text3 {
          font-size: 24px
          letter-spacing 5px
        }
      }
      &.ep,&.ru,&.tha,&.es{
        .text1{
          margin-top: 100px
        }
        .text2,.text3 {
          font-size: 32px
        }
      }
      &.fra{
        .text2,.text3 {
          font-size: 32px
        }
        .text2-m-c2{
          font-size: 18px
        }
      }
    }
    .gif{
      position: absolute;
      right: 300px;
      top: 50%;
      transform: translateY(-50%);
      margin-top: -50px;
      @media screen and (max-width: 1950px){
        right: 200px;
      }
      @media screen and (max-width: 1800px){
        right: 100px;
      }
      @media screen and (max-width: 1600px){
        width: 600px;
        right: 200px;
      }
      @media screen and (max-width: 1500px){
        right: 50px;
      }
    }
  }
  .banner
    overflow hidden
    position: relative
    .btn-trad
      width: 250px
      height: 60px
      border: 2px solid #636e72
      display: flex
      align-items center
      justify-content center
      font-size: 14px
      color #636e72
      cursor pointer
      position: relative
      @media screen and (max-width: 1200px)
        border: 1px solid #0080f4
        width: 100px
        height: 35px
    .text2-m-c
      position: absolute
      left: 10%
      bottom: 30%
      width: 250px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      border: 1px solid #357eec;
      color: #000;
      cursor: pointer;
      text-align: center
      transition: all 0.4s linear;
      &.text2-m-c2
        position: static
        font-size: 24px
        margin-top: 50px
      &:hover
        background-color: #357eec;
        color: #fff;
      @media screen and (max-width: 1200px)
        width: 130px
        height: 36px
        bottom: 10px
        left: 20px
        @media screen and (max-width: 321px)
          width: 130px
          height: 36px
          bottom: 3px
          left: 20px
      &.delang-m-c
        @media screen and (max-width: 1200px)
          width: 160px
    img
      width 100%
  .cnPcHasLetter
    letter-spacing: 20px !important;
  .enPcHasLetter
    letter-spacing: 3px !important;
.trading-center-w
  .h-a
    height: 20px
  .text2-mobile
    font-size: 16px;
    font-weight: bold
    letter-spacing: 0;
    @media screen and (max-width: 1200px)
      display: block
    @media screen and (min-width: 1200px)
      display: none
  .text2-mobile2
    margin-bottom: 10px
  .text2-pc
    @media screen and (max-width: 1200px)
      display: none
    @media screen and (min-width: 1200px)
      display: block
  .title-c-v
    font-size: 30px
    @media screen and (max-width: 1200px)
      font-size: 20px
  .section
    @media screen and (max-width: 1200px)
      background #fafafa
    @media screen and (min-width: 1200px)
      background #fafafa url(../assets/img/tradingCenter/bg.svg) center top no-repeat / cover
  .sie-w
    position: relative
    z-index: 50
    padding-top: 44px
    overflow: hidden
    @media screen and (min-width: 1200px) and (max-width: 1400px)
      margin 0 auto
      width 1100px
      padding: 50px 0
    .supera-bg
      position: absolute
      top: -20px
      left: -20px
      font-size: 50px
      color #EDF0F2
      @media screen and (min-width: 1200px)
        display: none
      @media screen and (max-width: 1200px)
        display: block
      @media screen and (max-width: 750px)
        left: 5px
    .sie-mc-c
      display: flex
      align-items center
      justify-content center
      @media screen and (max-width: 1200px)
        flex-direction column
        padding: 0 20px
      img
        display: block
    .right-t
      display: flex
      align-items center
      @media screen and (max-width: 1400px)
        width 70%
      @media screen and (max-width: 1200px)
        width: 100%
        margin-top: 30px
    .left-t
      width: 736px
      position: relative
      z-index: 10
      @media screen and (max-width: 1200px)
        width: 100%
        // padding: 0 15px
    .icon-w
      position: relative
      z-index: 10
    .sie-title
      color #2d3436
      font-weight: bold
      margin: 40px 0 31px
      @media screen and (max-width: 1200px)
        margin: 10px 0
    .sie-text1
      font-size: 16px
      color #636e72
      margin: 31px 0 31px
      line-height: 2
    .sie-text2
      line-height: 2
      font-size: 16px
      color #636e72
    .sie-img-item
      position: relative
      z-index: 10
      font-size: 14px
      color #636e72
      text-align: center
      @media screen and (max-width: 1200px)
        flex 1
      .img-t
        margin: 0 auto 30px
        display: flex
        align-items center
        justify-content center
        @media screen and (max-width: 1200px)
          img
            height: 60px
    .a-tim
      margin: 0 108px 0 151px;
      @media screen and (max-width: 1200px)
        margin: 0
    .bg-sie
      position: absolute
      left: 0
      top: 0
      padding-left: 10%
      @media screen and (max-width: 1500px)
        padding-left: 50px
        top: 50px
      @media screen and (max-width: 1200px)
        padding-left: 10px
        top: 45px
      .super-bg
        font-size: 300px
        font-weight: bold
        letter-spacing 20px
        color #F9FAFB
        @media screen and (max-width: 1500px)
          font-size: 200px
        @media screen and (max-width: 1200px)
          font-size: 50px
          color #EFF2F4
      .secret-bg
        font-size: 300px
        font-weight: bold
        letter-spacing 20px
        color #F9FAFB
        @media screen and (max-width: 1500px)
          font-size: 200px
        @media screen and (max-width: 1200px)
          font-size: 50px
          color #EFF2F4
          margin-top: 24px
  .tangguo-img img
    width: 550px
  .tangguo-c
    display: flex
    align-items center
    justify-content center
    padding: 90px 20px 20px 20px
    @media screen and (max-width: 1200px)
      display: none
    @media screen and (min-width: 1200px)
      display: flex
    .right-t
      margin-left: 137px
      //.icon-w
        //display: inline-block;
        //padding-bottom: 10px
        //border-bottom: 2px solid #000
      .title-p
        color #2d3436
        margin-top: 40px
        font-weight: bold
      .super-t
        font-size: 16px
        color #636e72
        line-height: 2
        margin: 30px 0 30px
      .btn-trad
        width: 250px
        height: 60px
        border: 2px solid #636e72
        display: flex
        align-items center
        justify-content center
        font-size: 14px
        color #636e72
        cursor pointer
        position: relative
        &::before
          content ''
          position: absolute
          width: 100px
          height: 2px
          background-color: #636e72
          right: -50px
          top: 50%
          transform translateY(-50%)
  .tangguo-c-mobile
    padding: 20px
    @media screen and (max-width: 1200px)
      display: block
    @media screen and (min-width: 1200px)
      display: none
    .tangguo-img
      width: 100%
      img
        display: block
        @media screen and (max-width: 800px)
          width: 100%
    .right-t
      margin: 0 auto 30px
      .icon-w
        display: block
        img
          display: block
      .title-p
        color #2d3436
        margin-top: 15px
        font-weight: bold
      .super-t
        font-size: 14px
        color #636e72
        line-height: 2
        margin: 40px 0 30px
      .btn-trad
        width: 250px
        height: 60px
        border: 2px solid #636e72
        display: flex
        align-items center
        justify-content center
        font-size: 14px
        color #636e72
        cursor pointer
        position: relative
        @media screen and (max-width: 1200px)
          width: 160px
          height: 46px
        &::before
          content ''
          position: absolute
          width: 100px
          height: 2px
          background-color: #636e72
          right: -50px
          top: 50%
          transform translateY(-50%)
          @media screen and (max-width: 1200px)
            width: 50px
            right: -25px
  .policy-w
    padding-top 100px
    @media screen and (max-width: 1200px)
      padding: 20px 10px
    .policy-w-title
      display: flex
      align-items center
      .line-c
        border-top: 1px solid #2d3436
        flex 1
      @media screen and (max-width: 1200px)
        flex-direction column
        align-items flex-start
        padding-left: 10px
      .c-m-t
        width: 1200px
        display: flex
        align-items center
        @media screen and (max-width: 1400px)
          width: 1000px
        @media screen and (max-width: 1200px)
          width: 100%
          flex-direction column
          align-items flex-start
          .title-c-v
            margin-top: 15px
      .policy-title
        color #2d3436
      .line
        width: 400px
        border-top: 1px solid #2d3436
        margin-right: 20px
        display: block
        @media screen and (max-width: 1600px)
          width: 260px
        @media screen and (max-width: 1200px)
          width: 50px
          display: none
          margin-right: 10px
      img
        @media screen and (max-width: 1200px)
          margin: 0 10px 0 0 !important
    .right-c
      margin: 45px auto 120px
      width: 1200px
      @media screen and (max-width: 1400px)
        width 1000px
      @media screen and (max-width: 1200px)
        width: 100%
        margin: 20px 0
      .input-item
        width: 100%
        height: 100px
        padding: 0 25px
        color #636e72
        display: flex
        align-items center
        justify-content space-between
        cursor pointer
        @media screen and (max-width: 1200px)
          height: 60px
          padding: 0 10px
        &:nth-child(odd)
          background-color: #f4f5f6
        &:nth-child(even)
          background-color: #fff
        .left
          display flex
          flex-direction row
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          @media screen and (max-width: 1200px)
            padding-right: 10px
          .left-text1
            margin-right 10px
            width 220px
            display block
            font-size: 18px
            &.delang{
              @media screen and (max-width: 1200px){
                margin-right: 25px
              }
            }
            @media screen and (max-width: 1200px)
              font-size: 14px
              width: 150px
              margin-right: 15px
          .left-text2
            flex 1
            font-size: 14px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            @media screen and (max-width: 1200px)
              font-size: 12px
              padding-right: 10px
        .more
          font-size: 12px
          padding-left: 40px
          line-height: 2
          color #636e72
          border-bottom: 1px solid #2d3436
          white-space nowrap
          @media screen and (max-width: 1200px)
            padding-left: 10px
      .uls
        display: flex
        // align-items center
        justify-content space-between
        margin-top: 58px
        @media screen and (max-width: 1200px)
          margin-top: 20px
          padding: 0 15px
          overflow-y auto
        @media screen and (max-width: 330px)
          padding: 0
        .list-t
          display flex
          flex-direction column
          align-items center
          &.rulang{
            @media screen and (max-width: 500px){
              margin-right 10px
            }
          }
          @media screen and (max-width: 1200px)
            img
              height: 50px
          .t-c
            margin-top: 18px
            font-size: 14px
            text-align: center
            color #636e72
            word-break break-all
            @media screen and (max-width: 1200px)
              margin-top: 8px
  .dialog-safe-w
    display: flex
    align-items center
    justify-content center
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom:0
    width: 100%
    height: 100%
    z-index: 200
    color #000
    background-color: rgba(0,0,0,.4)
    &.safeDialog-enter, &.safeDialog-leave-to
      opacity: 0;
      .dialog-safe
        transform: translate(0, -5%)
    &.safeDialog-enter-active
      transition: .3s;
      .dialog-safe
        transition: .3s
    &.safeDialog-leave-active
      transition: .1s;
      .dialog-safe
        transition: .1s
    .dialog-safe
      width: 700px
      background-color: #fff
      position: relative
      border-radius 4px
      color #17161f
      transform: translate(0, 0)
      padding: 50px
      max-height 550px
      overflow auto
      @media screen and (max-width: 1200px)
        width: 90%
        padding: 50px 20px 0
        max-height 400px
      .close
        position: absolute
        right: 0
        top: 0
        cursor pointer
        padding: 30px 40px
        @media screen and (max-width: 1200px)
          padding: 20px
      .p-text
        font-size: 16px
        color #2d3436
        line-height: 2
        @media screen and (max-width: 1200px)
          font-size: 12px
      .c-title
        font-size: 20px
        color #2d3436
        text-align: center
        margin-bottom: 30px
        font-weight: bold
      .btn-a
        width: 100%
        height: 60px
        display: flex
        align-items center
        justify-content center
        font-size: 14px
        border: 1px solid #636e72
        margin-top: 40px
        color #636e72
        cursor pointer
        @media screen and (max-width: 1200px)
          margin-top: 30px
          height: 46px
      .m-c
        height: 40px
        width: 100%
        display: none
        @media screen and (max-width: 1200px)
          display: block
</style>
