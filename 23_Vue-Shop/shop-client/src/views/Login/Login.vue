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
        <form>
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
                <input type="tel" maxlength="8" placeholder="密码" v-model="pwd">
                <div class="switch_button off">
                  <div class="switch_circle"></div>
                  <span class="switch_text">...</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="4" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="./images/captcha.svg" alt="captcha">
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
  </section>
</template>

<script>
  export default {
    data() {
      return {
        loginWay: true, // true：短信登录；false：密码登录
        computeTime: 0, // 计时的时间
        phone: '', // 手机号
        code: '', // 手机验证码
        name: '', // 手机/邮箱/用户名
        pwd: '', // 密码
        captcha: '' // 一次性验证码

      }
    },
    computed: {
      isPhone() {
        return /^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/.test(this.phone)
      }
    },
    methods: {
      getCode() {
        // 如果当前没有计时
        if (!this.computeTime) { // this.computeTime === 0
          // 启动倒计时，默认30s
          this.computeTime = 30
          const intervalId = setInterval(() => {
            this.computeTime--
            if (!this.computeTime) {
              clearInterval(intervalId)
            }
          }, 1000)

          // 发送ajax请求（向指定手机号发送验证码短信）

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
