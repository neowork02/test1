<template>
  <div class="contents-wrap" role="main">
    <content-header :title="title"></content-header>

    <div class="contents-inner">
      <div class="layer-full">
        <div class="code-mirror-wrap">
          <codemirror v-model="source"></codemirror>
        </div>
        <div class="scroll-wrap layer-full">
          <div class="scroll-inner layer-full">
            <div class="sample-wrap layer-full" style="min-height: 400px;">
              <div class="sample-cont layer-full">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>Layout Basic 01</strong>
                  <span>
                    <span><strong>[공통]</strong></span> 부모의 높이가 있어야
                    함. 또는 <span>flex box</span> 속성이라
                    <span>높이가 비율</span>로 잡혀 있어야 함.
                  </span>
                  <span> class="<span>layer-full</span>" </span>
                  <span> class="<span>layer-full layer-border</span>" </span>
                </div>

                <div class="layer-full row dark">
                  <div class="layer-full">
                    <div class="layer-full layer-border"></div>
                    <div class="layer-full layer-border"></div>
                  </div>
                  <div class="layer-full">
                    <div class="layer-full layer-border"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sample-wrap layer-full" style="min-height: 400px;">
              <div class="sample-cont layer-full">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>Layout Basic 02</strong>
                  <span> class="<span>layer-full</span>" </span>
                  <span> class="<span>layer-full layer-border</span>" </span>
                </div>

                <div class="layer-full row dark">
                  <div class="layer-full">
                    <div class="layer-full layer-border"></div>
                  </div>
                  <div class="layer-full">
                    <div class="layer-full layer-border"></div>
                    <div class="layer-full layer-border"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sample-wrap layer-full" style="min-height: 400px;">
              <div class="sample-cont layer-full">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>Layout Basic 03</strong>
                  <span> class="<span>layer-full</span>" </span>
                  <span> class="<span>layer-full layer-border</span>" </span>
                </div>

                <div class="layer-full column">
                  <div class="layer-full dark">
                    <div class="layer-full layer-border"></div>
                  </div>
                  <div class="layer-full row dark">
                    <div class="layer-full">
                      <div class="layer-full layer-border"></div>
                    </div>
                    <div class="layer-full">
                      <div class="layer-full layer-border"></div>
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
import { codemirror } from "vue-codemirror";

export default {
  name: "Layout01",

  data() {
    return {
      title: "Layout01",
      source: `
[Layout Basic 01]
<div class="layer-full row">
  <div class="layer-full">
    <div class="layer-full layer-border"></div>
    <div class="layer-full layer-border"></div>
  </div>
  <div class="layer-full">
    <div class="layer-full layer-border"></div>
  </div>
</div>

[Layout Basic 02]
<div class="layer-full row">
  <div class="layer-full">
    <div class="layer-full layer-border"></div>
  </div>
  <div class="layer-full">
    <div class="layer-full layer-border"></div>
    <div class="layer-full layer-border"></div>
  </div>
</div>

[Layout Basic 03]
<div class="layer-full column">
  <div class="layer-full">
    <div class="layer-full layer-border"></div>
  </div>
  <div class="layer-full row">
    <div class="layer-full">
      <div class="layer-full layer-border"></div>
    </div>
    <div class="layer-full">
      <div class="layer-full layer-border"></div>
    </div>
  </div>
</div>
`
    };
  },

  components: {
    Breadcrumb,
    ContentHeader,
    codemirror
  },

  methods: {}
};
</script>

<style scoped></style>
