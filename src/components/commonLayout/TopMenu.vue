<template>
  <header class="header-wrap">
    <div class="header-inner">
      <div>
        <h1 class="header-logo">MIFS</h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "topMenu",

  data() {
    return {
      navItems: []
    };
  },

  created() {
    this.$eventBus.$on("topMenu", this.onReceiveMenu);
  },

  methods: {
    onReceiveMenu(nav) {
      this.navItems = nav[0];
    }
  }
};
</script>

<style scoped></style>
