<template>
  <div class="contents-wrap" role="main">
    <content-header :title="title"></content-header>

    <div class="contents-inner">
      <div class="layer-full">
        <div class="code-mirror-wrap">
          <codemirror v-model="source"></codemirror>
        </div>
        <div class="sample-wrap">
          <div class="sample-cont">
            <div class="sample-tit">
              <i class="fa fa-dot-circle-o"></i>
              <strong>
                셀렉트박스 -
                <span>기본</span>
              </strong>
            </div>
            <basic-cmm-cd-select
              v-model="sampleSelect"
              dummy-nm="전체"
              cmm-cd-id="NCB"
              :req-obj="$http"
            ></basic-cmm-cd-select>
          </div>
          <!--//sample-cont -->
          <div class="sample-cont">
            <div class="sample-tit">
              <i class="fa fa-dot-circle-o"></i>
              <strong>
                모달 -
                <span>modal-center</span>
              </strong>
              <span>
                class="
                <span>modal-center</span>"
              </span>
            </div>

            <div class="btn-bottom">
              <basic-input v-model="keyword" div-cls="input-wrap" placeholder="입력하세요." />
              <button class="btn deep" @click="visible = true">조회</button>
            </div>
            <div style="padding-top:15px">
              <textarea v-model="resultData" style="width:200px" rows="7"></textarea>
            </div>
            <BasicCmmCdModal
              :req-obj="$http"
              :cmm-cd-id="keyword"
              :opened.sync="visible"
              @return-data="selectedData"
            />
          </div>
          <!--//sample-cont -->
        </div>
      </div>
    </div>
    <!-- <basic-spinner /> -->
  </div>
</template>

<script>
import { Breadcrumb, ContentHeader } from "@/components/commonLayout";
import BasicInput from "@/components/input/BasicInput";
import { codemirror } from "vue-codemirror";
import BasicCmmCdSelect from "@/components/select/BasicCmmCdSelect";
import BasicCmmCdModal from "@/components/modal/BasicCmmCdModal";
// import BasicSpinner from "@/components/spinner/BasicSpinner";

export default {
  name: "CmmCdDtlModal01",
  components: {
    Breadcrumb,
    ContentHeader,
    BasicInput,
    codemirror,
    BasicCmmCdSelect,
    BasicCmmCdModal,
    // BasicSpinner,
    // BasicCmmCdSelect: () => import("@/components/select/BasicCmmCdSelect"),
    // BasicCmmCdModal: () => import("@/components/modal/BasicCmmCdModal"),
    // BasicSpinner: () => import("@/components/spinner/BasicSpinner"),
  },
  data() {
    return {
      title: "Common Code Modal",
      keyword: "INCLUNTDVCD",
      sampleSelect: "",
      resultData: "",
      visible: false,
      source: `
[공통코드 셀렉트 박스 셋팅 예시]
 <basic-cmm-cd-select v-model="sampleSelect" dummy-nm="전체" cmm-cd-id="1101"></basic-cmm-cd-select>

import BasicCmmCdSelect from "@/components/select/BasicCmmCdSelect";

export default {
  name: "CmmCdDtlModal01",
  components: {
    BasicCmmCdSelect,
  },
  data() {
    return {
      sampleSelect: "", // 값을 받을 변수 셋팅  
    };
  },
};

// [공통코드 팝업 셋팅 예시]
	<div>
	  <basic-input v-model="keyword" div-cls="input-wrap" placeholder="입력하세요." />
	  <button class="btn deep" @click="visible = true">조회</button>
	</div>
	<div>
	  <textarea v-model="resultData" style="width:200px" rows="7"></textarea>
  </div>
  cmm-cd-id : 공통ID, :opened.sync : 모달 DP 플래그, @return-data: 리턴받을 값을 컨트롤 하는 콜백함수
	<BasicCmmCdModal
	  :cmm-cd-id="keyword"
	  :opened.sync="visible"
	  @return-data="selectedData"
  />

import BasicInput from "@/components/input/BasicInput"; 

export default {
  name: "CmmCdDtlModal01",
  components: {
    BasicInput,
    BasicCmmCdModal: () => import("@/components/modal/BasicCmmCdModal"),
  },
  data() {
    return {
      title: "Common Code Modal",
      keyword: "", // 코드ID가 입력될 텍스트박스
      resultData: "", // 반환될 결과 셋팅
      visible: false,  // 모달 DP여부
    };
  },
  methods: {
    selectedData(data) { // 콜백 메소드 정의 data 변수는 선택한 공통코드 목록 결과를 전달함
      this.resultData = data;
    },
  },
};
  
`,
    };
  },
  methods: {
    selectedData(data) {
      this.resultData = data;
    },
  },
};
</script>
