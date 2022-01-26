<template>
  <basic-modal v-if="opened" overlay="overlay">
    <div class="modal-wrap modal-center">
      <div class="modal-title">
        <div>
          <strong>공통 코드</strong>
        </div>
        <button class="fa fa-close" @click="closeModal"></button>
      </div>

      <div class="modal-contents">
        <div class="modal-inner">
          <div class="wrap-search">
            <div class="box-input search-kwd">
              <basic-input
                v-model="inptCdValNm"
                cls="input-kwd"
                div-cls="input-wrap"
                placeholder="입력하세요."
              />
            </div>
            <div class="box-input search-btn">
              <basic-button cls="btn ex-small" @click="searchCdValNm">
                <i class="fa fa-search"></i> 조회
              </basic-button>
            </div>
          </div>
          <basic-grid
            colStyle="width: 100%; height: 520px;"
            :gridOptions="grid.options"
            :defaultColDef="grid.defaultColDef"
            :columnDefs="grid.columnDefs"
            :rowSelection="'multiple'"
            :rowData="cmmCdItems"
            @selected-row="selectedRowListener"
          ></basic-grid>
          <basic-paging-form
            :page-count="page.totPage"
            :first-last-button="true"
            :click-handler="paging"
          ></basic-paging-form>
        </div>
      </div>

      <div class="modal-bottom">
        <div class="btn-bottom center">
          <button class="btn blue" @click="selectComplete">선택</button>
          <button class="btn blue" @click="closeModal">닫기</button>
        </div>
      </div>
    </div>
  </basic-modal>
</template> 

<script>
import BasicButton from "@/components/button/BasicButton";
import BasicGrid from "@/components/grid/BasicGrid";
import BasicModal from "@/components/modal/BasicModal";
import BasicInput from "@/components/input/BasicInput";
import BasicPagingForm from "@/components/paging/BasicPagingForm";
import BasicSelect from "@/components/select/BasicSelect";

const PAGE_SIZE = 10;

export default {
  name: "BasicCmmCdModal",
  components: {
    BasicButton,
    BasicGrid,
    BasicModal,
    BasicInput,
    BasicPagingForm,
    BasicSelect,
  },
  props: {
    opened: { type: Boolean, default: false },
    cmmCdId: { type: String, default: "" },
    reqObj: {},
  },
  data() {
    return {
      title: "BasicCmmCdModal",
      grid: {
        options: {},
        defaultColDef: {
          editable: false,
          sortable: true,
          flex: 1,
          minWidth: 10,
          filter: false,
          resizable: true,
          suppressColumnVirtualisation: true,
        },
        columnDefs: [
          {
            headerName: "",
            field: "",
            headerCheckboxSelection: true,
            checkboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true,
            sortable: false,
            width: 30,
          },
          {
            headerName: "코드값",
            field: "cdVal",
            sortable: true,
          },
          {
            headerName: "코드명",
            field: "cdValNm",
            sortable: true,
          },
        ],
      },
      inputCmmCd: "",
      cmmCdItems: [],
      fetchCmmCdItems: [],
      inptCdValNm: "",
      selectedCmmCdItems: [],
      page: {
        no: 1,
        size: 10,
        totPage: 1,
      },
    };
  },
  watch: {
    cmmCdId: {
      immediate: true,
      handler: function (val) {
        this.inputCmmCd = val;
        this.init();
      },
    },
    opened(isOpened) {
      isOpened && this.init();
    },
  },
  created() {
    this.init();
  },
  beforeMount() {
    this.cmmCdItems = this.$_.cloneDeep(this.fetchCmmCdItems);
  },
  methods: {
    init() {
      if (this.inputCmmCd) {
        this.fetchCmmCdDtls(this.inputCmmCd);
      } else {
        this.cmmCdItems = this.fetchCmmCdItems = [];
      }
    },

    async fetchCmmCdDtls(cdId, pageNo = 1, pageSize = 10) {
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
        `/cmm/api/v1.0/cms/code/detail?cdId=${cdId}&pageNo=${pageNo}&pageSize=${pageSize}`,
        header
      );
      const result = this.getResponeseData(response);
      this.fetchCmmCdItems = this.$_.cloneDeep(result.codeDetailList);
      this.cmmCdItems = this.$_.cloneDeep(result.codeDetailList);

      this.page = {
        no: parseInt(result.pageInfo.pageNo, 10),
        size: parseInt(result.pageInfo.pageSize, 10),
        totPage: parseInt(result.pageInfo.totPage, 10),
      };
    },
    searchCdValNm() {
      this.grid.options.api.setQuickFilter(this.inptCdValNm);
    },
    getResponeseData(response) {
      return !this.$_.isEmpty(response) &&
        !this.$_.isEmpty(response.data) &&
        !this.$_.isEmpty(response.data.body)
        ? response.data.body.content
        : null;
    },
    selectedRowListener(data) {
      this.selectedCmmCdItems = [...data];
    },
    selectComplete() {
      const returnData = this.selectedCmmCdItems.map(({ cdVal, cdValNm }) => ({
        cdVal,
        cdValNm,
      }));
      this.$emit("return-data", JSON.stringify(returnData));
      this.$emit("update:opened", false);
    },
    closeModal() {
      this.$emit("update:opened", false);
      this.inptCdValNm = "";
    },
    paging(pageNo) {
      this.fetchCmmCdDtls(this.inputCmmCd, pageNo);
    },
  },
};
</script>

<style scoped>
.modal-center {
  width: 400px;
}
.wrap-search {
  padding-bottom: 10px;
}
.wrap-search:after {
  display: block;
  clear: both;
  content: "";
  height: 0;
  visibility: hidden;
}
.wrap-search .box-input {
  display: inline-block;
}
.wrap-search .search-kwd {
  width: 200px;
  float: left;
}
.wrap-search .search-btn {
  float: right;
}
</style>
