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
      <option v-for="item in selectList" :value="item.cdVal" :key="item.cdVal">{{ item.cdValNm }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "BasicCmmCdSelect",
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
    "cmmCdId",
    "reqObj",
  ],
  data() {
    return {
      selectList: [],
    };
  },
  computed: {
    isDisabled: function () {
      return (
        this.disabled ||
        (Array.isArray(this.disabled) &&
          this.disabled.includes(this.name || this.comCd))
      );
    },
  },
  watch: {
    cmmCdId: {
      immediate: true,
      handler: "fetchCmmCdDtls",
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
    async fetchCmmCdDtls() {
      if (this.cmmCdId && !this.$_.isEmpty(this.reqObj)) {
        const header = process.env.SYSTEM_DIVISINO_INFO
          ? {}
          : {
              Authorization: "Bearer 1",
              "MIFS-HEAD-FRONTENDID": "1",
              "MIFS-HEAD-GLOBALID": "1",
              "MIFS-HEAD-HOSTIP": "1",
              "MIFS-HEAD-MACADDR": "1",
              "MIFS-HEAD-USERID": "1",
            };
        const response = await this.reqObj.get(
          `/cmm/api/v1.0/cms/code/detail?cdId=${this.cmmCdId}&pageNo=1&pageSize=100`,
          header
        );
        const data = this.getResponeseData(response);
        this.selectList = !this.$_.isEmpty(data) ? data.codeDetailList : [];
      }
    },
    getResponeseData(response) {
      return !this.$_.isEmpty(response) &&
        !this.$_.isEmpty(response.data) &&
        !this.$_.isEmpty(response.data.body)
        ? response.data.body.content
        : null;
    },
  },
};
</script>
