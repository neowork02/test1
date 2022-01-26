<template>
  <div class="contents-wrap" role="main">
    <content-header :title="title"></content-header>

    <div class="contents-inner">
      <div class="layer-full">
        <div class="scroll-wrap">
          <div class="scroll-inner">
            <div class="sample-wrap">
              <div class="sample-cont">
                <div class="table-outer line">
                  <div class="table-wrap th-w">
                    <table>
                      <tbody>
                        <tr>
                          <th>검색날짜</th>
                          <td>
                            <div class="date-wrap flex-none">
                              <basic-date-picker
                                v-model="searchItem.searchDate01"
                                :config="options"
                              >
                              </basic-date-picker>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>검색유형</th>
                          <td>
                            <basic-select
                              v-model="searchItem.searchSpaceCode"
                              dummy-nm="--선택--"
                              name="selectName002"
                              select-type="select002"
                              :select-list="codes.selectList"
                            >
                            </basic-select>
                          </td>
                        </tr>
                        <tr>
                          <th>센서유형</th>
                          <td>
                            <basic-input
                              div-cls="input-wrap"
                              placeholder="숫자만 입력"
                              type="number"
                            ></basic-input>
                          </td>
                        </tr>
                        <tr>
                          <th>센서이름</th>
                          <td>
                            <basic-input
                              div-cls="input-wrap"
                              placeholder="센서이름 입력"
                            ></basic-input>
                          </td>
                        </tr>
                        <tr>
                          <th>기간설정</th>
                          <td>
                            <basic-checkbox
                              v-model="searchItem.searchDateType"
                              div-cls="input-bg-wrap input-bx"
                              :dtl-cd-list="codes.checkboxList"
                            >
                            </basic-checkbox>
                          </td>
                        </tr>
                        <tr>
                          <th>일시유형</th>
                          <td>
                            <basic-radio
                              div-cls="input-bg-wrap"
                              name="code1"
                              :radio-list="codes.radioList"
                            >
                            </basic-radio>
                          </td>
                        </tr>
                        <tr>
                          <th>검색기간</th>
                          <td>
                            <div class="date-wrap flex-none">
                              <basic-date-picker
                                v-model="searchItem.searchDateFrom"
                                :config="options"
                              >
                              </basic-date-picker>
                              <div class="dash">~</div>
                              <basic-date-picker
                                v-model="searchItem.searchDateTo"
                                :config="options"
                              >
                              </basic-date-picker>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="btn-bottom right">
                    <basic-button cls="btn blue"> 초기화 </basic-button>
                    <basic-button cls="btn green">
                      <i class="fa fa-search"></i> 조회
                    </basic-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Breadcrumb, ContentHeader } from "@/components/commonLayout";
import BasicSelect from "@/components/select/BasicSelect";
import BasicRadio from "@/components/radio/BasicRadio";
import BasicCheckbox from "@/components/checkbox/BasicCheckbox";
import BasicDatePicker from "@/components/picker/BasicDatePicker";
import BasicModal from "@/components/modal/BasicModal";
import BasicInput from "@/components/input/BasicInput";
import BasicButton from "@/components/button/BasicButton";

export default {
  name: "SearchForm02",

  data() {
    return {
      title: "Basic Dashboard Form",
      queryParams: {},
      senserName: null,
      searchItem: {
        searchDate01: null,
        searchAreaCode: null,
        searchSpaceCode: null,
        searchSenserCode: null,
        searchSenserName: null,
        searchDateType: [],
        searchDateModeType: null,
        searchDateFrom: null,
        searchDateTo: null,
        searchDateOption: null,
        searchSenserModeType: null,
      },

      modal: {
        open: false,
        type: "",
        title: "",
        subTitle: "",
        message: "",
        action: "",
      },

      view: {
        selectExcludes: [],
        radioExcludes: [],
        radioDisabledOpts: [],
        disabled: false,
      },
      codes: {
        radioList: [
          { cd: "R01", nm: "작성일시" },
          { cd: "R02", nm: "전파일시" },
        ],
        checkboxList: [
          { cd: "C01", nm: "오늘" },
          { cd: "C02", nm: "7일" },
          { cd: "C03", nm: "1개월" },
          { cd: "C04", nm: "3개월" },
          { cd: "C04", nm: "전체" },
        ],
        selectList: [
          { cd: 1, nm: "option 1" },
          { cd: 2, nm: "option 2" },
          { cd: 3, nm: "option 3" },
        ],
      },
      popup: {
        senserType: null,
        radioList: [
          { cd: "S01", nm: "센서 타입 01" },
          { cd: "S02", nm: "센서 타입 02" },
          { cd: "S03", nm: "센서 타입 03" },
        ],
      },
      items: [],
      pageInfo: {
        page: 1,
        size: 10,
        resultCount: 1,
        totalCount: 1,
      },
      contents: [],
      date: new Date(),
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false,
        locale: "ko",
      },
      inValidForm: false,

      apiVersion: null,
    };
  },

  components: {
    ContentHeader,
    BasicSelect,
    BasicRadio,
    BasicCheckbox,
    BasicDatePicker,
    BasicModal,
    BasicInput,
    BasicButton,
  },

  methods: {
    fetchList(params = {}) {
      const defaultParams = {
        page: this.pageInfo.page,
        size: this.pageInfo.size,
        q: this.queryParams,
      };

      alert(JSON.stringify(this.searchItem));

      //this.$http.get('/api/v1.0/test/list', { ...defaultParams, ...params })
      //.then((res) => {
      //  this.contents = (res.data.contents);
      //  this.$eventBus.$emit('search-result', this.contents)
      //})
      //.catch((err) => {
      //  console.log(err)
      //  alert('오류가 발생 하였습니다')
      //});
    },

    onReset() {
      Object.keys(this.searchItem).forEach((key) => {
        if (key === "searchDateType") {
          this.searchItem[key] = [];
        } else {
          this.searchItem[key] = null;
        }
      });
      this.queryParams = {};
      this.fetchList();
    },

    onSearch() {
      const { searchDate01 } = this.searchItem;
      let submitItems = {
        searchDate01,
      };

      const validate = this.$valid.all(submitItems);
      this.inValidForm = !validate;

      //if (validate) {
      this.queryParams = {};

      Object.keys(this.searchItem).forEach((key) => {
        if (this.searchItem[key] !== null && this.searchItem[key] !== "") {
          this.queryParams[key] = this.searchItem[key];
        }
      });

      this.fetchList({ page: 1 });
      //}
    },

    btnOpenPopup() {
      const title = "수집중점관리";
      const subTitle = "수집중점";
      const message = "";
      this.modal = {
        open: true,
        type: "view",
        title: title,
        message: message,
        action: this.doCheck,
      };
    },

    doCheck() {
      this.modal.open = false;
      this.searchItem.searchSenserModeType = this.popup.senserType;
    },

    closeModal() {
      this.modal.open = false;
    },
  },

  watch: {
    senserName(val) {
      this.senserName = this.$util.isNotSpecialCharacter(val);
      this.searchItem.searchSenserName = this.senserName;
    },
  },
};
</script>
