<template>
  <div>
    <ag-grid-vue
      :style="colStyle"
      class="ag-theme-alpine"
      v-bind="$attrs"
      :gridOptions="gridOptions"
      :columnDefs="columnDefs"
      :defaultColDef="defaultColDef"
      :rowData="rowData"
      :rowSelection="rowSelection"
      :frameworkComponents="frameworkComponents"
      :editType="editType"
      :enableColResize="enableColResize"
      @grid-ready="onGridReady"
      @row-selected="onRowSelected"
      @selection-changed="onSelectionChanged"
      @cell-value-changed="onCellValueChanged"
      @row-value-changed="onRowValueChanged"
      @cell-double-clicked="onCellDoubleClicked"
    ></ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";

export default {
  props: {
    editType: {
      type: String,
      default: "",
    },
    colStyle: {
      type: String,
      default: "width: 100%; height: 300px;",
    },
    enableColResize: {
      type: Boolean,
      default: true,
    },
    enableSorting: {
      type: Boolean,
      default: true,
    },
    rowSelection: {
      type: String,
      default: "single",
    },
    onRowSubmit: {
      type: Function,
      default: () => {},
    },
    pagination: {
      type: Boolean,
      default: true,
    },
    autoPageSize: {
      type: Boolean,
      default: true,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    columnDefs: {
      type: Array,
      require: true,
      default: [],
    },
    defaultColDef: {
      type: Object,
      require: true,
      default: null,
    },
    rowData: {
      type: Array,
      require: true,
      default: [],
    },
    gridOptions: {
      type: Object,
      require: true,
      default: null,
    },
    frameworkComponents: {
      type: Object,
      require: true,
      default: null,
    },
  },

  components: {
    AgGridVue,
  },

  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {
    onGridReady(params) {},

    onRowSelected(event) {
      if (event.node.selected) {
        this.$emit("row-selected", event.node.id);
      }
    },
    onSelectionChanged(event) {
      var selectedRows = event.api.getSelectedNodes().map(({ data }) => data);
      this.$emit("selected-row", selectedRows);
    },
    onCellValueChanged(event) {
      this.$emit("change-cell", event.data);
    },
    onRowValueChanged(event) {
      this.$emit("change-row", event.data);
    },
    onCellDoubleClicked(event) {
      this.$emit("dbclick-cell", event.data);
    },
  },
};
</script>
