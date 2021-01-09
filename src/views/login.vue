<template>
  <div @keyup.enter="loginTo">
    <div class="login-w">
      <div class="left-w">
        <h3 class="left-title m-title">{{$t('header.text19')}}</h3>
        <div class="p-a" v-for="(item, index) in $t('newsArr')" :key="index">
          <div class="title">{{item.title}}</div>
<!--          <div v-html="item.content" class="content" v-if="index === 0"></div>-->
        </div>
      </div>
      <div class="right-w">
        <h3 class="right-title m-title" v-show="isShowLogin">{{$t('header.text20')}}</h3>
        <div v-show="isShowLogin">
          <p class="p-a">{{$t('header.text21')}}</p>
          <div class="input-a"><input type="text" :placeholder="$t('header.text22')" v-model.trim="userName"></div>
          <div class="input-a"><input type="password" :placeholder="$t('header.text23')" v-model.trim="userPwd"></div>
          <div class="err-c">{{errMsg}}</div>
          <div class="btn" @click="loginTo" :class="{'loadingbtn': loadingShow}">
            <img src="../assets/img/common/loading.gif" alt="" v-show="loadingShow">
            <span>{{$t('header.text20')}}</span>
          </div>
        </div>
        <div v-show="!isShowLogin">
          <p class="text1">{{$t('news.text12')}}</p>
          <div class="qrcode-m">
            <div id="qrcode-t" v-show="urlQrcode" ref="qrcodeContainer"></div>
            <div class="error-qrcode" v-show="qrcodeErr" @click="refreshCode">{{$t('news.text10')}}</div>
          </div>
        </div>

        <div class="m-w" v-show="!isShowLogin">
          <div class="img-box">
            <img src="@/assets/img/common/secret_logo.svg" alt="">
          </div>
          <p class="desc">{{$t('news.text12')}}</p>
          <div class="btn-login" @click="mobileLogin" v-show="!isFiled">
            <img src="@/assets/img/common/loading.gif" alt="" v-show="isSHow">
            <span>{{$t('news.text12')}}</span>
          </div>
          <div v-show="isFiled" @click="getQrcode(3)">{{$t('news.text11')}}</div>
        </div>
        <div v-show="isFiled" @click="getQrcode(3)">{{$t('news.text11')}}</div>
<!--        <div class="f-b pc-b">-->
<!--          <a href="https://trade.secretworth.com/#/register" class="a-c" target="_blank">{{$t('header.text26')}}</a>-->
<!--          <a href="https://trade.secretworth.com/#/getBackPwd" class="a-c" target="_blank">{{$t('header.text25')}}</a>-->
<!--        </div>-->
<!--        <div class="f-b m-b">-->
<!--          <a href="https://mtrade.secretworth.com/#/register" class="a-c" target="_blank">{{$t('header.text26')}}</a>-->
<!--          <a href="https://mtrade.secretworth.com/#/forget" class="a-c" target="_blank">{{$t('header.text25')}}</a>-->
<!--        </div>-->
        <a href="https://trade.secretworth.com/#/home/holdings"  target="_blank" ref="pcBtn"></a>
