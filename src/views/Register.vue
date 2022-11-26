<template>
  <div>
    <mt-header title="注册">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/login" slot="right">
        <mt-button>登录</mt-button>
      </router-link>
    </mt-header>
    <!-- 表单 -->
    <mt-field
      label="用户名"
      placeholder="请输入用户名"
      v-model="name"
      @blur.native.capture="checkName"
      :state="nameState"
    ></mt-field>
    <mt-field
      label="密码"
      placeholder="请输入密码"
      type="password"
      :v-model="pwd"
      :state="pwdState"
      @blur.native.capture="checkPwd"
    ></mt-field>
    <mt-field
      label="确认密码"
      placeholder="请确认密码"
      type="password"
      v-model="pwd2"
      :state="pwd2State"
      @blur.native.capture="checkPwd2"
    ></mt-field>
    <mt-button @click="checkForm" type="primary" size="large"
      >快速注册</mt-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      nameState: '',
      pwd: '',
      pwdState: '',
      pwd2: '',
      pwd2State: '',
    };
  },
  methods: {
    checkForm() {
      if(this.checkName() && this.checkPwd() &&this.checkPwd2()) {

      }
    },
    checkPwd2(){
      let exp = /^\d{6}$/
      if(exp.test(this.pwd2) && this.pwd==this.pwdw) {
        this.pwdState = 'success'
        return true
      }else{this.pwdState = 'error'}
      return false
    },
    checkPwd(){
      let exp = /^\d{6}$/
      if(exp.test(this.pwd)) {
        this.pwdState = 'success'
        return true
      }else{this.pwdState = 'error'}
      return false
    },
    checkName() {
      // console.log('用户名:' + this.name);
      let exp = /^\w{6,15}$/;
      if (exp.test(this.name)) {
        this.nameState = 'success';
        return true
      } else {
        this.nameState = 'error';
        return false
      }
    },
  },
};
</script>

<style scoped>
/* *{
  margin: 0;
  padding: 0;
} */
</style>
