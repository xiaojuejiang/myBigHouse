<template>
  <div id="app">
    <itcast v-model="activeName">
      <itcastPane label="用户管理" name="first">用户管理</itcastPane>
      <itcastPane label="配置管理" name="second">配置管理</itcastPane>
      <itcastPane label="角色管理" name="third">角色管理</itcastPane>
      <itcastPane label="定时任务补偿" name="fourth">定时任务补偿</itcastPane>
    </itcast>

    <br>
    <hr>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>

import itcast from "./components/itcast"

export default {
  name: "App",
  data() {
    return {
      // num:10,
      // currentTabComponent:'HelloWorld'
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  },
  components: {
    itcast
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
button{
  border: 0;
  outline: none;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
}
</style>