<!--        <a href="https://mtrade.secretworth.com/#/hold" target="_blank" ref="mBtn"></a>-->
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import '@/assets/js/jquery.qrcode.min'
	export default {
		data() {
			return {
        loadingShow: false,
        isSHow: false,
        userName: '',
        userPwd: '',
        errMsg: '',
        urlQrcode: '',
        qrcodeErr: false,
        isShowLogin: false,
        isFiled: false,
        code2d: ''
      }
		},
    created () {
      let type = 3
      if (window.innerWidth > 1200) {
        type = 3
      } else {
        type = 4
      }
      this.getQrcode(type)
    },
    mounted () {
      const _this = this
      let type = 3
      if (window.innerWidth > 1200) {
        type = 3
      } else {
        type = 4
      }
      this.timer = setInterval(() => {
        _this.loginQrCode(type)
        _this.second += 5
        if (this.second > 30) {
          this.qrcodeErr = true
          clearInterval(this.timer)
        }
      }, 5000)
    },
    methods: {
      mobileLogin () {
        this.isSHow = true
        var u = navigator.userAgent
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
        let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
        if (this.code2d) {
          this.isSHow = false
          this.toApp = `secret://h5-login?code=${this.code2d}`
          if (isiOS) {
            window.location.href = `secret://h5-login?code=${this.code2d}`
          } else if (isAndroid) {
            // 安卓终端使用iframe
            let iFrame
            iFrame = document.createElement('iframe')
            iFrame.setAttribute('src', `secret://h5-login?code=${this.code2d}`)
            iFrame.setAttribute('style', 'display:none;')
            iFrame.setAttribute('height', '0px')
            iFrame.setAttribute('width', '0px')
            iFrame.setAttribute('frameborder', '0')
            document.body.appendChild(iFrame)
            // 发起请求后这个 iFrame 就没用了，所以把它从 dom 上移除掉
            setTimeout(() => {
              iFrame.parentNode.removeChild(iFrame)
              iFrame = null
            }, 2000)
          } else {
            let iFrame
            iFrame = document.createElement('iframe')
            iFrame.setAttribute('src', `secret://h5-login?code=${this.code2d}`)
            iFrame.setAttribute('style', 'display:none;')
            iFrame.setAttribute('height', '0px')
            iFrame.setAttribute('width', '0px')
            iFrame.setAttribute('frameborder', '0')
            document.body.appendChild(iFrame)
            // 发起请求后这个 iFrame 就没用了，所以把它从 dom 上移除掉
            setTimeout(() => {
              document.body.removeChild(iFrame)
              iFrame = null
            }, 2000)
          }
          var checkOpen = function (cb) {
            var _clickTime = +(new Date())

            function check(elsTime) {
              if (elsTime > 3000 || document.hidden || document.webkitHidden) {
                cb(1)
              } else {
                cb(0)
              }
            }
            // 启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
            var _count = 0,
              intHandle
            intHandle = setInterval(function () {
              _count++
              var elsTime = +(new Date()) - _clickTime
              if (_count >= 100 || elsTime > 3000) {
                clearInterval(intHandle)
                check(elsTime)
              }
            }, 20);
          }
          // checkOpen(function (opened) {
          //   let universalLink = 'https://fir.im/secrettest'
          //   // APP没有打开成功  并且开启自动跳转到下载页
          //   if (opened === 0) {
          //     location.href = universalLink
          //   }
          // })
        }
      },
      refreshCode () {
        this.urlQrcode = ''
        this.code2d = ''
        this.getQrcode(3)
        this.timer2 = setInterval(() => {
          this.loginQrCode(3)
          this.second += 5
          if (this.second > 30) {
            this.qrcodeErr = true
            clearInterval(this.timer2)
          }
        }, 5000)
      },
      getQrcode (type) {
        this.$fetch.post(`/user/getAppLoginQrCode`, {
          type: type
        }).then((res) => {
          if (res.success) {
            this.second = 0
            let returnstr = JSON.parse(res.data.returnstr).data
            this.urlQrcode = returnstr.url + returnstr.code2d
            const _this = this
            this.qrcodeErr = false
            if (_this.urlQrcode) {
              $('#qrcode-t').html('')
              $('#qrcode-t').qrcode({
                render: 'canvas', //     table方式
                width: 200, //            宽度
                height: 200, //            高度
                text: _this.urlQrcode //      任意内容
              })
            }
            this.code2d = returnstr.code2d
          } else if (res.resultCode === '11111'){
            this.isShowLogin = true
          } else {
            this.isFiled = true
          }
        })
      },
      loginQrCode (type) {
        if (this.code2d) {
          this.$fetch.post(`/user/appScanLogin`, {
            type: type,
            code2d: this.code2d
          }).then(res => {
            console.log(res)
            if (res.success && !res.msg) {
              this.$fetch.post('/user/balance').then(res => {
              })
              if (window.innerWidth > 1200) {
                window.location.href = 'https://trade.secretworth.com/#/home'
              } else {
                window.location.href = 'https://mtrade.secretworth.com/#/home'
              }
            }
          })
        }
      },
      loginTo () {
        this.errMsg = ''
        if (this.userName === '') {
          this.errMsg = this.$t('header.text22')
          return
        }
        if (this.userPwd === '') {
          this.errMsg = this.$t('header.text23')
          return
        }
        this.loadingShow = true
        if (this.userName.trim() !== '' && this.userPwd.trim() !== '') {
          this.$fetch.post('/user/userlogin', {
            username: this.userName,
            password: this.userPwd
          }).then((res) => {
            this.loadingShow = false
            if (res.success) {
              if (window.innerWidth > 1200) {
                this.$refs.pcBtn.click()
              }else {
                window.location.href = 'https://mtrade.secretworth.com/#/hold'
                // this.$refs.mBtn.click()
              }
            } else {
              this.errMsg = res.msg
            }
          }).catch(() => {
            this.loadingShow = false
          })
        }
      }
    }
	}
