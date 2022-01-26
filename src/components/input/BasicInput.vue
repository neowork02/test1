<template>
  <div :class="divCls">
    <input
      :class="cls"
      :placeholder="placeholder"
      @change="bind($event.target.value)"
      :readonly="readonly"
      :disabled="disabled"
      :type="type ? type : 'text'"
    />
  </div>
</template>

<script>
export default {
  name: "BasicInput",

  props: [
    "divCls",
    "cls",
    "placeholder",
    "val",
    "readonly",
    "disabled",
    "type",
  ],

  methods: {
    bind: function (value) {
      this.$emit("input", value);
    },
  },
};
</script>
