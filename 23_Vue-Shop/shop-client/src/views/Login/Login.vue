<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:" :class="{on : loginWay}" @click="loginWay = true">短信登录</a>
          <a href="javascript:" :class="{on : !loginWay}" @click="loginWay = false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <!--短信登录-->
          <div :class="{on : loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!isPhone" class="get_verification" :class="{on: isPhone}" @click.prevent="getCode">
                {{computeTime ? '已发送(' + computeTime + 's)': '获取验证码'}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="6" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:">《用户服务协议》</a>
            </section>
          </div>
          <!--密码登录-->
          <div :class="{on : !loginWay}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <!--<input :type="showPwd ? 'text' : 'password'" maxlength="8" placeholder="密码" v-model="pwd">-->
                <input type="text" maxlength="8" placeholder="密码" v-model="pwd" v-if="showPwd">
                <input type="password" maxlength="8" placeholder="密码" v-model="pwd" v-else>
                <div class="switch_button" :class="showPwd ? 'on' : 'off'" @click="showPwd = !showPwd">
                  <div class="switch_circle" :class="{on: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="4" placeholder="验证码" v-model="captcha">
                <!--<img class="get_verification" src="./images/captcha.svg" alt="captcha">-->
                <img class="get_verification" :src="reqCaptcha" alt="captcha" @click="getCaptcha" ref="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:" class="about_us">关于我们</a>
      </div>
      <!--返回上一页-->
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"></AlertTip>
  </section>
</template>

<script>
  import AlertTip from '../../components/AlertTip/AlertTip'
  import api from '../../api'

  export default {
    components: {AlertTip},
    data() {
      return {
        loginWay: true, // true：短信登录；false：密码登录
        computeTime: 0, // 计时的时间
        showPwd: false, // 是否显示密码
        phone: '', // 手机号
        code: '', // 手机验证码
        name: '', // 手机/邮箱/用户名
        pwd: '', // 密码
        captcha: '', // 图形验证码
        alertText: '', // 提示文本
        alertShow: false, // 是否显示警告框
        reqCaptcha: api.reqCaptcha // 一次性验证码请求地址
      }
    },
    computed: {
      isPhone() {
        return /^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/.test(this.phone)
      }
    },
    methods: {
      // 异步获取短信验证码
      async getCode() {
        // 如果当前没有计时
        if (!this.computeTime) { // this.computeTime === 0
          // 启动倒计时，默认30s
          this.computeTime = 30
          this.intervalId = setInterval(() => {
            this.computeTime--
            if (!this.computeTime) {
              clearInterval(this.intervalId)
            }
          }, 1000)

          // 发送ajax请求（向指定手机号发送验证码短信）
          const result = await api.reqSendCode(this.phone)
          if (result.code === 1) { // 发送验证码失败
            // 显示提示
            this.showTip(result.msg)
            // 停止倒计时
            if (this.computeTime) {
              this.computeTime = 0
              clearInterval(this.intervalId)
              // 重置为0
              this.intervalId = 0
            }
          }
        }
      },
      // 显示AlertTip
      showTip(alertText) {
        this.alertShow = true
        this.alertText = alertText
      },
      // 关闭AlertTip
      closeTip() {
        this.alertShow = false
        this.alertText = ''
      },
      // 获取一个新的图片验证码
      /*getCaptcha(event) {
        // 每次指定的src要不一样，此方式其他方法调用不了
        event.target.src = this.reqCaptcha + '?time=' + Date.now()
      },*/
      getCaptcha() {
        // 每次指定的src要不一样
        this.$refs.captcha.src = this.reqCaptcha + '?time=' + Date.now()
        // 清空验证码
        this.captcha = ''
      },
      // 异步登录
      async login() {
        let result
        // 前台表单验证
        if (this.loginWay) { // 短信登录
          const {isPhone, phone, code} = this
          if (!isPhone) {
            // 手机号不正确
            this.showTip('手机号不正确')
            return
          }
          if (!/^\d{6}$/.test(code)) {
            // 验证码必须是6位数字
            this.showTip('验证码必须是6位数字')
            return
          }
          // 发送ajax请求短信登录
          result = await api.reqSmsLogin(phone, code)
        } else { // 密码登录
          const {name, pwd, captcha} = this
          if (!name) {
            // 必须指定用户名
            this.showTip('必须指定用户名')
            return
          }
          if (!pwd) {
            // 密码必须指定
            this.showTip('密码必须指定')
            return
          }
          if (!captcha) {
            // 验证码必须指定
            this.showTip('验证码必须指定')
            return
          }
          // 发送ajax请求密码登录
          result = await api.reqPwdLogin(name, pwd, captcha)
        }

        // 停止倒计时
        if (this.computeTime) {
          this.computeTime = 0
          clearInterval(this.intervalId)
          // 重置为0
          this.intervalId = 0
        }

        // 根据结果数据处理
        if (result.code === 0) {
          const user = result.data
          // 将user保存到vuex的state
          this.$store.dispatch('recordUser', user)
          // 去个人中心界面
          this.$router.replace('/profile')
        } else {
          this.showTip(result.msg)
          // 刷新验证码
          this.getCaptcha()
        }
      }
    }
  }
</script>

<style scoped>
  .loginContainer {
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .loginContainer .loginInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;
  }
  .loginContainer .loginInner .login_header .login_logo {
    font-size: 40px;
    font-weight: bold;
    color: #02a774;
    text-align: center;
  }
  .loginContainer .loginInner .login_header .login_header_title {
    padding-top: 40px;
    text-align: center;
  }
  .loginContainer .loginInner .login_header .login_header_title > a {
    color: #333;
    font-size: 14px;
    padding-bottom: 4px;
  }
  .loginContainer .loginInner .login_header .login_header_title > a:first-child {
    margin-right: 40px;
  }
  .loginContainer .loginInner .login_header .login_header_title > a.on {
    color: #02a774;
    font-weight: 700;
    border-bottom: 2px solid #02a774;
  }
  .loginContainer .loginInner .login_content > form > div {
    display: none;
  }
  .loginContainer .loginInner .login_content > form > div.on {
    display: block;
  }
  .loginContainer .loginInner .login_content > form > div input {
    width: 100%;
    height: 100%;
    padding-left: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: 0;
    font: 400 14px Arial;
  }
  .loginContainer .loginInner .login_content > form > div input:focus {
    border: 1px solid #02a774;
  }
  .loginContainer .loginInner .login_content > form > div .login_message {
    position: relative;
    margin-top: 16px;
    height: 48px;
    font-size: 14px;
    background: #fff;
  }
  .loginContainer .loginInner .login_content > form > div .login_message .get_verification {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border: 0;
    color: #ccc;
    font-size: 14px;
    background: transparent;
  }
  .loginContainer .loginInner .login_content > form > div .login_message .get_verification.on {
    color: #000;
  }
  .loginContainer .loginInner .login_content > form > div .login_verification {
    position: relative;
    margin-top: 16px;
    height: 48px;
    font-size: 14px;
    background: #fff;
  }
  .loginContainer .loginInner .login_content > form > div .login_verification .switch_button {
    font-size: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: background-color 0.3s, border-color 0.3s;
    padding: 0 6px;
    width: 30px;
    height: 16px;
    line-height: 16px;
    color: #fff;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
  .loginContainer .loginInner .login_content > form > div .login_verification .switch_button.off {
    background: #fff;
  }
  .loginContainer .loginInner .login_content > form > div .login_verification .switch_button.off .switch_text {
    float: right;
    color: #ddd;
  }
  .loginContainer .loginInner .login_content > form > div .login_verification .switch_button.on {
    background: #02a774;
  }
  .loginContainer .loginInner .login_content > form > div .login_verification .switch_button > .switch_circle {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 16px;
    height: 16px;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  .loginContainer .loginInner .login_content > form > div .login_verification .switch_button > .switch_circle.on {
    transform: translateX(27px);
  }
  .loginContainer .loginInner .login_content > form > div .login_hint {
    margin-top: 12px;
    color: #999;
    font-size: 14px;
    line-height: 20px;
  }
  .loginContainer .loginInner .login_content > form > div .login_hint > a {
    color: #02a774;
  }
  .loginContainer .loginInner .login_content > form .login_submit {
    display: block;
    width: 100%;
    height: 42px;
    margin-top: 30px;
    border-radius: 4px;
    background: #4cd96f;
    color: #fff;
    text-align: center;
    font-size: 16px;
    line-height: 42px;
    border: 0;
  }
  .loginContainer .loginInner .login_content .about_us {
    display: block;
    font-size: 12px;
    margin-top: 20px;
    text-align: center;
    color: #999;
  }
  .loginContainer .loginInner .go_back {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
  }
  .loginContainer .loginInner .go_back > .iconfont {
    font-size: 20px;
    color: #999;
  }
</style>
