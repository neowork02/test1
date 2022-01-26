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
            <div class="sample-wrap layer-full" style="min-height: 300px">
              <div class="sample-cont layer-full">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong> 정렬 01</strong>

                  <span> <span>flex1</span> 자동채움</span>
                  <span> class="<span>flex1 flex-c</span>" </span>
                  <span> <span>flex-c</span> 수평/수직 중앙 정렬 </span>
                  <span> <span>flex-s-c</span> 수직 중앙 정렬 </span>
                  <span> <span>flex-c-s</span> 수평 중앙 정렬 </span>
                  <span> <span>flex-e-s</span> 수평 영역 끝으로 </span>
                  <span>
                    <span>flex-e-c</span> 수평 영역 끝으로 / 수직 중앙정렬
                  </span>
                  <span> <span>flex-c-s</span> 수평/수직 영역 끝으로 </span>
                </div>

                <div class="layer-full row dark">
                  <div class="layer-full">
                    <div class="layer-full layer-border">
                      <div class="flex1 flex-c">
                        <div class="layer-border">center</div>
                      </div>
                    </div>
                  </div>
                  <div class="layer-full">
                    <div class="layer-full layer-border">
                      <div class="flex1 flex-s-c">
                        <div class="layer-border">center</div>
                      </div>
                    </div>
                  </div>
                  <div class="layer-full">
                    <div class="layer-full layer-border">
                      <div class="flex1 flex-c-s">
                        <div class="layer-border">center</div>
                      </div>
                    </div>
                  </div>
                  <div class="layer-full">
                    <div class="layer-full layer-border">
                      <div class="flex1 flex-e-s">
                        <div class="layer-border">end</div>
                      </div>
                    </div>
                  </div>
                  <div class="layer-full">
                    <div class="layer-full layer-border">
                      <div class="flex1 flex-e-c">
                        <div class="layer-border">end</div>
                      </div>
                    </div>
                  </div>
                  <div class="layer-full">
                    <div class="layer-full layer-border">
                      <div class="flex1 flex-e">
                        <div class="layer-border">end</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sample-wrap layer-full" style="min-height: 300px">
              <div class="sample-cont layer-full">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong> 정렬 02 - <span> 좌우 끝 정렬</span> </strong>

                  <span> class="<span>flex1 flex-between</span>" </span>
                  <span> <span>flex1 flex-between-c</span> 수직 중앙 </span>
                </div>

                <div class="layer-full row dark">
                  <div class="layer-full">
                    <div class="layer-full layer-border">
                      <div class="flex1 flex-between">
                        <div class="layer-border flex-c">left</div>
                        <div class="layer-border flex-c">right</div>
                      </div>
                    </div>
                  </div>
                  <div class="layer-full">
                    <div class="layer-full layer-border">
                      <div class="flex1 flex-between-c">
                        <div class="layer-border">left</div>
                        <div class="layer-border">right</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sample-wrap layer-full" style="min-height: 300px">
              <div class="sample-cont layer-full">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong> 정렬 03 - <span>여러가지 정렬</span> </strong>

                  <span> class="<span>flex1 flex-around</span>" </span>
                  <span> <span>flex1 flex-around</span> 일정간격 </span>
                  <span> <span>flex-around-c</span> 일정간격 / 수직 정렬 </span>
                  <span> <span>flex-s-e</span> 영역 끝으로 </span>
                </div>

                <div class="layer-full row dark">
                  <div class="layer-full">
                    <div class="layer-full layer-border">
                      <div class="flex1 flex-around">
                        <div class="layer-border">div1</div>
                        <div class="layer-border">div2</div>
                        <div class="layer-border flex-c">div3</div>
                        <div class="layer-border">div4</div>
                        <div class="layer-border flex-s-e">div5</div>
                        <div class="layer-border flex-s-e">div6</div>
                        <div class="layer-border flex-s-e">div7</div>
                      </div>
                    </div>
                  </div>
                  <div class="layer-full">
                    <div class="layer-full layer-border">
                      <div class="flex1 flex-around-c">
                        <div class="layer-border">div1</div>
                        <div class="layer-border">div2</div>
                        <div class="layer-border">div3</div>
                        <div class="layer-border">div4</div>
                        <div class="layer-border">div5</div>
                        <div class="layer-border">div6</div>
                        <div class="layer-border">div7</div>
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
import { codemirror } from "vue-codemirror";

export default {
  name: "Layout03",

  data() {
    return {
      title: "Layout03 - 정렬",
      source: `
[정렬 01]
<div class="layer-full row">
  <div class="layer-full">
    <div class="layer-full layer-border">
      <div class="flex1 flex-c">
        <div class="layer-border">center</div>
      </div>
    </div>
  </div>
  <div class="layer-full">
    <div class="layer-full layer-border">
      <div class="flex1 flex-s-c">
        <div class="layer-border">center</div>
      </div>
    </div>
  </div>
  <div class="layer-full">
    <div class="layer-full layer-border">
      <div class="flex1 flex-c-s">
        <div class="layer-border">center</div>
      </div>
    </div>
  </div>
  <div class="layer-full">
    <div class="layer-full layer-border">
      <div class="flex1 flex-e-s">
        <div class="layer-border">end</div>
      </div>
    </div>
  </div>
  <div class="layer-full">
    <div class="layer-full layer-border">
      <div class="flex1 flex-e-c">
        <div class="layer-border">end</div>
      </div>
    </div>
  </div>
  <div class="layer-full">
    <div class="layer-full layer-border">
      <div class="flex1 flex-e">
        <div class="layer-border">end</div>
      </div>
    </div>
  </div>
</div>

[정렬 02]
<div class="layer-full row">
  <div class="layer-full">
    <div class="layer-full layer-border">
      <div class="flex1 flex-between">
        <div class="layer-border flex-c">left</div>
        <div class="layer-border flex-c">right</div>
      </div>
    </div>
  </div>
  <div class="layer-full">
    <div class="layer-full layer-border">
      <div class="flex1 flex-between-c">
        <div class="layer-border">left</div>
        <div class="layer-border">right</div>
      </div>
    </div>
  </div>
</div>

[정렬 03]
<div class="layer-full row">
  <div class="layer-full">
    <div class="layer-full layer-border">
      <div class="flex1 flex-around">
        <div class="layer-border">div1</div>
        <div class="layer-border">div2</div>
        <div class="layer-border flex-c">div3</div>
        <div class="layer-border">div4</div>
        <div class="layer-border flex-s-e">div5</div>
        <div class="layer-border flex-s-e">div6</div>
        <div class="layer-border flex-s-e">div7</div>
      </div>
    </div>
  </div>
  <div class="layer-full">
    <div class="layer-full layer-border">
      <div class="flex1 flex-around-c">
        <div class="layer-border">div1</div>
        <div class="layer-border">div2</div>
        <div class="layer-border">div3</div>
        <div class="layer-border">div4</div>
        <div class="layer-border">div5</div>
        <div class="layer-border">div6</div>
        <div class="layer-border">div7</div>
      </div>
    </div>
  </div>
</div>
`,
    };
  },

  components: {
    Breadcrumb,
    ContentHeader,
    codemirror,
  },

  methods: {},
};
</script>

<style scoped></style>
