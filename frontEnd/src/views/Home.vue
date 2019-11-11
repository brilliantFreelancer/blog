<template>
  <div class="fullscreen">
    <el-container style="margin: 15px 55px">
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-main>
          <transition name="el-fade-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '../components/header/Header';

export default {
  components: {
    Header,
  },
};
</script>
