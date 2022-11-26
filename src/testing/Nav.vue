<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <img src="@/assets/poke/001.png" alt="" slot="icon" />
        科技
      </mt-tab-item>
      <mt-tab-item id="2">
        <img src="../assets/poke/004.png" alt="" slot="icon" />
        数码
      </mt-tab-item>
      <mt-tab-item id="3">
        <img src="../assets/poke/007.png" alt="" slot="icon" />
        军事
      </mt-tab-item>
      <mt-tab-item id="4">
        <img src="../assets/poke/025.png" alt="" slot="icon" />
        音乐
      </mt-tab-item>
    </mt-navbar>
    <!-- 底部选项卡 -->
    <mt-tabbar v-model="tabSelected">
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
      tabSelected: 'index',
    };
  },
};
</script>

<style lang="scss" scoped></style>
