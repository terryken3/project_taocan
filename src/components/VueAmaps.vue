<template>
    <div id="app">
        <h3 class="title">
            {{ msg }}
        </h3>
        <div class="amap-wrapper">
            <el-amap :events="events" :vid="'amap-vue'" class="amap-box">
            </el-amap>
        </div>
    </div>
</template>
<style>
.amap-wrapper {
  width: 500px;
  height: 500px;
}
</style>
<script>
export default{
  data () {
    let self = this;
    return {
      msg: '定位中',
      events:{
        init(o) {
          o.getCity((result)=>{
            console.log(result.city);
            self.msg = result.city;
          });
        }
      }
    }
  }
};
</script>