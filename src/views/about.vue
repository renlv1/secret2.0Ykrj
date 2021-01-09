<template>
  <div class="news-w">
    <div class="wrapper-pc">
      <div class="banner banner-m-t" :class="{'cn-t': $lang === 'cn','no-t': $lang !== 'cn'}">
        <img :src="require(`@img/gif2/about/banner.svg`)" alt="" class="img-c">
<!--        <div class="gif"  :class="{'en-gif': $lang === 'en'}">-->
<!--          <img src="@img/gif2/about/about.gif" alt="" class="gif-img">-->
<!--        </div>-->
        <div class="banner-text" :class="$lang">
          <div class="text1">OUR MISSION</div>
          <div class="text2" v-show="$lang !== 'ko' && $lang !== 'jn'"><span class="blue">{{$t('banner.about.text1')}}</span>{{$t('banner.about.text2')}}</div>
          <div class="text3"  v-show="$lang !== 'ko' && $lang !== 'jn'">{{$t('banner.about.text3')}}</div>
          <div v-show="$lang === 'ko'">
            <div class="text2">{{$t('banner.about.text1')}}</div>
            <div class="text3">{{$t('banner.about.text2')}}<span class="blue">{{$t('banner.about.text3')}}</span></div>
          </div>
          <div v-if="$lang === 'jn'">
            <div class="text2">{{$t('banner.about.text1')}}</div>
            <div class="text3">{{$t('banner.about.text2')}}<span class="blue">{{$t('banner.about.text3')}}</span>{{$t('banner.about.text4')}}</div>
          </div>
          <div class="gif-img" >
            <img src="@img/gif2/about/about.gif" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper-mobile">
      <div class="banner">
        <img :src="require(`@img/about/mobile_banner_${$lang}.svg`)" alt="">
      </div>
    </div>
