<template>
  <!-- 整个主界面的容器 -->
  <div class="container">
    <el-container class="home-container">
      <!-- 头部 -->
      <el-header height="60px" class="home-header">
        <!-- 头部logo -->
        <div class="header">
          <img src="https://www.nsu.edu.cn/img/logo.png" alt="">
        </div>
        <!-- 退出登录按钮 -->
        <el-button type="info" @click="loginOut">退出登录</el-button>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <!-- 侧边导航栏 -->
          <el-menu class="el-menu-vertical-demo"
            background-color="#ccc" text-color="#fff" active-text-color="#ffd04b" :router="true">
            <!-- 教师管理 -->
            <!-- <el-menu-item index="/teachersman">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>教师管理</span>
              </template>
            </el-menu-item> -->
            <!-- 班级管理 -->
            <!-- <el-menu-item index="/classman">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>班级管理</span>
              </template>
            </el-menu-item> -->
            <!-- 查看反馈 -->
            <!-- <el-menu-item index="/viewfeedback">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>查看反馈</span>
              </template>
            </el-menu-item> -->
          </el-menu>
        </el-aside>
        <!-- 内容主体区域 -->
        <el-main>
          <!-- 主页子路由展示区域 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    // 退出登录
    loginOut () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.container {
  height: 100%;
}

.home-container {
  height: 100%;
}

.home-header {
  background-color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home-header img {
  height: 60px;
}

.el-aside {
  background-color: #ccc;
}

.home-main {
  height: 100%;
}
</style>
