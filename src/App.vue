<template>
  <div id="app" v-cloak>
    <router-view/>
    <!-- 调用底部tabbar组件 -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Tabbar from '@/components/Tabbar';
  export default {
    components:{
      Tabbar
    }
  };
</script>

<style>
/*@import "../src/assets/libs/css/reset.css";*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin:0 auto;*/
  width:750px;
  overflow:hidden;
}
[v-cloak] {
  display:none;
}
</style>
