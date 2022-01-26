<template>
  <div :class="divCls">
    <select
      ref="ref"
      :class="cls"
      @change="bind($event.target.value)"
      @input="bind($event.target.value)"
      :id="id||comCd"
      :name="name||comCd"
      :disabled="isDisabled"
      :value="value"
    >
      <option v-if="dummyNm" :value="dummyCd||''">{{dummyNm}}</option>
      <option
        v-for="selectOption in selectList"
        :value="selectOption[valueProp||'cd']"
        :key="selectOption[valueProp||'cd']"
      >{{selectOption[textProp||'nm']}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "BasicSelect",
  props: [
    "divCls",
    "cls",
    "value",
    "id",
    "name",
    "comCd",
    "valueProp",
    "textProp",
    "dummyCd",
    "dummyNm",
    "disabled",
    "excludes",
    "includes",
    "selectList",
  ],
  computed: {
    isDisabled: function () {
      return (
        this.disabled ||
        (Array.isArray(this.disabled) &&
          this.disabled.includes(this.name || this.comCd))
      );
    },
  },

  methods: {
    isVisible: function (value) {
      const hiddenCond =
        (this.excludes && this.excludes.includes(value)) ||
        (this.includes && !this.includes.includes(value));
      return !hiddenCond;
    },
    bind: function (value) {
      this.$emit("input", value);
    },
  },
};
</script>
