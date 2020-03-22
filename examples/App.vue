<template>
  <div id="app">
    <top-nav></top-nav>
    <div class="dxz-content">
      <left-menu></left-menu>
      <router-view class="right-content"></router-view>
    </div>
  </div>
</template>
<script>
import LeftMenu from "@/components/Menu";
import TopNav from "@/components/Nav";

export default {
  name: "app",
  data() {
    return {};
  },
  components: { LeftMenu, TopNav }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  height: 100%;
  flex-direction: column;
  .dxz-content {
    flex: 1;
    padding: 0 100px;
    display: flex;
    .right-content {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 20px;
      overflow: auto;
    }
  }
}
</style>