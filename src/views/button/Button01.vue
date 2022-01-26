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
                  <strong>버튼 크기</strong>
                </div>
                <div class="btn-bottom space">
                  <!-- btn default -->
                  <basic-button cls="btn" @click="clickButton">default 버튼</basic-button>
                  <!-- btn small -->
                  <basic-button cls="btn small" @click="clickButton">small 버튼</basic-button>
                  <!-- btn blue -->
                  <basic-button cls="btn ex-small" @click="clickButton">ex-small 버튼</basic-button>
                </div>
              </div>

              <div class="sample-cont">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>버튼 색상</strong>
                </div>
                <div class="btn-bottom space">
                  <!-- btn default -->
                  <basic-button cls="btn" @click="clickButton">default 버튼</basic-button>
                  <!-- btn grey -->
                  <basic-button cls="btn grey" @click="clickButton">grey 버튼</basic-button>
                  <!-- btn blue -->
                  <basic-button cls="btn blue" @click="clickButton">blue 버튼</basic-button>
                  <!-- btn blue2 -->
                  <basic-button cls="btn blue2" @click="clickButton">blue2 버튼</basic-button>
                  <!-- btn green -->
                  <basic-button
                    cls="btn green"
                    :operations="['P', 'R']"
                    active-type="D"
                    @click="clickButton"
                  >권한적용 케이스</basic-button>

                  <!-- btn deep -->
                  <basic-button cls="btn deep" @click="clickButton">deep 버튼</basic-button>
                  <!-- btn yellow -->
                  <basic-button cls="btn yellow" @click="clickButton">yellow 버튼</basic-button>
                </div>
              </div>

              <div class="sample-cont">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>
                    버튼 정렬 -
                    <span>right</span>
                  </strong>
                  <span>
                    class="
                    <span>btn-bottom space right</span>"
                  </span>
                </div>
                <div class="btn-bottom space right">
                  <!-- btn default -->
                  <basic-button cls="btn green" @click="clickButton">
                    <i class="fa fa-search"></i> 조회
                  </basic-button>
                </div>
              </div>

              <div class="sample-cont">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>
                    버튼 정렬 -
                    <span>center</span>
                  </strong>
                  <span>
                    class="
                    <span>btn-bottom space center</span>"
                  </span>
                </div>
                <div class="btn-bottom space center">
                  <!-- btn default -->
                  <basic-button cls="btn green" @click="clickButton">
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
</template>

<script>
import { Breadcrumb, ContentHeader } from "@/components/commonLayout";
import BasicButton from "@/components/button/BasicButton";
import { codemirror } from "vue-codemirror";

export default {
  name: "Button01",

  data() {
    return {
      title: "Basic Button",
      checked: false,
      queryParams: {},
      searchItem: {
        searchDateType: [],
      },
      source: `<template>
  <div class="btn-bottom space">
    <basic-button
      cls="btn small blue"
      @click="clickButton"
    >
    </basic-button>
     <basic-button
        cls="btn green"
        :operations="['CUD']"
        active-type="D"
        @click="clickButton"
      >권한적용 케이스</basic-button>
  </div>
</template>
import BasicButton from '@/components/button/BasicButton'

export default {
  data () {
    return {
    }
  },

  components: {
    BasicButton
  }
}
`,
    };
  },

  components: {
    Breadcrumb,
    ContentHeader,
    BasicButton,
    codemirror,
  },

  methods: {
    clickButton() {
      alert("Click Button");
    },

    onSearch() {
      const { searchDate01 } = this.searchItem;
      let submitItems = {
        searchDate01,
      };

      alert(JSON.stringify(this.searchItem));
    },
  },
};
</script>

<style scoped></style>
