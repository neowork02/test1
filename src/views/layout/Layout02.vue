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
            <div class="sample-wrap layer-full" style="min-height: 500px;">
              <div class="sample-cont layer-full">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>
                    Layout Basic 01
                  </strong>

                  <span> <span>flex-none</span> 추가 후 넓이 조정 가능</span>
                  <span>
                    class="<span>flex-none</span>"
                  </span>
                </div>

                <div class="layer-full row dark">
                  <div class="layer-full flex-none" style="width: 180px;">
                    <div class="layer-full layer-border"></div>
                  </div>
                  <div class="layer-full flex-none" style="width: 380px;">
                    <div class="layer-full layer-border"></div>
                  </div>
                  <div class="layer-full">
                    <div class="layer-full layer-border"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sample-wrap layer-full" style="min-height: 500px;">
              <div class="sample-cont layer-full">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>
                    Layout Basic 02
                  </strong>
                  <span><span>flex-none</span> 추가 후 높이 조정 가능</span>
                  <span>
                    <span>색/넓이/높이</span>는 <span>style</span>로 값 추가
                  </span>
                  <span>
                    class="<span>flex-none</span>"
                  </span>
                </div>

                <div class="layer-full row dark">
                  <div class="layer-full flex-none" style="width: 180px;">
                    <div
                      class="layer-full flex-none layer-border"
                      style="height: 80px;"
                    ></div>
                    <div class="layer-full layer-border"></div>
                  </div>
                  <div class="layer-full">
                    <div
                      class="layer-full layer-border"
                      style="background-color: #000;"
                    ></div>
                  </div>
                  <div class="layer-full flex-none" style="width: 180px;">
                    <div class="layer-full">
                      <div class="layer-full layer-border"></div>
                      <div class="layer-full layer-border"></div>
                    </div>
                  </div>
                  <div class="layer-full flex-none" style="width: 180px;">
                    <div class="layer-full">
                      <div
                        class="layer-full flex-none layer-border"
                        style="height: 300px;"
                      ></div>
                      <div
                        class="layer-full layer-border"
                        style="background-color: red;"
                      ></div>
                    </div>
                  </div>
                  <div class="layer-full flex-none" style="width: 280px;">
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
</template>

<script>
import { Breadcrumb, ContentHeader } from "@/components/commonLayout";
import { codemirror } from "vue-codemirror";

export default {
  name: "Layout02",

  data() {
    return {
      title: "Layout02",
      source: `
[Layout Basic 01]
<div class="layer-full row">
  <div class="layer-full flex-none" style="width: 180px;">
    <div class="layer-full layer-border"></div>
  </div>
  <div class="layer-full flex-none" style="width: 380px;">
    <div class="layer-full layer-border"></div>
  </div>
  <div class="layer-full">
    <div class="layer-full layer-border"></div>
  </div>
</div>

[Layout Basic 02]
<div class="layer-full row">
  <div class="layer-full flex-none" style="width: 180px;">
    <div
      class="layer-full flex-none layer-border"
      style="height: 80px;"
    ></div>
    <div class="layer-full layer-border"></div>
  </div>
  <div class="layer-full">
    <div
      class="layer-full layer-border"
      style="background-color: #000;"
    ></div>
  </div>
  <div class="layer-full flex-none" style="width: 180px;">
    <div class="layer-full">
      <div class="layer-full layer-border"></div>
      <div class="layer-full layer-border"></div>
    </div>
  </div>
  <div class="layer-full flex-none" style="width: 180px;">
    <div class="layer-full">
      <div
        class="layer-full flex-none layer-border"
        style="height: 300px;"
      ></div>
      <div
        class="layer-full layer-border"
        style="background-color: red;"
      ></div>
    </div>
  </div>
  <div class="layer-full flex-none" style="width: 280px;">
    <div class="layer-full layer-border"></div>
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
