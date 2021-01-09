<template>
  <div class="newsDetails-w">
    <div class="fixtop">
      <div class="icon" @click="$router.push({path: '/news',query:{navIndex: 1}})" >
        <img src="../assets/img/common/back.svg" alt="">
      </div>
    </div>
    <div class="wrap-two">
      <div class="goback" @click="$router.push({path: '/news',query:{navIndex: 1}})">&lt; {{$t('news.text8')}}</div>
      <div class="title">{{newsDetails.text1}}</div>
<!--      <div class="date">{{newsDetails.text02}}{{newsDetails.text020}}</div>-->
      <div class="date" style="color: #ccc">{{time}}</div>
      <div class="img">

        <img :src="require('../assets/img/newPic3/' + (this.$t('newsData2').length - cIndex -1) + '.jpg')" alt=""
             v-if="(this.$t('newsData2').length - cIndex -1 ) !== 15 && (this.$t('newsData2').length - cIndex -1) !== 12 && (this.$t('newsData2').length - cIndex) !== 0 ">
        <img :src="require('../assets/img/newPic3/' + (this.$t('newsData2').length - cIndex -1) + '.png')" alt="" v-if="(this.$t('newsData2').length - cIndex -1) === 15 || (this.$t('newsData2').length - cIndex -1) === 12">
        <img :src="require('../assets/img/newPic3/' + (this.$t('newsData2').length - cIndex -1) + '.svg')" alt="" v-if="(this.$t('newsData2').length - cIndex -1) === 0">


<!--        <img :src="require('../assets/img/newsA/' + cIndex + '.jpg')" alt=""  v-if="cIndex !== 5 && cIndex !== 8">-->
<!--        <img :src="require('../assets/img/newsA/' + cIndex + '.png')" alt="" v-if="cIndex === 5">-->
<!--        <img :src="require('../assets/img/newsA/' + cIndex + '.jpeg')" alt="" v-if="cIndex === 8">-->
      </div>
      <div class="desc">
        <p v-html="replaceString(newsDetails.text3)"></p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
			  newsDetails: '',
        cIndex: -1,
        time: this.$route.query.time
      }
		},
    created() {
		  let _this = this
		  if (_this.$route.query.index || Number(_this.$route.query.index) === 0) {
        _this.cIndex = Number(_this.$route.query.index)
        _this.newsDetails = _this.$t('newsData2')[Number(_this.$route.query.index)]
      }
    },
    methods: {
      replaceString (str) {
        if (str) {
          // str = str.replace(/\n/g,"<br>")
          str = '<p>' + str.replace(/\n*$/g, '').replace(/\n/g, '</p> <p>') + '</p>'
          return str
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
.newsDetails-w
  .wrap-two
    width: 800px
    margin: 0 auto
    @media screen and (max-width: 1200px)
      width: 100%
      padding: 30px 10px 0 10px
    .goback
      padding: 60px 0 30px
      font-size: 16px
      color #6287de
      cursor pointer
      display: block
      @media screen and (max-width: 1200px)
        display: none
    .title
      font-weight: bold
      font-size: 30px;
      color #000
      @media screen and (max-width: 1200px)
        font-size: 16px
    .date
      font-size: 16px
      color #999
      margin-top: 24px
      @media screen and (max-width: 1200px)
        margin-top: 10px
    .img
      margin: 80px 0 40px
      @media screen and (max-width: 1200px)
        margin: 30px 0 20px
      img
        width: 100%
        display: block
    .desc
      font-size: 16px
      color #000
      line-height: 1.5
      margin-bottom: 100px
      @media screen and (max-width: 1200px)
        font-size: 14px
        margin-bottom: 50px
      >>> p
        margin-bottom: 20px
  .fixtop
    height: 70px;
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;
    z-index: 100
    box-shadow:0 0 5px rgba(0, 0, 0, 0.2);
    @media screen and (min-width: 1200px)
      display: none
    @media screen and (max-width: 1200px)
      display: block
    .icon
      height: 100%
      width 120px
      display: flex
      align-items center
      padding: 0 20px
      img
        @media screen and (max-width: 1200px)
          width: 20px
</style>
