<template>
  <div class="header-wrap">
    <div class="header wrap">
      <router-link tag="div" class="logo-box" to="/">
        <img src="~@img/common/logo_white.svg" height="25px" alt="">
      </router-link>
      <div class="head-nav">
        <li v-for="(item,index) in nav" :key="index" :class="{'has-child': item.child}" @click="gotoPath(item.path)">
          <!-- <a v-if="item.outside" target="_blank" :href="item.path" class="text"><span class="info-text">{{item.name}}</span></a> -->
          <router-link excat :to="item.path" class="text">
            <span class="info-text">{{item.text}}</span>
            <div class="child" v-if="item.child" @click.stop>
              <router-link :to="childItem.path" excat v-for="(childItem, i) in item.child" :key="i">
                {{childItem.text}}
              </router-link>
            </div>
          </router-link>
        </li>
        <li class="switch-lang">
          <div class="lang-name">{{langName}}</div>
          <ul class="ul-lang">
            <li class="li-lang" v-for="(item, index) in langDatas" :key="index" @click="switchLang(item.lang)" :class="{'active-lang': item.lang === langName}">{{item.text}}</li>
          </ul>
        </li>
        <li>
          <router-link class="text nowrap" to="/login">{{$t('header.text20')}}</router-link>
        </li>
      </div>
    </div>
    <!-- 移动端-->
    <div class="mobile-header">
      <router-link tag="div" class="logo-box" to="/">
        <img src="~@img/common/logo_mobile.svg" height="25px" alt="">
      </router-link>
      <div class="right">
        <div class="login" @click="$router.push('/login')" :class="{'delang':  $lang === 'de'}">{{$t('header.text20')}}</div>
        <div class="right-menu" :class="{'close-menu': isShowMenu}" @click="isShowMenu = !isShowMenu"></div>
      </div>
    </div>
    <!-- 菜单-->
    <div class="show-menu" :class="{'menu-active': isShowMenu}">
      <ul class="uls" @click="isShowMenu = false">
        <li v-for="(item,index) in nav" :key="index" :class="{'has-child': item.child}">
          <router-link excat :to="item.path" tag="div" class="text"
                       :class="{'router-link-exact-active': isRoute === index}" @click.native="getRoA(index)">
            {{item.text}}
          </router-link>
          <dl class="child" v-if="item.child">
            <dd v-for="child in item.child" :key="child.text">
              <router-link :to="child.path" @click.native="getRo(index)">{{child.text}}</router-link>
            </dd>
          </dl>
        </li>
        <li class="lang-w">
          <div class="lang-name">{{langName}}</div>
          <ul class="ul-lang">
            <li class="li-lang" v-for="(item, index) in langDatas" :key="index" @click="switchLang(item.lang)" :class="{active: item.lang === langName}">
              {{item.text}}
            </li>
          </ul>
          <div class="lang-name">{{$t('header.text27')}}</div>
          <div class="select" :class="{'small': smallNav, 'dropDownMenuActive': langShow}">
            <ol class="box-list" >
              <li class="item-li" @click.stop="switchLang(item.lang, index)" v-for="(item,index) in langDatas" :key="index" :class="{active: item.lang === langName}">
                <div class="lang-text">{{item.text}}</div>
              </li>
            </ol>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      smallNav: false,
      langShow: false,
      langActive: '',
      langName: '',
      langDatas: [
        {
          lang: 'EN',
          text: 'EN'
        },
        {
          lang: 'CN',
          text: '中文'
        },
        {
          lang: 'JN',
          text: '日本語'
        },
        {
          lang: 'KO',
          text: '한국어'
        },
        {
          lang: 'EP', // 欧葡
          text: 'Português'
        },
        {
          lang: 'RU', // 俄语
          text: 'русский'
        },
        {
          lang: 'DE',// 德语
          text: 'Deutsch'
        },
        {
          lang: 'FRA', // 法语
          text: 'Français'
        },
        {
          lang: 'ES', // 西班牙语
          text: 'Español'
        },
        {
          lang: 'THA', // 泰语
          text: 'ภาษาไทย'
        },
      ],
      isShowMenu: false,
      isRoute: -1,
      nav: [
        {
          text: this.$t('header.text1'),
          path: '/'
        },
        {
          text: this.$t('header.text2'),
          path: '/productSecret',
          child: [
            {
              text: 'Secret',
              path: '/productSecret'
            },
            {
              text: this.$t('header.text3'),
              path: '/proCommunity'
            }
          ]
        },
        {
          text: this.$t('header.text4'),
          path: '/artificial',
          child: [
            {
              text: this.$t('header.text5'),
              path: '/artificial'
            }
          ]
        },
        {
          text: this.$t('header.text7'),
          path: '/tradingCenter'
        },
        {
          text: this.$t('header.text9'),
          path: '/news'
        },
        {
          text: this.$t('header.text10'),
          path: '/about'
        },
        {
          text: this.$t('header.text11'),
          path: '/help'
        },
      ]
    }
  },
  created() {
    this.langName = window.localStorage.getItem('secretLang')
    if (this.$route.path === '/tecBlock') {
      this.isRoute = 2
    } else if (this.$route.path === '/proCommunity') {
      this.isRoute = 1
    }
  },
  methods: {
    getRo(index) {
      this.isRoute = index
      console.log(index)
    },
    getRoA(index) {
      this.isRoute = -1
    },
    switchLang(lang,index) {
      this.langName = lang
      window.localStorage.setItem('secretLang', lang)
      window.location.reload()
    },
    gotoPath(path) {
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @blue: #0080f4;
  .nowrap{
    white-space: nowrap;
  }
  .has-child .child{
    @media screen and (max-width: 1200px){
      margin-left: 20px;
    }
  }

  .lang-w{
    .lang-name{
    }
    .select{
      &.dropDownMenuActive{
        opacity: 1;
        height: 402px;
      }
      .box-list{
        .item-li{
          padding-left: 20px;
          width: 100%;
          height: 40px;
          display: flex;
          justify-content: flex-start;
          cursor: pointer !important;
          pointer-events: auto;
          margin-left: 0;
          &.active{
            color: @blue;
          }
          .lang-text{
            flex: 1;
            line-height: 16px;
            font-size: 14px;
            text-align: left;
          }
        }
      }
    }
    span{
      padding: 0 10px;
      &.active{
        color: @blue;
      }
    }
  }

  .header-wrap {
    font-size: 18px;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 999;
    background-color: rgba(12, 17, 26, .4);
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 88px;
      transition: .3s;
      width: 1200px;
      margin: 0 auto;
      @media screen and (max-width: 1200px) {
        display: none;
      }
      @media screen and (max-width: 1400px) {
        width: 100%;
        padding: 0 20px;
      }
      .logo-box {
        cursor: pointer;
        img {
          vertical-align: top;
        }
      }
      .head-nav {
        height: 100%;
        line-height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        li {
          transition: .3s;
          cursor: pointer;
          position: relative;
          text-align: center;
          color: #fff;
          width: auto;
          padding: 0 25px;
          font-size: 15px;
          height: 100%;
          display: flex;
          align-items: center;
          .text {
            //display: block;
            position: relative;
            width: 100%;
            /*height: 100%;*/
            /*display: flex;*/
            /*align-items: center;*/
            /*justify-content: center;*/
            &:after {
              content: '';
              display: block;
              position: absolute;
              width: 0;
              height: 100%;
              background-color: transparent;
              border-bottom: 2px solid transparent;
              top: 0;
              bottom: 0;
              right: 0;
              left: 0;
              transition: width .4s ease-in-out;
            }
            &.router-link-exact-active {
              color: @blue;
            }
            .info-text {
              display: inline-flex;
              line-height: 1.2;
              white-space: nowrap;
            }
          }
          &.has-child .text:after {
            content: '';
            display: inline-block;
            border: 5px solid transparent;
            border-top-color: #fff;
            vertical-align: middle;
            margin-left: 10px;
            left: auto;
            right: -15px;
            top: 5px;
            bottom: auto;
          }
          &:hover {
            color: @blue;
            .child {
              opacity: 1;
              top: 35px;
              visibility: visible;
              transition: .3s .1s;
            }
            .text:after {
              border-top-color: @blue !important;
            }
          }
          &:last-child {
            padding-right: 0;
            .text {
              line-height: 36px;
              height: 36px;
              border: 1px solid @blue;
              border-radius: 20px;
              padding: 0 25px;
              color: @blue;
              transition: .5s;
              &:hover {
                background: @blue;
                color: #fff;
              }
            }
          }
        }
        .child {
          position: absolute;
          opacity: 0;
          width: 200px;
          text-align: left;
          left: -10px;
          top: 20px;
          line-height: 30px;
          visibility: hidden;
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 2px 5px rgba(9, 131, 239, .15);
          padding: 10px 0;
          a {
            display: block;
            padding: 10px 30px;
            color: #fff;
            word-break: break-word;
            &:hover {
              color: @blue;
            }
          }
          &.hide {
            visibility: hidden !important;
            transition: none !important;
          }
        }
      }
      .switch-lang{
        transition: .3s;
        text-align: center;
        color: #444;
        width: auto;
        font-size: 15px;
        height: 100%;
        cursor: pointer;
        position: relative;
        &:after{
          content: '';
          display: inline-block;
          border: 5px solid transparent;
          border-top-color: #fff;
          vertical-align: middle;
          margin-left: 5px;
          left: auto;
          right: -15px;
          top: 5px;
          margin-top: 2px;
          bottom: auto;
        }
        &:hover{
          color: @blue;
          .ul-lang{
            opacity: 1;
            top: 75px;
            visibility: visible;
            transition: .3s .1s;
          }
          &:after{
            border-top-color: @blue !important;
          }
        }
        .lang-name{
          position: relative;
          width: 100%;
        }
        .ul-lang{
          position: absolute;
          opacity: 0;
          width: 200px;
          text-align: left;
          left: -10px;
          top: 20px;
          line-height: 30px;
          visibility: hidden;
          background: #fff;
          box-shadow: 0 2px 5px rgba(9, 131, 239, .15);
          padding: 10px 0;
          .li-lang{
            text-align: left;
            display: block;
            padding: 5px 30px;
            color: #444;
            &:hover, &.active-lang{
              color: @blue;
            }
          }
          &.hide{
            visibility: hidden !important;
            transition: none !important;
          }
        }
        span{
          cursor: pointer;
        }
        span.active{
          color: @blue !important;
        }
      }
    }
    .nav-mask {
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 999;
    }
    .mobile-header {
      height: 70px;
      position: fixed;
      top: 0;
      width: 100%;
      background: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, .2);
      @media screen and (max-width: 1200px) {
        display: block;
      }
      @media screen and (min-width: 1200px) {
        display: none;
      }
      .logo-box {
        height: 46px;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding-left: 20px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        img {
          width: 150px;
        }
      }
      .right {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 100002;
        padding: 10px 20px 10px 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        .login {
          min-width: 80px;
          padding: 0 10px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          margin-right: 10px;
          border: 1px solid #0080f4;
          color: #0080f4;
          white-space: nowrap;
          &.delang{
            width: 100px;
          }
          @media screen and (max-width: 330px) {
            width: 60px;
          }
        }
        .right-menu {
          width: 24px;
          height: 22px;
          background: url("../assets/img/common/nav.svg") no-repeat center / cover;
          &.close-menu {
            background: url("../assets/img/common/nav_close.svg") no-repeat center / cover;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .show-menu {
      background-color: #fff;
      overflow: auto;
      max-height: 0;
      transition: max-height .3s linear;
      display: none;
      position: fixed;
      top: 70px;
      width: 100%;
      box-shadow: 0 3px 10px rgba(0, 0, 0, .15);
      z-index: 98;
      @media screen and (max-width: 1200px) {
        display: block;
      }
      &.menu-active {
        max-height: 100%;
      }
      .uls {
        border-top: 1px solid @blue;
        padding: 10px 0 80px;
        min-height: 100vh;
        li {
          padding: 0 36px;
          line-height: 50px;
          @media screen and (max-width: 400px) {
            line-height: 40px;
          }
        }
        a {
          display: block;
          font-size: 14px;
        }
        .router-link-exact-active {
          color: @blue;
        }
      }
    }
    .lang {
      display: flex;
      align-items: center;
      padding-top: 10px;
      span {
        margin-right: 22px;
      }
      img {
        width: 24px;
        margin-right: 8px;
      }
    }
  }
</style>
