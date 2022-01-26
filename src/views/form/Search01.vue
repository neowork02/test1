<template>
  <div class="contents-wrap" role="main">
    <content-header :title="title"></content-header>

    <div class="contents-inner">
      <div class="layer-full">
        <div class="scroll-wrap">
          <div class="scroll-inner">
            <div class="sample-wrap">
              <div class="sample-cont">
                <search-form-01></search-form-01>
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
import SearchForm01 from "@/components/search/SearchForm01";

export default {
  name: "Form01",

  data() {
    return {
      title: "Basic Search Form",
      checked: false,
      queryParams: {},
      searchItem: {},
      codes: {},
    };
  },

  components: {
    Breadcrumb,
    ContentHeader,
    SearchForm01,
  },

  methods: {
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

<style scoped>
</style>
