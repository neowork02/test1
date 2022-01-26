import Vue from "vue";

export default Vue.extend({
  template: `
        <span class="flex center">
            <button style="height: 20px; line-height: 0.5" v-on:click="invokeParentMethod" class="btn btn-info">버튼</button>
        </span>
    `,
  data: function() {
    return {};
  },
  beforeMount() {},
  mounted() {},
  methods: {
    invokeParentMethod() {
      alert("click test");
    },
    invokeParentMethod2() {
      this.params.context.componentParent.methodFromParent(
        `Row: ${this.params.node.rowIndex}, Col: ${
          this.params.colDef.headerName
        }`
      );
    }
  }
});
