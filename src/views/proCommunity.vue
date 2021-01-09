<template>
  <div class="wrapper">
    <div class="wrapper-pc" ref="height4">
      <div class="banner banner-m-t" :class="{'cn-t': $lang === 'cn'}">
        <img :src="require(`@img/gif2/proCommunity/banner.svg`)" alt=""  class="img-c-m">
        <div class="banner-text" :class="$lang">
          <div class="text1">OUR MISSION</div>
          <div class="text2">{{$t('banner.proCommunity.text1')}}<span class="blue">{{$t('banner.proCommunity.text2')}}</span></div>
          <div class="text3">{{$t('banner.proCommunity.text3')}}</div>
          <div class="text3"  v-if="$lang === 'de'">{{$t('banner.proCommunity.text4')}}</div>
          <div class="gif-t">
            <img src="@img/gif2/proCommunity/proCommunity.gif" alt="" class="gif-img">
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-pc" ref="height1">
      <div class="section s1">
        <div class="wrap">
          <div class="content">
            <span class="num"><img src="@com/01.svg" alt=""></span>
            <div class="title">{{$t('proCommunity.text3')}}</div>
            <p class="description">{{$t('proCommunity.text4')}}</p>
            <p class="description">{{$t('proCommunity.text5')}}</p>
            <p class="description">{{$t('proCommunity.text6')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-pc" ref="height2">
      <div class="section s2 bgf">
        <div class="wrap">
          <div class="flex">
            <div class="img img-banner">
              <img src="@img/community/banner2.gif" alt="">
            </div>
            <div class="text">
              <span class="num"><img src="@com/02.svg" alt=""></span>
              <div class="title">{{$t('proCommunity.text31')}}</div>
              <p class="description">{{$t('proCommunity.text32')}}</p>
              <p class="description">{{$t('proCommunity.text33')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-mobile" ref="mheihgt4">
      <div class="banner">
        <img :src="require(`@img/community/mobile_banner_en.svg`)" alt="" v-if="$lang === 'de'">
        <img :src="require(`@img/community/mobile_banner_${$lang}.svg`)" alt="" v-if="$lang !== 'de'">
      </div>
    </div>
    <div class="wrapper-mobile" ref="mheihgt3">
      <div class="banner-wrapper-mobile">
        <div class="wrapper-mobile-top">
          <div class="num">
            <img src="../assets/img/borderNumber/01.svg" alt="">
          </div>
          <!--          <div class="one-banner"></div>-->
        </div>
        <div class="wrapper-mobile-content">
          <p class="title">{{$t('proCommunity.text3')}}</p>
          <p class="description">{{$t('proCommunity.text4')}}</p>
          <p class="description">{{$t('proCommunity.text5')}}</p>
          <p class="description">{{$t('proCommunity.text6')}}</p>
        </div>
        <div class="banner-bg"></div>
      </div>
    </div>
    <div class="wrapper-mobile" ref="mheihgt2">
      <div class="content-one-mobile">
        <div class="top">
          <div class="content-left">
            <img src="../assets/img/community/banner2.gif" />
          </div>
          <div class="content-right">
            <span class="num">
              <img src="../assets/img/borderNumber/02.svg" alt="">
            </span>
            <div class="title" v-if="$lang === 'cn'">
              <div>{{$t('proCommunity.text7_1')}}</div>
              <div>{{$t('proCommunity.text7_2')}}</div>
            </div>
            <div class="title" v-else>
              <div>{{$t('proCommunity.text7')}}</div>
            </div>
          </div>
        </div>
        <p class="description">{{$t('proCommunity.text8')}}</p>
        <p class="description">{{$t('proCommunity.text8_1')}}</p>
        <p class="description">{{$t('proCommunity.text9')}}</p>
        <p class="description">{{$t('proCommunity.text9_1')}}</p>
      </div>
    </div>
    <div class="" ref="height3">
      <div class="section s3 s-top">
        <div class="wrap">
          <span class="num"><img src="@com/03.svg" alt=""></span>
          <p class="title">{{$t('proCommunity.text34')}}</p>
          <p class="description">{{$t('proCommunity.text35')}}</p>
          <ul class="uls">
            <li v-for="(item, index) in tabArr" :key="index" class="list-a"
                :class="{'active': activeIndex === index, 'last-list': activeIndex === 1 && index === 2, 'list-2': activeIndex === 2 && index === 1}"
                @click="checkOne(index)">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
<!--    工具箱-->
    <div v-show="activeIndex === 0">
      <div class=" section s3">
        <div class="wrap">
          <h5 class="title-a">{{$t('proCommunity.text28')}}</h5>
          <p class="desc-m">{{$t('proCommunity.text27')}}</p>
          <h6 class="title-b">{{$t('proCommunity.text26')}}</h6>
          <div class="group-pc group">
            <div class="list" v-for="(list, i) in allList" :key="i" :class="{'first-list': i === 0}">
              <div class="item" v-for="(item, index) in allList[i]" :key="index">
                <div class="img">
                  <img :src="item.imgUrl" alt="">
                </div>
                <h3>{{item.title}}</h3>
                <p>{{item.description}}</p>
              </div>
            </div>
          </div>
          <div class="group group-m">
            <div class="list" v-for="(list, i) in allList2" :key="i" :class="{'first-list': i === 0}">
              <div class="item" :class="$lang" v-for="(item, index) in allList2[i]" :key="index">
                <div class="img">
                  <img :src="item.imgUrl" alt="">
                </div>
                <h3>{{item.title}}</h3>
                <p>{{item.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=" section s4 s4-2">
        <div class="wrap">
          <div class="title">{{$t('proCommunity.text18')}}</div>
          <ul class="section-uls">
            <li class="list-item" v-for="(item, index) in $t('proCommunity.list2')" :key="index">
              <div class="img-box">
                <img :src="item.imgUrl" alt="">
              </div>
              <h5 class="h-title">{{item.title}}</h5>
              <p class="p-desc">{{item.description}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class=" section s4 a3">
        <div class="wrap">
          <div class="title">{{$t('proCommunity.text19')}}</div>
          <ul class="section-uls">
            <li class="list-item" v-for="(item, index) in $t('proCommunity.list3')" :key="index">
              <div class="img-box">
                <img :src="item.imgUrl" alt="">
              </div>
              <h5 class="h-title">{{item.title}}</h5>
              <p class="p-desc">{{item.description}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class=" section s4 a4 a4-r">
        <div class="wrap">
          <div class="title">{{$t('proCommunity.text20')}}</div>
          <ul class="section-uls">
            <li class="list-item" v-for="(item, index) in $t('proCommunity.list4')" :key="index" :class="$lang">
              <div class="img-box">
                <img :src="item.imgUrl" alt="">
              </div>
              <h5 class="h-title">{{item.title}}</h5>
              <p class="p-desc">{{item.description}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
<!--    社群生态-->
    <div v-show="activeIndex === 1">
      <div class=" section s3 a-1">
        <div class="wrap">
          <h5 class="title-a">{{$t('pro2.text1')}}</h5>
          <p class="desc-m">{{$t('pro2.text1a')}}</p>
          <h6 class="title-b">
            <img src="@img/communityEcosystem/title_circle.svg" alt="">
            <span>{{$t('pro2.text2')}}</span>
          </h6>
          <div class="blue-text">{{$t('pro2.text0')}}</div>
          <div class="text-desc">{{$t('pro2.text4')}}</div>
          <div class="w-a">
            <div class="top-w">
              <div class="item-big item">
                <div class="img-box">
                  <img src="@img/communityEcosystem/super_01.svg" alt="">
                </div>
                <h5 class="title-h5">{{$t('pro2.text5')}}</h5>
                <p class="desc-p">{{$t('pro2.text6')}}</p>
                <p class="desc-p">{{$t('pro2.text7')}}</p>
              </div>
              <div class="item">
                <div class="img-box">
                  <img src="@img/communityEcosystem/n_one_02.svg" alt="">
                </div>
                <h5 class="title-h5">{{$t('pro2.text8')}}</h5>
                <p class="desc-p">{{$t('pro2.text9')}}</p>
              </div>
            </div>
            <div class="bottom-w" :class="$lang">
              <div class="item">
                <div class="img-box">
                  <img src="@img/communityEcosystem/n_one_02.svg" alt="">
                </div>
                <h5 class="title-h5">{{$t('pro2.text8')}}</h5>
                <p class="desc-p">{{$t('pro2.text9')}}</p>
              </div>
              <div class="item">
                <div class="img-box">
                  <img src="@img/communityEcosystem/usa_03.svg" alt="">
                </div>
                <h5 class="title-h5">{{$t('pro2.text12')}}</h5>
                <p class="desc-p">{{$t('pro2.text13')}}</p>
              </div>
              <div class="item">
                <div class="img-box">
                  <img src="@img/communityEcosystem/bounty_04.svg" alt="">
                </div>
                <h5 class="title-h5">{{$t('pro2.text10')}}</h5>
                <p class="desc-p">{{$t('pro2.text11')}}</p>
              </div>
              <div class="item">
                <div class="img-box">
                  <img src="@img/communityEcosystem/play_05.svg" alt="">
                </div>
                <h5 class="title-h5">{{$t('pro2.text14')}}</h5>
                <p class="desc-p">{{$t('pro2.text15')}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" section s3 a-2">
        <div class="wrap">
          <h5 class="title-a">{{$t('pro2.text16')}}</h5>
          <p class="desc-m">{{$t('pro2.text17')}}</p>
          <ul class="uls-a2" :class="$lang">
            <li class="item" v-for="(item, index) in $t('pro2.listArr1')" :key="index">
              <div class="img-box">
                <img :src="item.imgUrl" alt="">
              </div>
              <h3 class="h3-text">{{item.title}}</h3>
              <p class="p-text">{{item.description}}</p>
            </li>
          </ul>

        </div>
      </div>
      <div class=" section s3 a-3">
        <div class="wrap">
          <h6 class="title-b">
            <img src="@img/communityEcosystem/title_circle.svg" alt="">
            <span>{{$t('pro2.text18')}}</span>
          </h6>
          <p class="desc-m">{{$t('pro2.text19')}}</p>
          <ul class="uls-a3">
            <li class="item">
              <div class="img-box">
                <img src="@img/communityEcosystem/showTime_01.svg" alt="">
              </div>
              <h3 class="h3-p">{{$t('pro2.text20')}}</h3>
              <div class="m-desc-p">
                <p class="desc-p">{{$t('pro2.text21')}}</p>
                <p class="desc-p">{{$t('pro2.text22')}}</p>
              </div>
            </li>
            <li class="item">
              <div class="img-box">
                <img src="@img/communityEcosystem/news_02.svg" alt="">
              </div>
              <h3 class="h3-p">{{$t('pro2.text23')}}</h3>
              <p class="desc-p">{{$t('pro2.text24')}}</p>
            </li>
          </ul>

        </div>
      </div>
      <div class=" section s3 a-3 a-4">
        <div class="wrap">
          <h6 class="title-b">
            <img src="@img/communityEcosystem/title_circle.svg" alt="">
            <span>{{$t('pro2.text25')}}</span>
          </h6>
          <p class="desc-m">{{$t('pro2.text25_01')}}</p>
          <ul class="uls-a3" :class="$lang">
            <li class="item">
              <div class="img-box">
                <img src="@img/communityEcosystem/task_01.svg" alt="">
              </div>
              <h3 class="h3-p">{{$t('pro2.text26')}}</h3>
              <p class="desc-p">{{$t('pro2.text27')}}</p>
            </li>
            <li class="item">
              <div class="img-box">
                <img src="@img/communityEcosystem/file_02.svg" alt="">
              </div>
              <h3 class="h3-p">{{$t('pro2.text28')}}</h3>
              <p class="desc-p">{{$t('pro2.text29')}}</p>
            </li>
          </ul>

        </div>
      </div>
    </div>
<!--SIE应用-->
    <div v-show="activeIndex === 2" class=" section s3 sie-section">
      <div class="wrap">
        <div class="title-a">{{$t('pro2.text30')}}</div>
        <div class="desc-p">{{$t('pro2.text31')}}</div>
        <ul class="sie-uls" :class="$lang">
          <li class="item">
            <div class="img-box">
              <img src="@img/communitySIE/function_01.svg" alt="">
            </div>
            <h3 class="title-h3">{{$t('pro2.text32')}}</h3>
            <p class="desc-p1">{{$t('pro2.text33')}}</p>
          </li>
          <li class="item">
            <div class="img-box">
              <img src="@img/communitySIE/pay_02.svg" alt="">
            </div>
            <h3 class="title-h3">{{$t('pro2.text34')}}</h3>
            <p class="desc-p1">{{$t('pro2.text35')}}</p>
          </li>
          <li class="item">
            <div class="img-box">
              <img src="@img/communitySIE/payMore_03.svg" alt="">
            </div>
            <h3 class="title-h3">{{$t('pro2.text36')}}</h3>
            <p class="desc-p1">{{$t('pro2.text37')}}</p>
          </li>
          <li class="item">
            <div class="img-box">
              <img src="@img/communitySIE/fee_04.svg" alt="">
            </div>
            <h3 class="title-h3">{{$t('pro2.text38')}}</h3>
            <p class="desc-p1">{{$t('pro2.text39')}}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class=" section s4 a4">
      <div class="wrap">
        <div class="t-a">
          <div class="box-a">
            <img src="@img/communityToolkit/a-m.png" alt="">
          </div>
          <div class="a-c">
            <h3 class="title title-b-a">
              <img src="@img/borderNumber/04.svg" alt="">
              <span>{{$t('proCommunity.text21')}}</span>
            </h3>
            <p class="p-l">{{$t('proCommunity.text22')}}</p>
            <p class="p-l">{{$t('proCommunity.text23')}}</p>
            <p class="p-l">{{$t('proCommunity.text24')}}</p>
          </div>
        </div>
        <h2 class="a-b">{{$t('proCommunity.text25')}}</h2>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .banner-m-t{
    position: relative;
    .banner-text{
      &.tha,&.fra,&.de,&.ru{
        .text2,.text3{
          font-size: 28px;
          letter-spacing: 5px;
        }
      }
      &.ru{
        .text2,.text3{
          font-size: 36px;
          letter-spacing: 5px;
        }
      }
      &.en{
        .blue{
          margin-left: 10px;
        }
      }
    }
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
        width: 600px;
        right: 200px;
      }
      @media screen and (max-width: 1400px){
        right: 100px;
      }
    }
  }
  .title-b-a{
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      margin-right: 10px;
    }
  }
  .wrap {
    width: 1200px;
    margin: 0 auto;
    color: #636e72;
    @media (max-width: 1400px) {
      width: 100%;
      padding: 0 20px;
      margin: 0 auto;
    }
  }

  img {
    max-width: 100%;
    vertical-align: top
  }

  .flex {
    display: flex;
    align-content: center;
    justify-content: space-between;
  }

  .title {
    font-size: 30px;
    color: #2d3436;
    font-weight: bold;
    line-height: 1;
    padding: 40px 0 30px;
    @media screen and (max-width: 1200px){
      font-size: 22px;
    }
  }

  p + p {
    padding-top: 2px;
    font-size: 16px;
  }

  .banner {
    box-shadow: 0 2px 10px rgba(0, 0, 0, .05);
    position: relative;
    min-height: auto;
    img {
      width: 100%;
    }
  }

  .section {
    background: #fafafa;
    &.bgf {
      background: #fff;
      .img-banner{
        width: 446px;
      }
    }
  }

  .s1 {
    padding-bottom: 135px;
    padding-top: 0;
    .wrap {
      position: relative;
      margin-top: -80px;
      &:before {
        content: '';
        position: absolute;
        width: 630px;
        height: 135px;
        background: url("../assets/img/product/bg.png") no-repeat;
        background-position: right;
        right: -96px;
        bottom: -82px;
        @media (max-width: 1600px) {
          right: 0
        }
      }
    }
    .content {
      position: relative;
      background: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, .15);
      padding: 60px;
      .description {
        font-size: 16px;
        line-height: 1.8;
      }
    }
    .play-btn {
      padding: 100px 0 10px;
    }
  }

  .s2 {
    padding: 84px 0;
    .text {
      padding-top: 30px;
      text-align: right;
      width: 650px;
      p {
        font-size: 16px;
        margin-right: -5px;
        line-height: 1.8;
      }
    }
  }

  .s3 {
    padding: 90px 0 130px;
    @media screen and (max-width: 1200px){
      padding: 20px 0 50px;
    }
    &.s-top{
      padding-bottom: 0;
      @media screen and (max-width: 1200px){
        padding: 30px 0;
      }
      .wrap{
        @media screen and (max-width: 1200px){
          padding: 0 30px;
        }
      }
      .title{
        @media screen and (max-width: 1200px){
          font-size: 22px;
        }
      }
      .description{
        @media screen and (max-width: 1200px){
          font-size: 14px;
          line-height: 1.8;
        }
      }
    }
    .uls{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 90px;
      @media screen and (max-width: 1200px){
        margin-top: 30px;
      }
      .list-a{
        width: 360px;
        height: 60px;
        border: 1px solid #000;
        border-right: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #2d3436;
        cursor: pointer;
        transition: all .3s linear;
        @media screen and (max-width: 1200px){
          width: auto;
          flex: 1;
          font-size: 14px;
          height: 50px;
          text-align: center;
        }
        &:nth-child(2) {
          border-left: none;
        }
        &:last-child {
          border-right: 1px solid #000;
        }
        &.last-list{
          border-left: none;
        }
        &.list-2{
          border-left: 1px solid #000;
        }
        &.active{
          border: none;
          background-color: #0080f4;
          color: #fff;
        }
      }
    }
    .title-a,.title-b{
      text-align: center;
      font-size: 30px;
      color: #2d3436;
      font-weight: bold;
      @media screen and (max-width: 1200px){
        font-size: 20px;
      }
    }
    .desc-m{
      text-align: center;
      font-size: 16px;
      color: #636e72;
      margin: 30px 0 80px;
      @media screen and (max-width: 1200px){
        margin: 20px 0 50px;
      }
    }
    .title-b{
    }
    .group {
      display: flex;
      justify-content: center;
      padding-top: 140px;
      .list {
        width: 400px;
        border-left: 1px solid #c6c6c6;
        border-right: 1px solid #c6c6c6;
        &.first-list{
          border-left: none;
          @media screen and (max-width: 1200px){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .item {
            border-left: 1px solid #c6c6c6;
            &:last-child{
              border-bottom: 1px solid #c6c6c6;
            }
          }
        }
        &:nth-child(2) {
          margin-top: -90px;
          border-left: none;
          border-right: none;
          position: relative;
          &::before, &::after {
            content: '';
            position: absolute;
            background: #c6c6c6;
            width: 1px;
            height: 200px;
            top: 0;
          }
          &::before {
            left: -1px;
          }
          &::after {
            right: -1px;
            @media screen and (max-width: 1200px){
              display: none;
            }
          }
          .item{
            &:last-child{
              border-bottom: 1px solid #c6c6c6;
            }
          }
        }
        &:last-child{
          border-right: none;
          .item{
            border-right: 1px solid #c6c6c6;
            &:last-child{
              border-bottom: 1px solid #c6c6c6;
            }
          }
        }
      }
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 34px 20px;
        border-top: 1px solid #c6c6c6;
        font-size: 14px;
        line-height: 1.8;
        min-height: 270px;
        @media screen and (max-width: 1200px){
          padding: 30px 15px 15px 15px;
          display: block;
          width: 47%;
          margin-bottom: 20px;
          border-bottom: 1px solid #c6c6c6;
          &:nth-child(odd) {
            margin-right: 20px;
          }
          &:last-child{
            margin: 0 auto;
          }
        }
        .en & {
          min-height: 320px;
        }
        &:last-child {
          // border-bottom: 1px solid #c6c6c6;
        }
        .img {
          height: 110px;
          display: flex;
          align-items: center;
          @media screen and (max-width: 1200px){
            height: auto;
            width: 60px;
            margin-bottom: 20px;
          }
        }
        h3 {
          font-size: 20px;
          color: #2d3436;
          font-weight: bold;
          margin-bottom: 20px;
        }
      }
    }
    .group-pc{
      display: flex;
      @media screen and (max-width: 1200px){
        display: none;
      }
    }
    .group-m{
      display: none;
      @media screen and (max-width: 1200px){
        display: flex;
        padding-top: 50px;
      }
      .item{
        word-wrap:break-word;
        &.de{
          h3{
            font-size: 15px;
          }
          p{
            font-size: 13px;
          }
        }
      }
    }
    .down {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 400px;
      margin: -55px auto;
      position: relative;
      .t-cen{
        text-align: center;
      }
      .text {
        &.ru-text{
          text-align: center;
        }
        .en & {
          padding-left: 55px;
        }
        font-size: 30px;
        font-weight: bold;
        color: #2d3436;
        p {
          font-size: 20px;
          margin-bottom: 10px;
        }
      }
      .btn {
        color: #2d3436;
        border: 1px solid #0080f4;
        text-align: center;
        width: 250px;
        margin: 30px auto;
        line-height: 50px;
        font-size: 14px;
        cursor: pointer;
        transition: .3s;
        &:hover {
          background: #0080f4;
          color: #fff;
        }
      }
    }
  }

  .s4{
    background-color: #fff;
    padding: 50px 0 120px;
    .title{
      text-align: center;
      margin-bottom: 40px;
    }
    .section-uls{
      display: flex;
      flex-wrap: wrap;
      .list-item{
        width: 400px;
        margin-bottom: 50px;
        padding: 40px 30px;
        @media screen and (max-width: 1200px){
          width: 50%;
          padding: 20px 10px 20px 10px;
          margin-bottom: 20px;
          &:nth-child(odd) {
            padding-left: 0;
          }
          &:nth-child(even) {
            padding-right: 0;
          }
        }
        .img-box{
          height: 60px;
          margin: 0 auto;
          img{
            height: 100%;
            display: block;
            margin: 0 auto;
          }
          @media screen and (max-width: 1200px){
            width: auto;
            height: 60px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .h-title{
          font-size: 20px;
          color: #2d3436;
          margin: 30px 0;
          text-align: center;
          font-weight: bold;
          word-break: break-word;
          height: 46px;
          @media screen and (max-width: 1200px){
            font-size: 16px;
            margin: 20px 0;
          }
        }
        .p-desc{
          font-size: 14px;
          color: #636e72;
          line-height: 2;
        }
      }
    }
  }
  .s4-2{
    padding-bottom: 0;
    @media screen and (max-width: 1200px){
      padding: 0;
      .title{
        padding: 40px 0;
        margin-bottom: 0;
      }
    }
  }
  .a3{
    background-color: #fafafa;
    padding-bottom: 20px;
    @media screen and (max-width: 1200px){
      padding: 0;
      .title{
        margin-bottom: 0;
      }
    }
    .section-uls{
      @media screen and (max-width: 1200px){
        flex-wrap: wrap;
      }
      .list-item{
        flex: 1;
        width: auto;
        @media screen and (max-width: 1200px){
          width: 50%;
          flex: none;
        }
        &:nth-child(2) {
          img{
            height: 80px;
            margin-top: -10px;
          }
          .h-title{
            margin-top: 40px;
            @media screen and (max-width: 1200px){
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
  .a4-r{
    padding-bottom: 20px;
    @media screen and (max-width: 1200px){
      padding: 0;
      .title{
        margin-bottom: 0;
      }
      .section-uls{
        justify-content: space-between;
        .list-item{
          padding: 20px 10px !important;
          /*height: 300px !important;*/
          height: auto;
          &.en{
            height: 400px !important;
          }
          &.de,&.ep,&.es,&.ru,&.fra{
            height: 500px !important;
            .p-desc{
              word-break: break-word;
            }
          }
          &:nth-child(1),&:nth-child(2) {
            width: 47%;
            margin-right: 0;
            flex: none;
          }
          &:nth-child(2){
            margin-left: 20px;
          }
          &:nth-child(3) {
            width: 60%;
            flex: none;
            margin: 0 auto !important;
          }
        }
      }
    }

  }
  .a4{
    @media screen and (max-width: 1200px){
      padding-bottom: 50px;
      padding-top: 0;
    }
    .section-uls{
      .list-item{
        flex: 1;
        width: 320px;
        height: 380px;
        padding-top: 40px;
        margin-right: 100px;
        border: 1px solid #c6c6c6;
        &:last-child{
          margin-right: 0;
        }
      }
    }
    .t-a{
      position: relative;
      width: 1030px;
      margin: 0 auto;
      @media screen and (max-width: 1200px){
        width: 100%;
      }
      .box-a{
        @media screen and (max-width: 1200px){
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        img{
          margin: 0 auto;
          display: block;
        }
      }
      .a-c{
        position: absolute;
        left: 0;
        top: 100px;
        @media screen and (max-width: 1200px){
          top: 10px;
          position: static;
        }
      }
      .title{
        text-align: center;
        margin-bottom: 30px;
      }
      .p-l{
        line-height: 2;
        margin-bottom: 40px;
        @media screen and (max-width: 1200px){
          font-size: 14px;
          margin-bottom: 20px;
        }
      }
    }
    .a-b{
      text-align: center;
      padding-top: 100px;
      color: #0080f4;
      font-size: 42px;
      font-weight: bold;
      line-height: 1.5;
      @media screen and (max-width: 1200px){
        font-size: 20px;
        padding-top: 50px;
      }
    }
  }
  .a-1{
    .title-b{
      display: flex;
      align-items: center;
      text-align: left;
      word-break: break-word;
      img{
        margin-right: 10px;
      }
    }
    .blue-text{
      color: #0080f4;
      font-size: 18px;
      font-weight: bold;
      margin: 30px 0;
    }
    .text-desc{
      font-size: 16px;
      color: #636e72;
      margin-top: 30px;
    }
    .w-a{
      margin-top: 40px;
      .top-w{
        display: flex;
        align-items: center;
        border-top: 1px solid #c6c6c6;
        .item {
          @media screen and (max-width: 1200px){
            display: none;
          }
          &:nth-child(2) {

          }
        }
        .item-big{
          width: 800px;
          border-left: 1px solid #c6c6c6;
          @media screen and (max-width: 1200px){
            display: flex;
            width: 100%;
            height: auto;
            padding-bottom: 40px;
          }

        }
      }
      .img-box{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          @media screen and (max-width: 1200px){
            height: 50px;
          }
        }
      }
      .title-h5{
        font-size: 20px;
        font-weight: bold;
        color: #2d3436;
        margin: 30px 0;
        text-align: center;
      }
      .desc-p{
        font-size: 14px;
        color: #636e72;
        text-align: left;
        line-height: 2;
      }
      .item{
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 340px;
        border-right: 1px solid #c6c6c6;
        border-bottom: 1px solid #c6c6c6;
        padding: 40px 40px 0 40px;
        @media screen and (max-width: 1200px){
          padding: 10px;
          min-height: 300px;
          height: auto;
        }
      }
      .bottom-w{
        display: flex;
        align-items: center;
        @media screen and (max-width: 1200px){
         flex-wrap: wrap;
          border-left: 1px solid #c6c6c6;
        }
        &.en,&.tha{
          .item{
            @media screen and (max-width: 1200px){
              height: 400px;
            }
          }
        }
        &.de,&.jn,&.ep,&.es,&.fra{
          .item{
            @media screen and (max-width: 1200px){
              height: 470px;
              word-break: break-word;
            }
          }
        }
        &.ru{
          .item{
            @media screen and (max-width: 1200px){
              height: 520px;
              word-break: break-word;
            }
          }
        }
        .item{
          @media screen and (max-width: 1200px){
            width: 50%;
          }
          &:nth-child(1){
            display: none;
            @media screen and (max-width: 1200px){
              display: flex;
            }
          }
          &:nth-child(2){
            border-left: 1px solid #c6c6c6;
            @media screen and (max-width: 1200px){
              border-left: none;
            }
          }
        }
      }
    }
  }
  .a-2{
    background-color: #fff;
    padding-bottom: 50px;
    .title-a{
      text-align: right;
      color: #0080f4;
      font-size: 18px;
    }
    .desc-m{
      text-align: right;
      font-size: 16px;
      color: #636e72;
      @media screen and (min-width: 1200px){
        /*white-space: nowrap;*/
      }
    }
    .uls-a2{
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 1200px){
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
      }
      &.en,&.ko{
        .item{
          @media screen and (max-width: 1200px){
            height: 400px;
            &:last-child{
              height: 300px;
            }
          }
        }
      }
      &.de,&.jn,&.ep,&.es,&.fra,&.ru{
        .item{
          @media screen and (max-width: 1200px){
            height: 500px;
            &:last-child{
              height: 400px;
            }
          }
        }
      }
      .item{
        width: 300px;
        height: 340px;
        padding: 40px 30px 0 30px;
        @media screen and (max-width: 1200px){
          width: 50%;
          height: 300px;
          padding: 10px;
          &:last-child{
            margin: 0 auto;
          }
        }
        .img-box{
          text-align: center;
          margin: 0 auto;
          @media screen and (max-width: 1200px){
            img{
              height: 50px;
            }
          }
        }
        .h3-text{
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          color: #2d3436;
          margin: 20px 0 30px;
        }
        .p-text{
          font-size: 14px;
          color: #636e72;
          line-height: 2;
        }
      }
    }
  }
  .a-3{
    padding-bottom: 50px;
    .title-b{
      display: flex;
      align-items: center;
      img{
        margin-right: 10px;
      }
    }
    .desc-m{
      font-size: 16px;
      text-align: left;
      color: #636e72;
    }
    .uls-a3{
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 1200px){
        justify-content: flex-start;
        align-items: flex-start;
      }
      &.de{
        word-break: break-word;
      }
      .item{
        width: 480px;
        height: 340px;
        padding: 40px 30px 0 30px;
        @media screen and (max-width: 1200px){
          width: 50%;
          padding: 10px;
          height: auto;
        }
        &:nth-child(1) {
          margin-right: 120px;
          @media screen and (max-width: 1200px){
            margin-right: 0;
            padding-left: 0;
          }
        }
        &:nth-child(2) {
          @media screen and (max-width: 1200px){
            padding-right: 0;
          }
        }
        .img-box{
          display: flex;
          align-items: center;
          justify-content: center;
          @media screen and (max-width: 1200px){
            img{
              height: 50px;
            }
          }
        }
        .h3-p{
          font-size: 20px;
          color: #2d3436;
          text-align: center;
          margin: 30px 0;
          font-weight: bold;
          @media screen and (max-width: 1200px){
            font-size: 14px;
          }
        }
        .m-desc-p .desc-p{
          @media screen and (max-width: 1200px) {
            display: inline;
          }
        }
        .desc-p{
          font-size: 14px;
          color: #636e72;
          line-height: 2;
        }
      }
    }
  }
  .a-4{
    background-color: #fff;
    padding-bottom: 30px;
  }
  .sie-section{
    padding-bottom: 90px;
    @media screen and (max-width: 1200px){
      padding-bottom: 50px;
    }
    .title-a{
      text-align: center;
      @media screen and (max-width: 1200px){
        padding-top: 0;
      }
    }
    .desc-p{
      width: 1030px;
      text-align: center;
      font-size: 16px;
      color: #636e72;
      line-height: 2;
      margin: 30px auto 80px;
      @media screen and (max-width: 1200px){
        width: 100%;
        font-size: 14px;
        margin: 20px 0;
      }
    }
    .sie-uls{
      display: flex;
      align-items: center;
      margin-top: 40px;
      @media screen and (max-width: 1200px){
        flex-wrap: wrap;
        align-items: flex-start;
      }
      &.de,&.ru,&.es,&.fra,&.ep,&.jn,&.en{
        @media screen and (max-width: 1200px){
         .item{
           word-break: break-word;
           .title-h3{
             height: 80px;
             font-size: 16px;
           }
         }
        }
      }
      .item{
        padding: 40px 30px 0 30px;
        width: 300px;
        height: 340px;
        @media screen and (max-width: 1200px){
          width: 50%;
          height: auto;
          padding: 10px;
        }
        .img-box{
          display: flex;
          align-items: center;
          justify-content: center;
          @media screen and (max-width: 1200px){
            img{
              height: 50px;
            }
          }
        }
        .title-h3{
          font-size: 20px;
          color: #2d3436;
          margin: 30px 0 20px;
          font-weight: bold;
          text-align: center;
          height: 46px;
        }
        .desc-p1{
          font-size: 14px;
          color: #636e72;
          line-height: 2;
        }
      }
    }
  }
</style>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .banner-wrapper-mobile
    margin-top 50px
    position relative
    z-index 2
    width 100%
    background-color #fff
    padding-bottom 20px
    @media (max-width: 768px) {
      width 100%
      margin 50px auto
      overflow hidden
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
        font-size 22px
        color #2d3436
        font-weight bold
        margin 30px 0
        padding 0
      .description
        font-size 14px
        padding 0
        color #636e72
        line-height 2
      .play
        cursor pointer
        user-select none
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

  .content-one-mobile
    margin 90px 30px 0
    .top
      margin-bottom 30px
      display flex
      justify-content space-between
      align-items center
      .content-left
        width 50%
        img
          width 100%
      .content-right
        flex 1
        display flex
        flex-direction column
        align-items flex-end
        .num
          display block
        .title
          text-align right
          margin 20px 0
          font-size 22px
          color #2d3436
          font-weight bold
          line-height: 1.6
          @media screen and (max-width: 1200px)
            padding: 0
            font-size: 22px
    .description
      font-size 14px
      color #636e72
      line-height 1.8

  .content-two-mobile
    background-color #f7f7f7
    margin 60px 30px 100px
    position relative
    @media screen and (max-width: 1200px)
      margin: 30px 0 0
      padding 30px 20px 30px
      &.rulang
        padding 30px 20px 120px
    .num
      display block
    .title
      word-break break-word
      margin 20px 0
      font-size 16px
      color #2d3436
      font-weight bold
      padding 0
    .description
      font-size 14px
      color #636e72
      line-height 2
    .btn
      position absolute
      margin-top 40px
      cursor pointer
      user-select none
      font-size 16px
      color #636e72
      text-align center
      line-height 40px
      height 40px
      width 125px
      border 1px solid #2d3436
      &.rulang
        height 42px
        line-height 20px
    .list-wrapper
      margin-top 40px
      display flex
      flex-direction row
      .left-list
        width 50%
        margin-top 90px
        .item
          border 1px solid #c6c6c6
          border-right none
          border-bottom none
          min-height 220px
          padding-bottom 5px
          .item-top
            margin 10px 10px 5px
            display flex
            flex-direction row
            img
              margin-right 15px
              @media (max-width: 768px) {
                width 30%
              }
              @media (max-width: 374px) {
                margin-right 5px
              }
          .description
            margin 0 8px
            font-size 12px
            line-height 1.6
        .hasBorder
          border-bottom 1px solid #c6c6c6
      .right-list
        width 50%
        li
          min-height 220px
          border 1px solid #c6c6c6
          border-bottom none
          padding-bottom 5px
          .item-top
            margin 10px 10px 5px
            display flex
            flex-direction row
            img
              margin-right 15px
              @media (max-width: 768px) {
                width 30%
              }
              @media (max-width: 374px) {
                margin-right 5px
              }
          &:last-child
            border-bottom 1px solid #c6c6c6
          .description
            margin 0 8px
            font-size 12px
            line-height 1.6
    .other-li
      width 50%
      position absolute
      bottom 10px
      left 0
      margin: 30px 0 80px
      padding 30px 28px 0
      @media (max-width: 414px){
        margin: 40px 0 80px
        bottom 0
      }
      .subTitle
        font-size 14px
        width 100%
        line-height 1.4
        font-weight bold
        color #2d3436
        @media (min-width: 414px) and (max-width: 580px) {
          width 100%
        }
        @media (min-width: 580px) and (max-width: 725px) {
          width 80%
        }
      .btn
        width auto
        min-width 125px
        padding: 0 10px
        display: flex
        align-items center
        justify-content center
        border 1px solid #0080f4
        font-size 14px
        margin-top 20px
</style>

<script>
export default {
  name: "proCommunity",
  data() {
    return {
      activeIndex: 0,
      tabArr: [this.$t('proCommunity.text28'), this.$t('pro2.text1'), this.$t('pro2.text30')],
      leftList: this.$t('proCommunity.leftList'),
      isEN: false,
    }
  },
  computed: {
    allList() {
      let arr = [
        [
          this.leftList[0],
          this.leftList[1],
        ],
        [

          this.leftList[2],
          this.leftList[3],
          this.leftList[4],
        ],
        [
          this.leftList[5],
          this.leftList[6],
        ]
      ]

      return arr
    },
    allList2() {
      let arr = [
        [
          this.leftList[0],
          this.leftList[1],
          this.leftList[5],
          this.leftList[2],
          this.leftList[3],
          this.leftList[4],
          this.leftList[6],
        ],
      ]

      return arr
    }
  },
  created() {
    if (window.localStorage.getItem('secretLang') === 'EN') {
      this.isEN = true
    } else {
      this.isEN = false
    }

    if (this.$route.query.a) {
      setTimeout(() => {
        if (window.innerWidth > 1200) {
          document.body.scrollTop = document.documentElement.scrollTop = this.$refs.height1.clientHeight + this.$refs.height2.clientHeight + this.$refs.height4.clientHeight
        } else {
          document.body.scrollTop = document.documentElement.scrollTop = this.$refs.mheihgt2.clientHeight + this.$refs.mheihgt3.clientHeight + this.$refs.mheihgt4.clientHeight + 160
        }
      }, 100)
    }
  },
  methods: {
    checkOne (index) {
      this.activeIndex = index
    },
    openStart() {
      this.$router.push('/tradingCenter')
    },
    download() {
      window.open('https://isecret.im/', '_blank');
    }
  }
}
</script>
