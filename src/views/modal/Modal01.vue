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
              <strong>모달 - <span>modal-center</span></strong>
              <span> class="<span>modal-center</span>" </span>
            </div>

            <div class="btn-bottom">
              <button class="btn deep" @click="modal1 = true">모달1</button>

              <basic-modal v-if="modal1" overlay="overlay">
                <div class="modal-wrap modal-center">
                  <div class="modal-title">
                    <div>
                      <strong>첩보식별내용 등록</strong>
                    </div>
                    <button
                      class="fa fa-close"
                      @click="modal1 = false"
                    ></button>
                  </div>

                  <div class="modal-contents">
                    <div class="modal-inner">
                      내용 <br />
                      내용 <br />
                      내용 <br />
                      내용 <br />
                      내용 <br />
                      내용 <br />
                    </div>
                  </div>

                  <div class="modal-bottom">
                    <div class="btn-bottom right">
                      <button class="btn blue" @click="modal1 = false">
                        저장
                      </button>
                    </div>
                  </div>
                </div>
              </basic-modal>
            </div>
          </div>

          <div class="sample-cont">
            <div class="sample-tit">
              <i class="fa fa-dot-circle-o"></i>
              <strong>모달 - <span>absolute</span></strong>
              <span> :absolute="<span>true</span>" </span>
            </div>

            <div class="btn-bottom relative">
              <button class="btn deep" @click="modal2 = true">모달2</button>

              <basic-modal
                v-if="modal2"
                :absolute="true"
                style="left: 100px;"
              >
                <div class="modal-wrap">
                  <div class="modal-title">
                    <div>
                      <strong>첩보식별내용 등록</strong>
                    </div>
                    <button
                      class="fa fa-close"
                      @click="modal2 = false"
                    ></button>
                  </div>

                  <div class="modal-contents">
                    <div class="modal-inner">
                      내용 <br />
                      내용 <br />
                      내용 <br />
                      내용 <br />
                      내용 <br />
                      내용 <br />
                    </div>
                  </div>

                  <div class="modal-bottom">
                    <div class="btn-bottom right">
                      <button class="btn blue" @click="modal2 = false">
                        저장
                      </button>
                    </div>
                  </div>
                </div>
              </basic-modal>
            </div>
          </div>

          <div class="sample-cont">
            <div class="sample-tit">
              <i class="fa fa-dot-circle-o"></i>
              <strong>드래그 모달 - <span>absolute</span></strong>
              <span> :absolute="<span>true</span>" </span>
              <span> <span>dialog-drag</span> 드래그 가능한 모달</span>
            </div>

            <div class="btn-bottom relative">
              <button class="btn deep" @click="modal3 = true">모달3</button>

              <basic-modal
                v-if="modal3"
                :absolute="true"
                style="left: 100px;"
              >
                <div class="modal-wrap">
                  <dialog-drag style="min-width: 300px;">
                    <div class="modal-title">
                      <div>
                        <strong>첩보식별내용 등록</strong>
                      </div>
                      <button
                        class="fa fa-close"
                        @click="modal3 = false"
                      ></button>
                    </div>

                    <div class="modal-contents">
                      <div class="modal-inner">
                        내용 <br />
                        내용 <br />
                        내용 <br />
                        내용 <br />
                        내용 <br />
                        내용 <br />
                      </div>
                    </div>

                    <div class="modal-bottom">
                      <div class="btn-bottom right">
                        <button class="btn blue" @click="modal3 = false">
                          저장
                        </button>
                      </div>
                    </div>
                  </dialog-drag>
                </div>
              </basic-modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Breadcrumb, ContentHeader } from "@/components/commonLayout";
import BasicModal from "@/components/modal/BasicModal";
import BasicRadio from "@/components/radio/BasicRadio";
import { codemirror } from "vue-codemirror";

import DialogDrag from "vue-dialog-drag";