<!--    团队-->
    <div class="mobile-team-c">
      <div class="about-title">
        <div class="line"></div>
        <div class="text1">TEAM</div>
        <div class="text2">"{{$t('about.text2')}}"</div>
      </div>
      <div class="tki-c">{{$t('about.text3')}}</div>
    </div>
    <div class="about-content">
      <div class="about-wrap">
        <div class="line-c"></div>
        <div class="team-w">
          <div class="team-c">
            <div class="about-title">
              <div class="line"></div>
              <div class="text1">TEAM</div>
              <div class="text2">"{{$t('about.text2')}}"</div>
            </div>
            <div class="c-top">{{$t('about.text3')}}</div>
            <div class="tki">{{$t('about.text3')}}</div>
            <div class="c-bottom">
              <div class="team-item">
                <div class="about-img"><img src="../assets/img/about/about_1.svg" alt=""></div>
                <div class="team-text">{{$t('about.text4')}}</div>
              </div>
              <div class="team-item">
                <div class="about-img"><img src="../assets/img/about/about_2.svg" alt=""></div>
                <div class="team-text">{{$t('about.text5')}}</div>
              </div>
              <div class="team-item">
                <div class="about-img"><img src="../assets/img/about/about_3.svg" alt=""></div>
                <div class="team-text">{{$t('about.text6')}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="line-c" style="opacity: 0;"></div>
      </div>

      <div class="team-mobile-w">
        <div class="team-item-uls">
          <div class="team-item">
            <div class="about-img"><img src="../assets/img/about/about_1.svg" alt=""></div>
            <div class="team-text">{{$t('about.text4')}}</div>
          </div>
          <div class="team-item">
            <div class="about-img"><img src="../assets/img/about/about_2.svg" alt=""></div>
            <div class="team-text">{{$t('about.text5')}}</div>
          </div>
          <div class="team-item">
            <div class="about-img"><img src="../assets/img/about/about_3.svg" alt=""></div>
            <div class="team-text">{{$t('about.text6')}}</div>
          </div>
        </div>
      </div>
    </div>
<!--    联系我们-->
    <div class="contact-w">
      <div class="contact-title">
        <div class="line-d first-line"></div>
        <div class="f-t">
          <div class="text2">{{$t('about.text7')}}</div>
          <div class="bg-contact">CONTACT</div>
        </div>
        <div class="line-d" style="opacity: 0"></div>
      </div>
      <div class="mobile-w">
        <div class="line-w">
          <div class="line"></div>
          <div>{{$t('about.text7')}}</div>
        </div>
        <div class="bg-contact">CONTACT</div>
      </div>
      <div class="contact-c wrap-v-c">
        <div class="contact-text1-w">
          <div class="contact-text1">{{$t('about.text9')}}</div>
          <div class="contact-text1">{{$t('about.text10')}}</div>
        </div>
        <div class="input-item top-input">
          <div class="label">{{$t('about.text11')}}<span class="require">*</span></div>
          <div class="input-c">
            <input type="text" :placeholder="$t('about.text12')" v-model="value1" @input="inputValue(value1)">
          </div>
        </div>
        <div class="input-item">
          <div class="label">{{$t('about.text13')}}<span class="require">*</span></div>
          <div class="input-c">
            <input type="text" :placeholder="$t('about.text14')" v-model="value2" @input="inputValue(value2)">
          </div>
        </div>
        <div class="input-item">
          <div class="label">{{$t('about.text15')}}<span class="require">*</span></div>
          <div class="input-c">
            <input type="text" :placeholder="$t('about.text16')" v-model="value3" @input="inputValue(value3)">
          </div>
        </div>
        <div class="input-item">
          <div class="label">{{$t('about.text17')}}<span class="require">*</span></div>
          <div class="input-c textarea-c">
            <textarea :placeholder="$t('about.text18')" class="textarea" v-model="value4" @input="inputValue(value4)"></textarea>
          </div>
        </div>
        <div class="btn-confirm" @click="confirm" :class="{'ok-btn': isActive}">{{$t('about.text19')}}</div>
      </div>
    </div>
    <div class="toast" :class="{'a-t': isSend}">{{$t('about.text20')}}</div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        isSend: false,
        isEn: false,
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        isActive: false
      }
    },
    methods: {
      confirm () {
        this.value1 = ''
        this.value2 = ''
        this.value3 = ''
        this.value4 = ''
        if (this.isActive === true) {
          this.isActive = false
          this.isSend = true
          setTimeout(() => {
            this.isSend = false
          }, 1000)
        }
      },
      inputValue (val) {
        if (this.value1 !== '' || this.value2 !== '' || this.value3 !== '' || this.value4 !== '') {
          this.isActive = true
        } else {
          this.isActive = false
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .toast{
    position: fixed
    top: -100px
    left: 50%
    z-index: 100
    transform translateX(-50%)
    background-color: #357eec
    width: 200px
    height: 40px
    display: flex
    align-items center
    justify-content center
    color #fff
    transition all .3s linear
    border-radius 4px
    &.a-t{
      top: 100px
    }
  }
  .banner-m-t{
    position: relative;
    &.no-t{
      .banner-text{
        .text2,.text3{
          font-size: 30px
          letter-spacing 2px
        }
      }
    }
    .banner-text{
      &.jn,&.cn{
        .text2,.text3{
          font-size: 40px
        }
      }
      &.ko{
        .text2,.text3{
          font-size: 50px
        }
      }
      &.de{
        .text2,.text3{
          font-size: 24px
        }
      }
      .gif-img{
        position: absolute
        right: 0
        top: 50%
        transform translateY(-50%)
      }
    }
    .img-c{
      min-height 500px
    }
    .gif{
      position: absolute;
      right: 500px;
      top: 50%;
      transform: translateY(-50%);
      margin-top: -50px;
      &.en-gif{
        right: 300px
        @media screen and (max-width: 1950px){
          right: 180px;
        }
        @media screen and (max-width: 1800px){
          right: 100px;
        }
        @media screen and (max-width: 1600px){
          width: 500px;
          right: 100px;
        }
        @media screen and (max-width: 1400px){
          right: 80px;
        }
      }
      @media screen and (max-width: 1950px){
        right: 300px;
      }
      @media screen and (max-width: 1800px){
        right: 100px;
      }
      @media screen and (max-width: 1600px){
        width: 500px;
        right: 200px;
      }
      @media screen and (max-width: 1400px){
        right: 100px;
      }
    }
  }
  .news-w
    .mobile-team-c
      background-color: #f7f7f7
      padding-top: 1px
      @media screen and (max-width: 1200px)
        display: block
      @media screen and (min-width: 1200px)
        display: none
      .about-title
        display: flex
        align-items center
        position relative
        z-index 30
        line-height 50px
        margin-top: 40px
        padding-left: 16px
        .line
          border-top: 1px solid #2d3436
          width: 50px
        .text1
          color #636e72
          font-size: 16px
          margin: 0 10px
        .text2
          font-size: 24px
          color #2d3436
      .tki-c
        font-size: 14px
        line-height: 2
        padding: 0 16px 100px 16px
        @media screen and (max-width: 750px)
          padding-bottom: 30px
    .banner
      img
        width 100%
    .wrap-p
      .text2
        width 650px
        line-height: 2
        @media screen and (max-width: 1200px)
          width:146px
          &.en-text
            width: 260px
      .en-text
        width: 800px
        font-size: 40px
        letter-spacing 10px
        @media screen and (max-width: 1200px)
          font-size: 16px
          letter-spacing 0
          line-height: 1.2
    .about-content
      background-color #f7f7f7
      .about-title
        display: flex
        align-items flex-end
        position relative
        z-index 30
        line-height 50px
        margin-left -30px
        padding-left 30px
        @media screen and (max-width: 1200px)
          padding-left: 16px
          margin-top: 40px
        .text1
          font-size: 30px
          color #636e72
          margin: 0 50px 0 0
          @media screen and (max-width: 1200px)
            font-size: 16px
            margin: 0 10px
        .text2
          font-size: 48px
          color #2d3436
          font-weight: bold
          @media screen and (max-width: 1200px)
            font-size: 24px
      .about-wrap
        display: flex
        .line-c
          flex 1
          margin-top: 175px
          margin-right: 20px
          border-top: 1px solid #000
          @media screen and (max-width: 1800px)
            margin-top: 85px
          @media screen and (max-width: 1200px)
            display: none
      .team-w
        width 1200px
        position: relative
        z-index 3
        background-color: #f7f7f7
        display flex
        flex-direction row
        justify-content space-between
        @media screen and (max-width: 1400px)
          width: 1000px
        @media screen and (max-width: 1200px)
          display: none
        .img-team
          padding: 50px
          display: flex
          align-items center
          justify-content center
          img
              width: 400px
        .team-c
          padding 150px 0 0 0
          position relative
          @media screen and (max-width: 1800px)
            padding: 60px 0 0 0
          .c-top
            padding: 40px 0 100px
            font-size: 16px
            color #636e72
            line-height: 2
            @media screen and (max-width: 1800px)
              width: 100%
              margin-left: 0
          .c-bottom
            display: flex
            align-items center
            justify-content space-between
            padding-bottom: 150px
            @media screen and (max-width: 1800px)
              width: 100%
              margin-left: 0
            .team-item
              display flex
              flex-direction column
              align-items center
              width: 300px
              &:nth-child(2)
                margin: 0 66px
                @media screen and (max-width: 1400px)
                  margin: 0 30px
              .about-img
                text-align: center
              .team-text
                margin-top: 30px
                font-size: 14px
                color #636e72
                line-height: 2
    .contact-w
      margin: 70px 0
      // background url('../assets/img/about/title.png') no-repeat right top
      @media screen and (max-width: 1800px)
        padding-right: 20px
      @media screen and (max-width: 1800px)
        margin: 20px 0
      @media screen and (max-width: 1300px)
        padding: 0 20px
      .contact-title
        display: flex
        align-items center
        @media screen and (max-width: 1200px)
          display: none
        .line-d
          flex 1
          margin-right: 20px
          border-top: 1px solid #000
        .first-line
        .f-t
          width: 1200px
          display: flex
          align-items center
          justify-content space-between
          font-size: 48px;
          color: #2d3436;
          @media screen and (max-width: 1400px)
            width: 1000px
          @media screen and (max-width: 1200px)
            width: 100%
          .bg-contact
            font-size: 48px
            color: #F5F5F5
            font-weight: bold
      .mobile-w
        position: relative
        height: 100px
        @media screen and (max-width: 1200px)
          display: block
        @media screen and (min-width: 1200px)
          display: none
        .line-w
          display: flex
          align-items center
          height: 100px
          line-height: 100px
          position: relative
          z-index: 10
          font-size: 24px
          .line
            width: 50px
            border-top: 1px solid #2d3436
            margin-right: 10px
        .bg-contact
          position: absolute
          top: 50%
          transform translateY(-50%)
          font-size: 43px
          font-weight: bold
          color #F5F5F5
          letter-spacing 10px
          display: block
      .contact-c
        @media screen and (max-width: 1400px)
          width: 1000px
        @media screen and (max-width: 1200px)
          width: 100%
        .contact-text1
          font-size: 14px
          color #636e72
          line-height: 1.5
      .contact-text1-w
        margin-top: 65px
        padding-bottom: 60px
        border-bottom: 1px solid #f1f1f4
        @media screen and (max-width: 1200px)
          margin-top: 30px
          padding-bottom: 30px
      .top-input
        margin-top: 58px
        @media screen and (max-width: 1200px)
          margin-top: 20px
      .input-item
        .label
          font-size: 14px
          color #636e72
          .require
            color #ff7675
        .input-c
          width: 100%
          margin: 30px 0
          @media screen and (max-width: 1200px)
            margin: 10px 0
          input
            font-size: 14px
            padding-left: 30px
            border: 1px solid #dfe6e9
            background-color: #f6f6f8
            width: 100%
            height: 60px
            @media screen and (max-width: 1200px)
              height: 40px
              padding-left: 10px
            &::-webkit-input-placeholder {
              color: #b4b4b4;
            }
            &:-moz-placeholder {
              color: #b4b4b4;
            }
            &::-moz-placeholder {
              color: #b4b4b4;
            }
            &:-ms-input-placeholder {
              color: #b4b4b4;
            }
      .textarea-c
        .textarea
          height: 180px
          width: 100%
          padding: 15px 15px 15px 30px
          font-size: 14px
          background-color: #f6f6f8
          border: 1px solid #dfe6e9
          @media screen and (max-width: 1200px)
            height: 100px
            padding: 10px
          &::-webkit-input-placeholder {
            color: #b4b4b4;
          }
          &:-moz-placeholder {
            color: #b4b4b4;
          }
          &::-moz-placeholder {
            color: #b4b4b4;
          }
          &:-ms-input-placeholder {
            color: #b4b4b4;
          }
      .btn-confirm
        width: 100%
        height: 80px
        background-color: #636e72
        color #fff
        font-size: 14px
        font-weight: bold
        display: flex
        align-items center
        justify-content center
        cursor pointer
        border: 1px solid #eaebed
        &.ok-btn
          background-color: #0080f4
          border none
        @media screen and (max-width: 1200px)
          height: 46px
    .tki
      font-size: 14px
      line-height: 2
      padding: 10px 10px 30px 10px
      @media screen and (max-width: 1200px)
        display: block
      @media screen and (min-width: 1200px)
        display: none
    .team-mobile-w
      margin-left: 10px
      background-color: #F7F7F7
      display: flex
      padding-left: 0
      position: relative
      @media screen and (max-width: 1200px)
        display: flex
      @media screen and (min-width: 1200px)
        display: none
      .team-item-uls
        background-color: #F7F7F7
        display: flex
        align-items center
        flex-wrap wrap
        flex-direction column
        padding-left: 0
      .team-item
        width: 100%
        padding: 0 10px
        .about-img
          text-align: center
          margin: 10px 0
        .team-text
          font-size: 14px
          color #636e72
          line-height: 2
          padding-bottom: 20px
          @media screen and (max-width: 1200px)
            width: 80%
            margin: 0 auto
      .img-p
        position: absolute
        left: -40px
        background-color: #fff
        box-shadow 0 0 10px #eee
        max-width 300px
        width: 60%
        padding: 10px
        @media screen and (max-width: 1200px)
          top: -60px
          left: -10px
        @media screen and (max-width: 500px)
          top: 20px
          width: 180px
        img
          max-width 300px
          width: 100%

</style>
