<template>
  <div id="app" class="main_container">
    <div class="layer-wrap">
      <!-- top navigation start -->
      <top-menu />
      <!-- top navigation end -->

      <div class="layer-contents" v-bind:class="{ 'left-open': leftOpen }">
        <!-- sidebar left start -->
        <left-menu v-on:toggle-nav="leftOpen = !leftOpen" />
        <!-- sidebar left end -->

        <!-- page content start -->
        <router-view></router-view>
        <!-- page content end -->
      </div>
    </div>
  </div>
</template>

<script>
import menuData from "@/json/menuJson.json";
import { LeftMenu, TopMenu } from "@/components/commonLayout";

export default {
  name: "Layout",
  components: {
    LeftMenu,
    TopMenu
  },

  data() {
    return {
      leftOpen: false,
      leftNav: [],
      topNav: []
    };
  },

  computed: {
    name() {
      return this.$route.name || this.$route.matched[2].name;
    },

    list() {
      return this.$route.matched.slice(0, 3);
    },

    menuList() {
      return menuData.dataList.map(items => {
        return items;
      });
    }
  },

  mounted() {
    this.leftNav = [menuData.sampleMenuList];
    this.$eventBus.$emit("left-menu", this.leftNav);
  }
};
</script>