export default {
  name: "Modal01",

  data() {
    return {
      title: "Basic Modal",
      modal1: false,
      modal2: false,
      modal3: false,
      checked: false,
      queryParams: {},
      searchItem: {
        searchSenserModeType: null
      },
      codes: {
        radioList: [
          { cd: "R01", nm: "작성일시" },
          { cd: "R02", nm: "전파일시" }
        ]
      },
      modal: false,
      popup: {
        senserType: null,
        radioList: [
          { cd: "S01", nm: "센서 타입 01" },
          { cd: "S02", nm: "센서 타입 02" },
          { cd: "S03", nm: "센서 타입 03" }
        ]
      },
      source: `
[center overlay 모달]
<basic-modal v-if="modal1" overlay="overlay">
  <div class="modal-wrap modal-center">
    <div class="modal-title">
      <div>
        <strong>첩보식별내용 등록</strong>
      </div>
      <button
        class="fa fa-close"
        @click="modal1 = false"
      ></button>
    </div>

    <div class="modal-contents">
      <div class="modal-inner">
        내용 <br />
        내용 <br />
        내용 <br />
        내용 <br />
        내용 <br />
        내용 <br />
      </div>
    </div>

    <div class="modal-bottom">
      <div class="btn-bottom right">
        <button class="btn blue" @click="modal1 = false">
          저장
        </button>
      </div>
    </div>
  </div>
</basic-modal>

[absolute 모달]
<basic-modal
  v-if="modal2"
  :absolute="true"
  style="left: 100px;"
>
  <div class="modal-wrap">
    <div class="modal-title">
      <div>
        <strong>첩보식별내용 등록</strong>
      </div>
      <button
        class="fa fa-close"
        @click="modal2 = false"
      ></button>
    </div>

    <div class="modal-contents">
      <div class="modal-inner">
        내용 <br />
        내용 <br />
        내용 <br />
        내용 <br />
        내용 <br />
        내용 <br />
      </div>
    </div>

    <div class="modal-bottom">
      <div class="btn-bottom right">
        <button class="btn blue" @click="modal2 = false">
          저장
        </button>
      </div>
    </div>
  </div>
</basic-modal>

[drag 모달]
<basic-modal
  v-if="modal3"
  :absolute="true"
  style="left: 100px;"
>
  <div class="modal-wrap">
    <dialog-drag style="min-width: 300px;">
      <div class="modal-title">
        <div>
          <strong>첩보식별내용 등록</strong>
        </div>
        <button
          class="fa fa-close"
          @click="modal3 = false"
        ></button>
      </div>

      <div class="modal-contents">
        <div class="modal-inner">
          내용 <br />
          내용 <br />
          내용 <br />
          내용 <br />
          내용 <br />
          내용 <br />
        </div>
      </div>

      <div class="modal-bottom">
        <div class="btn-bottom right">
          <button class="btn blue" @click="modal3 = false">
            저장
          </button>
        </div>
      </div>
    </dialog-drag>
  </div>
</basic-modal>


import BasicModal from '@/components/modal/BasicModal'
import DialogDrag from "vue-dialog-drag";

export default {
  data () {
    return {
      modal1: false,
      modal2: false,
      modal3: false,
    }
  },

  components: {
    BasicModal,
    DialogDrag
  }
}
`
    };
  },

  components: {
    Breadcrumb,
    ContentHeader,
    BasicModal,
    BasicRadio,
    codemirror,
    DialogDrag
  },

  methods: {
    onSearch() {
      const { searchDate01 } = this.searchItem;
      let submitItems = {
        searchDate01
      };

      alert(JSON.stringify(this.searchItem));
    },

    btnOpenPopup() {
      const title = "수집중점관리";
      const subTitle = "수집중점";
      const message = "";
      this.modal = true;
    },

    doCheck() {
      this.modal = false;
      this.searchItem.searchSenserModeType = this.popup.senserType;
    },

    closeModal() {
      this.modal = false;
    }
  }
};
</script>

<style scoped></style>
