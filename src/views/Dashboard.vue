<template>
  <div class="contents-wrap" role="main">
    <content-header :title="title"></content-header>

    <div class="contents-inner">
      <div class="layer-full">
        <div class="scroll-wrap">
          <div class="scroll-inner">
            <div class="sample-wrap">
              <div class="sample-cont">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>Vue.js Version</strong>
                  <span>"2.6.12"</span>
                </div>

                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>Node Version</strong>
                  <span>"12.18.2"</span>
                </div>

                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>Npm Version</strong>
                  <span>"6.14.5"</span>
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

export default {
  name: "Dashboard",

  data() {
    return {
      title: "Dashboard",
    };
  },

  components: {
    Breadcrumb,
    ContentHeader,
  },

  methods: {},
};
</script>

<style scoped>
</style>
