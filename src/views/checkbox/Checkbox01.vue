<template>
  <div class="contents-wrap" role="main">
    <content-header :title="title"></content-header>

    <div class="contents-inner">
      <div class="layer-full">
        <div class="code-mirror-wrap">
          <codemirror v-model="source"></codemirror>
        </div>
        <div class="scroll-wrap">
          <div class="scroll-inner">
            <div class="sample-wrap">
              <div class="sample-cont">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>체크박스 - <span>기본</span></strong>
                  <span> class="<span>input-bg-wrap input-bx</span>" </span>
                </div>

                <!-- Checkbox Component : start -->
                <basic-checkbox
                  v-model="searchItem.searchDateType"
                  div-cls="input-bg-wrap input-bx"
                  name="code1"
                  :dtl-cd-list="codes.checkboxList1"
                >
                </basic-checkbox>
                <!-- end : Checkbox Component -->
              </div>

              <div class="sample-cont">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>체크박스 - <span>간격</span></strong>
                  <span>
                    class="<span>input-bg-wrap input-wrap-align</span>"
                  </span>
                </div>

                <!-- Checkbox Component : start -->
                <basic-checkbox
                  v-model="searchItem.searchDateType"
                  div-cls="input-bg-wrap input-wrap-align"
                  name="code2"
                  :dtl-cd-list="codes.checkboxList2"
                >
                </basic-checkbox>
                <!-- end : Checkbox Component -->
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
import BasicCheckbox from "@/components/checkbox/BasicCheckbox";
import { codemirror } from "vue-codemirror";

export default {
  name: "Checkbox01",

  data() {
    return {
      title: "Basic Check Box",
      checked: false,
      queryParams: {},
      searchItem: {
        searchDateType: []
      },
      codes: {
        checkboxList1: [
          { cd: "C01_01", nm: "1일" },
          { cd: "C01_02", nm: "3일" },
          { cd: "C01_03", nm: "1주" },
          { cd: "C01_04", nm: "1달" }
        ],
        checkboxList2: [
          { cd: "C02_01", nm: "1일" },
          { cd: "C02_02", nm: "3일" },
          { cd: "C02_03", nm: "1주" },
          { cd: "C02_04", nm: "1달" }
        ]
      },
      source: `<template>
  <div>
    <basic-checkbox
    v-model="searchItem.searchDateType"
    div-cls="input-bg-wrap input-bx"
    cls=""
    name="code3"
    :dtl-cd-list="codes.checkboxList1">
    </basic-checkbox>
  </div>
</template>
import BasicCheckbox from '@/components/checkbox/BasicCheckbox'

export default {
  data () {
    return {
	    codes: {
        checkboxList1: [
          { cd: "C01_01", nm: "1일" },
          { cd: "C01_02", nm: "3일" },
          { cd: "C01_03", nm: "1주" },
          { cd: "C01_04", nm: "1달" }
        ],
        checkboxList2: [
          { cd: "C02_01", nm: "1일" },
          { cd: "C02_02", nm: "3일" },
          { cd: "C02_03", nm: "1주" },
          { cd: "C02_04", nm: "1달" }
        ]
      }
    }
  },

  components: {
    BasicCheckbox
  }
}
`
    };
  },

  components: {
    Breadcrumb,
    ContentHeader,
    BasicCheckbox,
    codemirror
  },

  methods: {
    onSearch() {
      const { searchDate01 } = this.searchItem;
      let submitItems = {
        searchDate01
      };

      alert(JSON.stringify(this.searchItem));
    }
  }
};
</script>

<style scoped></style>