</script>

<style scoped lang="stylus">
.main-container
  min-height calc(100vh - 330px) !important
.qrcode-m{
  width: 200px;
  height: 200px;
  position: relative;
  margin: 0 auto;
  display: block;
  @media screen and (max-width: 1200px){
    display: none;
  }
  .error-qrcode{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
  }
}
#qrcode-t{
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.m-w{
  display: none;
  width: 100%;
  padding: 30px 20px 30px 20px;
  @media screen and (max-width: 1200px){
    display: block;
  }
  .img-box{
    width: 100px;
    margin: 0 auto;
    img{
      width: 100%;
    }
  }
  .desc{
    text-align: center;
    font-size: 16px;
    color: #848f95;
    margin: 15px 0 80px;
  }
  .btn-login{
    width: 100%;
    height: 50px;
    background-color: #fc534c;
    border-radius: 6px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px
    img{
      width: 30px;
      margin-right: 10px;
    }
  }
}
.f-b
  margin-top: 20px
  display: flex
  align-items center
  justify-content space-between
  @media screen and (max-width: 768px)
    font-size 16px
  .a-c
    padding: 10px 0
.pc-b
  @media screen and (max-width: 1200px)
    display: none
  @media screen and (min-width: 1200px)
    display: flex
    font-size: 16px
.m-b
  @media screen and (max-width: 1200px)
    display: flex
  @media screen and (min-width: 1200px)
    display: none
.login-w
  display: flex
  width: 1300px
  margin: 30px auto 0
  box-shadow 0 0 5px #eee
  padding: 80px
  @media screen and (max-width: 1300px)
    width: 100%
    padding: 20px
    box-shadow none
  .m-title
    font-size: 38px
    color #2d3436
    @media screen and (max-width: 1200px)
      font-size: 20px
  .p-a
    font-size: 20px
    color #636e72
    margin-bottom: 20px
    .title
      font-size: 20px
      color  #636e72
      margin-bottom: 20px
    .content
      font-size: 16px
      color #636e72
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      >>> p
        font-size: 0
      >>> span
        color #636e72 !important
  .left-w
    width: 500px
    padding-right: 100px
    @media screen and (min-width: 1200px)
      display: block
    @media screen and (max-width: 1200px)
      display: none
    .left-title
      margin-bottom: 30px
  .right-w
    flex 1
    padding-left: 100px
    border-left: 1px solid #dfe6e9
    @media screen and (max-width: 1200px)
      padding: 0 10px
      border-left none
    .text1
      font-size: 16px
      margin: 20px 0
      @media screen and (max-width: 1200px)
        display: none
    .p-a
      margin: 30px 0
    .err-c
      color #ff7675
      font-size: 14px
      margin-bottom: 10px
    .input-a
      width:  100%
      @media screen and (max-width: 1200px)
        width: 100%
      input
        width: 100%
        height: 68px
        padding-left: 20px
        border-radius 4px
        font-size: 16px
        border: 1px solid #dfe6e9
        margin-bottom: 30px
        @media screen and (max-width: 1200px)
          height: 42px
          margin-bottom: 10px
          font-size: 14px
    .btn
      width: 100%
      height: 68px
      cursor pointer
      display: flex
      align-items center
      justify-content center
      background-color: #ff7675
      border-radius 4px
      font-size: 16px
      border: 1px solid #dfe6e9
      color #fff
      &.loadingbtn
        pointer-events none
      @media screen and (max-width: 1200px)
        width: 100%
        height: 42px
      img
        width: 30px
        display: block
        margin-right: 10px
</style>
