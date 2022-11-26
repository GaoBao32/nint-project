<template>
  <div>
    <mt-field
      label="用户名"
      placeholder="请输入用户名"
      v-model="username"
      state="success"
    ></mt-field>
    <mt-field
      label="密码"
      placeholder="请输入密码"
      type="password"
      v-model="password"
      state="error"
    ></mt-field>
    <mt-field
      label="手机号"
      placeholder="请输入手机号"
      type="tel"
      v-model="phone"
      state="warning"
      :attr="{ maxlength: 10 }"
    ></mt-field>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
