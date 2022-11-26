<template>
  <div>
    <!-- 映射二级路由内容 -->
    <router-view />
    <div style="height:60px;"></div>
     <!-- 底部选项卡 -->
    <mt-tabbar fixed v-model="tabSelected">
      <mt-tab-item id="index">
        <img
          slot="icon"
          :src="
            require(`../assets/tabbar/index_${
              tabSelected == 'index' ? 1 : 0
            }.png`)
          "
        />
        首页
      </mt-tab-item>
      <mt-tab-item id="me">
        <img
          slot="icon"
          v-show="tabSelected == 'me'"
          src="../assets/tabbar/me_1.png"
        />
        <img
          slot="icon"
          v-show="tabSelected != 'me'"
          src="../assets/tabbar/me_0.png"
          alt=""
        />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '1',
      tabSelected: 'this.$route.path.split("/").pop()',
    };
  },
  watch: {
    tabSelected(to,from) {
      if(to=='index'){
        this.$router.push('/home/index')
      }else if(to=='me'){
        this.$router.push('/home/me')
      }
    }
  }
};

</script>

<style scoped>
</style>
