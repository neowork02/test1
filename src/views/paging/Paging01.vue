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
                  <strong>paging - <span>기본</span></strong>
                </div>

                <basic-paging-form :page-count="10" :first-last-button="true">
                </basic-paging-form>
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
import BasicPagingForm from "@/components/paging/BasicPagingForm";
import { codemirror } from "vue-codemirror";

export default {
  name: "Paging01",

  data() {
    return {
      title: "Basic Paging",
      checked: false,
      queryParams: {},
      searchItem: {},
      codes: {},
      source: `<template>
  <div>
    <basic-paging-form
      :page-count="10"
      :first-last-button="true">
    </basic-paging-form> 
  </div>
</template>
import BasicPagingForm from '@/components/paging/BasicPagingForm'

export default {
  data () {
    return {
    }
  },

  components: {
    BasicPagingForm
  }
}
`
    };
  },

  components: {
    Breadcrumb,
    ContentHeader,
    BasicPagingForm
  }
};
</script>
