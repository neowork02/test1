<template>
  <div class="left-wrap">
    <nav class="nav-wrap small">
      <div class="nav-top">
        <button class="icon menu" @click="navButton()"></button>
        <strong class="nav-title">UI MENU</strong>
      </div>
      <div class="nav-list-wrap">
        <ul class="toggle-wrap">
          <li
            v-for="(item, index) in navItems"
            :key="index"
            class="toggle-list"
          >
            <a @click="navActive($event)">{{ item.name }}</a>
            <ul>
              <li v-for="(childMenu, index) in item.subMenuList" :key="index">
                <router-link :to="childMenu.url">
                  {{ childMenu.name }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "leftMenu",

  data() {
    return {
      navItems: [],
      menuItems: []
    };
  },

  created() {
    this.$eventBus.$on("left-menu", this.onReceiveMenu);
  },

  methods: {
    onReceiveMenu(nav) {
      this.navItems = nav[0];
    },
    navButton() {
      this.$emit("toggle-nav");
    },
    navActive(e) {
      e.target
        .closest(".toggle-wrap")
        .querySelectorAll(".toggle-list")
        .forEach(el => {
          el.classList.remove("on");
        });

      e.target.parentNode.classList.add("on");
    }
  }
};
</script>

<style scoped></style>
