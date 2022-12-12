<template>
  <!-- 整个登录界面的容器 -->
  <div class="login_container">
    <!-- 登录窗口 -->
    <div class="login_box">
      <!-- 登录的标题 -->
      <div class="login_title">登录</div>
      <!-- 登录表单 -->
      <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" label-width="0px" class="login_form">
        <!-- 用户名输入框 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <!-- 密码输入框 -->
        <el-form-item prop="password" style="margin-bottom: 0">
          <el-input v-model="loginForm.password" placeholder="请输入密码" :show-password="true"></el-input>
        </el-form-item>
        <!-- 注册和忘记密码的路由跳转 -->
        <div class="btns">
          <span @click="register">新用户注册</span>
          <span @click="forgetPassword">忘记密码？</span>
        </div>
        <!-- 登录按钮，发送登录请求 -->
        <el-form-item class="login_btn_item" style="margin-top: 22px">
          <el-button type="primary" class="login_btn" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data () {
    return {
      // 登录表单数据
      loginForm: {
        username: '',
        password: ''
      },
      // 登录的校验规则
      loginFormRules: {}
    }
  },
  methods: {
    // 登录功能
    login () {
      this.$router.push('/home')
    },
    // 注册路由跳转
    register () {
      this.$router.push('/register')
    },
    // 忘记密码路由跳转
    forgetPassword () {
      this.$router.push('/forgetPassword')
    }
  }
}
</script>

<style scoped>
.login_container {
  background-color: #eee;
  height: 100%;
}

.login_box {
  width: 400px;
  height: 330px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 0 0 1px 1.5px #ddd;
}

.login_title {
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  color: #409eff;
}

.btns {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #ccc;
  margin-top: 5px;
  cursor: pointer;
}

.login_btn_item {
  width: 100%;
  display: flex;
  justify-content: center;
}

.login_btn {
  width: 200px;
  border-radius: 20px;
}

</style>
