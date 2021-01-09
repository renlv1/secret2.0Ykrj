<template>
  <div class="wrap-productSecret">
    <div class="wrapper-pc">
      <div class="banner banner-m-t" :class="{'cn-t': $lang === 'cn', 'no-cn':$lang !== 'cn'}">
        <img :src="require(`@img/gif2/productSecret/banner.svg`)" alt="" class="img-c-m">
        <div class="banner-text" :class="$lang">
          <div class="text1">OUR MISSION</div>
          <div class="text2">{{$t('banner.productSecret.text1')}}</div>
          <div class="text3">{{$t('banner.productSecret.text2')}}<span class="blue">{{$t('banner.productSecret.text3')}}</span></div>
          <div class="gif-t"><img src="@img/gif2/productSecret/productSecret.gif" alt="" class="gif-img"></div>
        </div>
      </div>
    </div>
    <div class="wrapper-pc">
      <div class="main">
        <div class="no-a">
          <div class="secret-world-pa">
            <div class="world-l">
              <div class="no-1">
                <img src="../assets/img/borderNumber/01.svg" alt="">
              </div>
              <div class="tit">{{$t('proSecret.text2')}}</div>
              <p class="con">{{$t('proSecret.text3')}}</p>
              <div class="video-but" @click="play"></div>
            </div>
            <div class="world-r">
              <div class="gridding-bg"></div>
            </div>
          </div>
          <div class="social-pb">
            <div class="icon">
              <img src="../assets/img/borderNumber/02.svg" alt="">
            </div>
            <div class="title">{{$t('proSecret.text4')}}</div>
            <p class="con">{{$t('proSecret.text5')}}</p>
            <div class="list">
              <div class="li" v-for="(item, index) in pbListImgs" :key="index">
                <div class="icon-l"><img :src="item.img" alt=""></div>
                <div class="con-r">
                  <div class="tit">{{item.tit}}</div>
                  <div class="text">{{item.text}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="no-b">
          <div class="icon-3">
            <img src="../assets/img/borderNumber/03.svg" alt="">
          </div>
          <div class="title">{{$t('proSecret.text6')}}</div>
          <div class="con">{{$t('proSecret.text7')}}</div>
          <div class="content-box">
            <div class="con-bl">
              <div class="bor-con">
                <div class="info-con">
                  <div class="img"></div>
                  <div class="tit"><i class="circle"></i> <span class="text">{{$t('proSecret.text9')}}</span></div>
                  <div class="con">{{$t('proSecret.text10')}}</div>
                </div>
              </div>
            </div>
            <div class="con-br">
              <div class="bor-con">
                <div class="info-con">
                  <div class="img"></div>
                  <div class="tit"><i class="circle"></i> <span class="text">{{$t('proSecret.text11')}}</span></div>
                  <div class="con">{{$t('proSecret.text12')}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="no-c">
          <div class="icon-4">
            <img src="../assets/img/borderNumber/04.svg" alt="">
          </div>
          <div class="title">{{$t('proSecret.text13')}}</div>
          <p class="text-p">{{$t('proSecret.text14')}}</p>
          <div class="list">
            <div class="li" v-for="(item,index) in footerList" :key="index">
              <div class="info-box">
                <div class="img"><img :src="item.img" alt=""></div>
                <div class="tit">{{item.tit}}</div>
                <p class="text">{{item.text}}</p>
              </div>
            </div>
          </div>
          <div class="add-secret" @click="download">{{$t('proSecret.text21')}}</div>
        </div>
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="banner">
        <img :src="require(`@img/productSecret/mobile_banner_${$lang}.svg`)" alt="">
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="banner-wrapper-mobile">
        <div class="wrapper-mobile-top">
          <div class="num">
            <img src="../assets/img/borderNumber/01.svg" alt="">
          </div>
          <div class="one-banner"></div>
        </div>
        <div class="wrapper-mobile-content">
          <p class="title">{{$t('proSecret.text2')}}</p>
          <p class="description">{{$t('proSecret.text3')}}</p>
          <p class="play" @click="play"></p>
        </div>
      </div>
      <div class="banner-bg-c-d">
        <img src="../assets/img/product/bg.png" alt="">
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="content-two-mobile">
        <span class="num">
          <img src="../assets/img/borderNumber/02.svg" alt="">
        </span>
        <p class="title">{{$t('proSecret.text4')}}</p>
        <p class="description">{{$t('proSecret.text5')}}</p>
        <ul class="list">
          <li class="item" v-for="item in pbListImgs" :key="item.index">
            <img :src="item.img" />
            <p class="title">{{item.tit}}</p>
            <p class="description">{{item.text}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="content-three-mobile">
        <div class="three-top">
          <span class="num">
            <img src="../assets/img/borderNumber/03.svg" alt="">
          </span>
          <div class="title">{{$t('proSecret.text6')}}</div>
          <div class="description">{{$t('proSecret.text7')}}</div>
        </div>
        <div class="three-bottom">
          <div class="pic-wrapper">
            <div class="pic-left">
              <img src="../assets/img/productSecret/jia-mi.gif" />
              <p class="title">{{$t('proSecret.text9')}}</p>
              <p class="description">{{$t('proSecret.text10')}}</p>
            </div>
            <div class="pic-right">
              <img src="../assets/img/productSecret/at.gif"/>
              <p class="title">{{$t('proSecret.text11')}}</p>
              <p class="description">{{$t('proSecret.text12')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="content-four-mobile">
        <span class="num">
          <img src="../assets/img/borderNumber/04.svg" alt="">
        </span>
        <div class="title">{{$t('proSecret.text13')}}</div>
        <div class="description">
          {{$t('proSecret.text14')}}
        </div>
        <ul class="content-wrapper">
          <li class="parallelogram-wrapper" v-for="item in footerList" :key="item.index">
            <img :src="item.img" />
            <span class="title">{{item.tit}}</span>
            <p class="description">{{item.text}}</p>
          </li>
        </ul>
        <div class="add-secret-mobile" @click="download">{{$t('proSecret.text21')}}</div>
      </div>
    </div>
    <div class="video" v-show="videoShow">
      <div class="video-content">
        <i class="close" @click="closeVideo"></i>
        <video id="video" ref="video" width="100%" controls="controls" preload="metadata" playsinline="true" webkit-playsinline="true" x5-video-player-fullscreen="false" x5-video-player-type="h5" x5-video-orientation="portraint">
          <source src="" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoShow: false,
      videoBShow: false,
      isPC: window.innerWidth > 1200,
      pbListImgs: [
        {
          img: require('../assets/img/productSecret/li-01.svg'),
          tit: this.$t('proSecret.title1'),
          text: this.$t('proSecret.description1'),
        },
        {
          img: require('../assets/img/productSecret/li-02.svg'),
          tit: this.$t('proSecret.title2'),
          text: this.$t('proSecret.description2'),
        },
        {
          img: require('../assets/img/productSecret/li-03.svg'),
          tit: this.$t('proSecret.title3'),
          text: this.$t('proSecret.description3'),
        },
        {
          img: require('../assets/img/productSecret/li-04.svg'),
          tit: this.$t('proSecret.title4'),
          text: this.$t('proSecret.description4'),
        },
        {
          img: require('../assets/img/productSecret/li-05.svg'),
          tit: this.$t('proSecret.title5'),
          text: this.$t('proSecret.description5'),
        },
        {
          img: require('../assets/img/productSecret/li-06.svg'),
          tit: this.$t('proSecret.title6'),
          text: this.$t('proSecret.description6'),
        }
      ],
      footerList: [
        {
          img: require('../assets/img/productSecret/li-a.svg'),
          tit: this.$t('proSecret.text15'),
          text: this.$t('proSecret.text16'),
        },
        {
          img: require('../assets/img/productSecret/li-b.svg'),
          tit: this.$t('proSecret.text17'),
          text: this.$t('proSecret.text18'),
        },
        {
          img: require('../assets/img/productSecret/li-c.svg'),
          tit: this.$t('proSecret.text19'),
          text: this.$t('proSecret.text20'),
        }
      ],
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
    }
  },
  created() {
  },
  mounted() {
    // let urlA = 'https://secretworth.blob.core.windows.net/videos'
    let lang = 'en'
    if (this.$lang === 'cn') {
      lang = 'cn'
    } else {
      lang = 'en'
    }
    let urlA = 'https://www.secretworth.com/vedio/' + lang
    // this.$refs.video.src = `${urlA}/home_${lang}.mp4`
    this.$refs.video.src = urlA + '/home.mp4'
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

<style lang="less" rel="stylesheet/less" scoped>
  @bc: #fff;
  @mb: #d3d3d3;
  @title: #000;
  @tit: #2d3436;
  @con: #636e72;
  @bor-color: #0080f4;
  @but-text: #0c111a;
  @title-size: 30px;
  @tit-size: 20px;
  @fs16: 16px;
  @fs14: 14px;
  .banner-m-t{
    position: relative;
    &.no-cn{
      .banner-text{
        .text2, .text3{
          font-size: 30px;
          letter-spacing: 5px;
        }
      }
    }
    .banner-text{
      &.ko,&.jn,&.tha{
        .text2, .text3{
          font-size: 50px;
        }
      }
    }
    .gif{
      position: absolute;
      right: 500px;
      top: 50%;
      transform: translateY(-50%);
      margin-top: -100px;
      @media screen and (min-width: 1800px){
        right: 250px;
      }
      @media screen and (min-width: 1920px){
        right: 200px;
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
        width: 80%;
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

  .ionc-img {
    width: 21px;
    height: 21px;
  }

  .line-h {
    line-height: 1.5;
  }

  .title-common {
    font-size: @title-size;
    color: @title;
  }

  .wrap-productSecret {
    width: 100%;
    background-color: #fff;
    .banner {
      width: 100%;
      img {
        width: 100%;
      }
      .content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .l-title {
          flex: 1;
        }
        .r-img {
          width: 708px;
          height: 408px;
          //background: url("../assets/img/productSecret/banner-r.svg") no-repeat center;
          background-size: contain;
          margin-left: 60px;
        }
      }
    }
    .main {
      width: 100%;
      .no-a {
        // overflow: hidden;
        width: 100%;
        height: 1260px;
        background-color: #fafafa;
        position: relative;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        .secret-world-pa {
          position: absolute;
          top: -80px;
          z-index: 10;
          width: 1200px;
          padding: 0 100px;
          box-sizing: content-box;
          margin: 0 auto;
          height: 544px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 0 6px 3px rgba(153, 153, 153, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          @media (max-width: 1400px) {
            //width: 100%;
            padding: 0 40px;
            margin: 0 auto;
          }
          @media (max-width: 1300px){
            width: 100%;
            padding: 0 40px;
            box-sizing: border-box;
          }
          &:after {
            display: block;
            content: '';
            width: 630px;
            height: 52px;
            background-color: #fff;
            position: absolute;
            right: 0;
            bottom: 0;
          }
          .world-l {
            width: 50%;
            height: auto;
            margin: 134px 74px 134px 0;
            /*.no-1 {
              .ionc-img;
              background: url("../assets/img/productSecret/01.png") no-repeat center;
              background-size: contain;
            }*/
            .tit {
              .title-common;
              padding: 40px 0 20px;
            }
            .con {
              .line-h;
              font-size: @fs16;
              color: @con;
              padding-bottom: 40px;
            }
            .video-but {
              width: 115px;
              height: 34px;
              background: url("../assets/img/productSecret/play-but.svg") no-repeat center;
              background-size: cover;
              cursor: pointer;
            }
          }
          .world-r {
            width: 50%;
            height: 320px;
            background: url("../assets/img/productSecret/no1.gif") no-repeat center;
            background-size: contain;
            position: relative;
            .gridding-bg {
              position: absolute;
              right: -110px;
              bottom: -198px;
              width: 630px;
              height: 135px;
              background: url("../assets/img/productSecret/griding-bg.png") no-repeat center;
              background-size: 100% 100%;
              display: inline-block;
              text-align: right;
              @media screen and (max-width: 1400px){
                right: 0;
              }
            }
          }
        }
        .social-pb {
          width: 1200px;
          margin: 0 auto;
          padding-bottom: 62px;
          .title {
            font-size: @title-size;
            color: @title;
            padding: 40px 0 30px;
          }
          .con {
            font-size: @fs16;
            color: @con;
            .line-h;
            padding-bottom: 66px;
          }
          .list {
            width: 100%;
            display: flex;
            align-items: center;
            flex-flow: wrap;
            justify-content: space-between;
            .li {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              margin-bottom: 50px;
              padding-right: 80px;
              /*odd表示奇数行，even表示偶数行;*/
              &:nth-child(even) {
                width: 50%;
                padding-right: 0;
              }
              &:nth-child(odd) {
                width: 50%;
              }
              .icon-l {
                width: 48px;
                height: 46px;
                margin-right: 36px;
                img {
                  width: 48px;
                  height: 100%;
                }
              }
              .con-r {
                font-size: @fs14;
                .tit {
                  padding-bottom: 20px;
                  color: @tit;
                }
                .text {
                  color: @con;
                }
              }
            }
          }
        }
      }
      .no-b {
        width: 1200px;
        margin: 0 auto;
        padding: 100px 0;
        @media screen and (max-width: 1400px){
          width: 1000px;
        }
        .title {
          font-size: @title-size;
          color: @title;
          padding: 40px 0 30px;
        }
        .con {
          font-size: @fs16;
          color: @con;
          .line-h;
          // padding-bottom: 40px;
        }
        .content-box {
          margin-top: 60px;
          width: 100%;
          display: flex;
          .con-bl {
            flex: 1;
            margin-top: 50px;
            .bor-con {
              border: 1px solid @mb;
              display: flex;
              align-items: center;
              justify-content: center;
              .info-con {
                width: 500px;
                margin: 0 auto;
                padding: 88px 0 36px;
                .img {
                  width: 386px;
                  height: 195px;
                  margin: 0 auto;
                  background: url("../assets/img/productSecret/jia-mi.gif") no-repeat center;
                  background-size: contain;
                }
                .tit {
                  font-size: @tit-size;
                  color: @tit;
                  font-weight: bold;
                  padding: 60px 20px 24px;
                  .circle {
                    width: 8px;
                    height: 8px;
                    background-color: @tit;
                    display: inline-block;
                    border-radius: 50%;
                    margin-right: 12px;
                  }
                  .text {
                    font-size: @tit-size;
                    color: @tit;
                  }
                }
                .con {
                  width: 500px;
                  padding: 0 20px;
                  .line-h;
                  font-size: @fs16;
                  color: @con;
                }
              }
            }
          }
          .con-br {
            width: 50%;
            margin-left: -1px;
            .bor-con {
              border: 1px solid @mb;
              display: flex;
              align-items: center;
              justify-content: center;
              .info-con {
                width: 500px;
                padding: 20px 0 36px;
                margin: 0 auto;
                .img {
                  width: 380px;
                  height: 287px;
                  margin: 0 auto;;
                  background: url("../assets/img/productSecret/at.gif") no-repeat center;
                  background-size: contain;
                }
                .tit {
                  font-size: @tit-size;
                  color: @tit;
                  padding: 22px 20px 24px;
                  .circle {
                    width: 8px;
                    height: 8px;
                    background-color: @tit;
                    display: inline-block;
                    border-radius: 50%;
                    margin-right: 12px;
                  }
                  .text {
                    font-size: @tit-size;
                    color: @tit;
                    font-weight: bold;
                  }
                }
                .con {
                  width: 500px;
                  .line-h;
                  padding-left: 20px;
                  font-size: @fs16;
                  color: @con;
                }
              }
            }
          }
        }
      }
      .no-c {
        width: 100%;
        height: 850px;
        background: url("../assets/img/productSecret/04_BG.png") no-repeat center;
        background-size: contain;
        .icon-4 {
          img{
            margin: 50px auto;
            display: block;
          }
        }
        .title {
          font-size: @title-size;
          color: @title;
          padding: 40px 0 30px;
          text-align: center;
          .line-h;
        }
        .text-p {
          width: 1200px;
          margin: 0 auto;
          text-align: center;
          font-size: @fs16;
          color: @con;
          .line-h;
          padding-bottom: 60px;
        }
        .list {
          width: 904px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          &:nth-child(1) {
            .info-box {
              .text {
                width: 256px;
              }
            }
          }
          .li {
            width: 288px;
            height: 260px;
            text-align: center;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 6px 3px rgba(153, 153, 153, .1);
            &:nth-child(3) {
              .info-box {
                .text {
                  width: 210px;
                }
              }
            }
            .info-box {
              padding-top: 32px;
              padding-bottom: 50px;
              .img {
                width: 66px;
                height: 66px;
                margin: 0 auto;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .tit {
                font-size: @fs16;
                color: @tit;
                padding: 22px 0;
              }
              .text {
                width: 256px;
                font-size: @fs14;
                color: @con;
                .line-h;
              }
            }
          }
        }
        .add-secret {
          width: 250px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          font-size: @fs14;
          color: @tit;
          background-size: @bc;
          border: 1px solid @bor-color;
          margin: auto;
          margin-top: 50px;
          cursor: pointer;
          transition: all .4s linear;
          &:hover {
            background-color: @bor-color;
            color: #fff;
          }
        }
      }
    }
  }
</style>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .banner-bg-c-d
    margin-top: -50px
    display: flex
    align-items flex-end
    justify-content flex-end
    @media screen and (max-width: 800px)
      margin-top: -26px
    img
      margin-right: 10px
      @media screen and (max-width: 800px)
        width: 80%
  .banner-wrapper-mobile
    position relative
    z-index 2
    width 90%
    margin 0 auto
    background-color #fff
    min-height 450px
    padding-bottom 20px
    -moz-box-shadow 0px 0px 3px #ccc
    -webkit-box-shadow 0px 0px 3px #ccc
    box-shadow 0px 0px 3px #ccc
    .wrapper-mobile-top
      display flex
      flex-direction row
      width 670px
      @media (max-width: 768px) {
        width 90%
      }
      .num
        margin 18px 0 0 18px
        display block
      .one-banner
        margin-top 18px
        width 460px
        height 269px
        background url("../assets/img/productSecret/no1.gif") no-repeat
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
      position: relative
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
        width 100px
        height 50px
        cursor pointer
        user-select none
        margin-top 20px
        background url("../assets/img/productSecret/play-but.svg") no-repeat
      .banner-bg
        position absolute
        width 80%
        height 62px
        background url("../assets/img/product/bg.png") no-repeat
        background-size 80% 62px
        background-position right
        right -30px
        bottom -30px

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

  .content-two-mobile
    margin 50px 20px 0 20px
    display flex
    flex-direction column
    align-items center
    .num
      display block
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

  .content-three-mobile
    display flex
    flex-direction column
    align-items center
    margin 0 20px 0
    .three-top
      .num
        display block
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
          margin-top: -1px
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

  .content-four-mobile
    display flex
    flex-direction column
    margin 40px 20px 30px
    .num
      display block
    .add-secret-mobile
      width: 100%;
      height:46px;
      line-height: 46px;
      text-align: center;
      font-size: 14px;
      color: @tit;
      background-size: @bc;
      border: 1px solid @bor-color;
      margin: auto;
      cursor: pointer;
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
      background: url("../assets/img/productSecret/04_BG.png") repeat;
      background-size cover
      .parallelogram-wrapper
        padding 20px
        width 100%
        display flex
        flex-direction column
        position relative
        align-items center
        margin-bottom 20px
        box-shadow 0 0 6px 3px rgba(153, 153, 153, 0.1)
        img
          width 40px
          height 40px
        .title
          margin-top 20px
          margin-bottom 0
          display block
          font-size 14px
          font-weight bold
        .description
          margin-top 20px
          text-align center
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
</style>
