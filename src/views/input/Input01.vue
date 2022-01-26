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
                  <strong>input:text - <span>기본</span></strong>
                  <span> class="<span>input-wrap</span>" </span>
                </div>

                <basic-input div-cls="input-wrap" placeholder="입력하세요." />
              </div>

              <div class="sample-cont">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>input:text - <span>form style</span></strong>
                  <span> class="<span>input-wrap</span>" </span>
                  <span> class="<span>input-wrap flex-none</span>" </span>
                  <span> val="<span>표적1</span>" </span>
                  <span> type="<span>number</span>" </span>
                  <span><span>readonly</span></span>
                  <span><span>disabled</span></span>
                </div>

                <div class="form-wrap">
                  <div class="label-wrap">
                    <div class="label-row">
                      <div class="label-tit label-small">영역1</div>

                      <div class="label-list">
                        <basic-input
                          div-cls="input-wrap"
                          placeholder="입력하세요."
                        />
                      </div>
                    </div>
                    <div class="label-row">
                      <div class="label-tit label-small">영역2</div>

                      <div class="label-list">
                        <basic-input
                          div-cls="input-wrap flex-none"
                          placeholder="입력하세요."
                        />
                      </div>
                    </div>

                    <div class="label-row">
                      <div class="label-tit label-small">영역3</div>

                      <div class="label-list">
                        <basic-input
                          div-cls="input-wrap flex-none"
                          val="표적1"
                          readonly
                          placeholder="입력하세요."
                        />
                      </div>
                    </div>

                    <div class="label-row">
                      <div class="label-tit label-small">영역3</div>

                      <div class="label-list">
                        <basic-input
                          div-cls="input-wrap flex-none"
                          val="표적1"
                          disabled
                          placeholder="입력하세요."
                        />
                      </div>
                    </div>

                    <div class="label-row">
                      <div class="label-tit label-small">영역4</div>

                      <div class="label-list">
                        <basic-input
                          div-cls="input-wrap flex-none"
                          val="30"
                          type="number"
                          placeholder="숫자만 입력하세요."
                        />
                      </div>
                    </div>
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
import BasicInput from "@/components/input/BasicInput";
import { codemirror } from "vue-codemirror";

export default {
  name: "Input01",

  data() {
    return {
      title: "Basic Input",
      source: `<template>
  <div>
    <basic-input
      div-cls="input-wrap"
      val="표적1"
      readonly
      placeholder="제목을 입력하세요."
    >
  </div>
</template>
import BasicInput from "@/components/input/BasicInput";

export default {
  data () {
    return {
      searchItem: {
      	searchText01: null
      }
    }
  },

  components: {
    BasicInput
  }
}
`,
    };
  },

  components: {
    Breadcrumb,
    ContentHeader,
    BasicInput,
    codemirror,
  },

  methods: {},
};
</script>

<style scoped></style>
