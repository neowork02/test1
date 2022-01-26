<template>
  <button
    v-if="hiddenFlag"
    :class="cls"
    type="button"
    @click="clickButton($event)"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "BasicButton",
  props: {
    cls: { type: String, default: "" },
    operations: { type: [String, Array], default: "" },
    activeType: { type: String, default: "" },
  },
  data() {
    return {
      menuOperation: "",
    };
  },
  computed: {
    disabled() {
      if (this.$_.isEmpty(this.operations)) {
        return false;
      }
      return !(
        this.activeType === "H" ||
        (this.activeFlag && this.activeType === "D")
      );
    },
    hiddenFlag() {
      if (this.$_.isEmpty(this.operations)) {
        return true;
      }

      return (
        this.activeType === "D" || (this.activeFlag && this.activeType === "H")
      );
    },
    activeFlag() {
      if (this.$_.isEmpty(this.menuOperation)) {
        return false;
      }
      const regex = new RegExp(`(${this.menuOperation})`, "i");
      const param =
        typeof this.operations === "string"
          ? this.operations
          : this.operations.join("");

      return regex.test(param);
    },
  },
  created() {
    const activeMenuId = !this.$_.isEmpty(this.$store.state.menu)
      ? this.$store.state.menu.activeTopMenuId
      : "";
    const menuItems = !this.$_.isEmpty(this.$store.state.menu)
      ? this.$store.state.menu.topMenus
      : [];
    const menuItem = menuItems.find(
      (item) => item.RESOURCE_ID === activeMenuId
    );
    if (menuItem) {
      this.menuOperation = (menuItem.OPERATIONS || []).join("|");
    }
  },
  methods: {
    clickButton: function (e) {
      this.$emit("click", e);
    },
  },
};
</script>
