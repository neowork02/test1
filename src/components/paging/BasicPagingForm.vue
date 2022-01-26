<template>
  <div class="paging-outer">
    <div class="row text-center paging-wrap">
      <button
        v-if="firstLastButton"
        class="btn btn-gray"
        type="submit"
        @click="selectFirstPage()"
        @keyup.enter="selectFirstPage()"
        :class="pageLinkClass"
        :tabindex="firstPageSelected() ? -1 : 0"
        v-html="firstButtonText"
      ></button>
      <button
        v-if="!(firstPageSelected() && hidePrevNext)"
        class="btn btn-gray"
        type="submit"
        @click="prevPage()"
        @keyup.enter="prevPage()"
        :class="prevLinkClass"
        :tabindex="firstPageSelected() ? -1 : 0"
        v-html="prevText"
      ></button>

      <template v-for="(page, index) in pages">
        <button
          :key="index"
          v-if="page.breakView"
          class="btn btn-gray"
          tabindex="0"
        >
          <slot name="breakViewContent">{{ breakViewText }}</slot>
        </button>
        <button
          :key="index"
          v-else-if="page.disabled"
          class="btn btn-gray"
          tabindex="0"
        >
          {{ page.content }}
        </button>
        <button
          :key="index"
          v-else
          @click="handlePageSelected(page.index + 1)"
          @keyup.enter="handlePageSelected(page.index + 1)"
          :class="page.content == selected ? 'btn btn-gray focus' : 'btn btn-gray' "
          tabindex="0"
        >
          {{ page.content }}
        </button>
      </template>

      <button
        v-if="!(lastPageSelected() && hidePrevNext)"
        class="btn btn-gray"
        type="submit"
        @click="nextPage()"
        @keyup.enter="nextPage()"
        :class="nextLinkClass"
        :tabindex="lastPageSelected() ? -1 : 0"
        v-html="nextText"
      ></button>
      <button
        v-if="firstLastButton"
        class="btn btn-gray"
        type="submit"
        @click="selectLastPage()"
        @keyup.enter="selectLastPage()"
        :class="pageLinkClass"
        :tabindex="lastPageSelected() ? -1 : 0"
        v-html="lastButtonText"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number
    },
    pageCount: {
      type: Number,
      required: true
    },
    forcePage: {
      type: Number
    },
    clickHandler: {
      type: Function,
      default: () => {}
    },
    pageRange: {
      type: Number,
      default: 3
    },
    marginPages: {
      type: Number,
      default: 1
    },
    prevText: {
      type: String,
      default: "이전"
    },
    nextText: {
      type: String,
      default: "다음"
    },
    breakViewText: {
      type: String,
      default: "…"
    },
    containerClass: {
      type: String
    },
    pageClass: {
      type: String
    },
    pageLinkClass: {
      type: String
    },
    prevClass: {
      type: String
    },
    prevLinkClass: {
      type: String
    },
    nextClass: {
      type: String
    },
    nextLinkClass: {
      type: String
    },
    breakViewClass: {
      type: String
    },
    breakViewLinkClass: {
      type: String
    },
    activeClass: {
      type: String,
      default: "active"
    },
    disabledClass: {
      type: String,
      default: "disabled"
    },
    noLiSurround: {
      type: Boolean,
      default: false
    },
    firstLastButton: {
      type: Boolean,
      default: false
    },
    firstButtonText: {
      type: String,
      default: "처음"
    },
    lastButtonText: {
      type: String,
      default: "마지막"
    },
    hidePrevNext: {
      type: Boolean,
      default: false
    }
  },

  beforeUpdate() {
    if (this.forcePage === undefined) return;
    if (this.forcePage !== this.selected) {
      this.selected = this.forcePage;
    }
  },

  computed: {
    selected: {
      get: function() {
        return this.value || this.innerValue;
      },
      set: function(newValue) {
        this.innerValue = newValue;
      }
    },
    pages: function() {
      let items = {};
      if (this.pageCount <= this.pageRange) {
        for (let index = 0; index < this.pageCount; index++) {
          let page = {
            index: index,
            content: index + 1,
            selected: index === this.selected - 1
          };
          items[index] = page;
        }
      } else {
        const halfPageRange = Math.floor(this.pageRange / 2);

        let setPageItem = index => {
          let page = {
            index: index,
            content: index + 1,
            selected: index === this.selected - 1
          };

          items[index] = page;
        };

        let setBreakView = index => {
          let breakView = {
            disabled: true,
            breakView: true
          };

          items[index] = breakView;
        };

        for (let i = 0; i < this.marginPages; i++) {
          setPageItem(i);
        }

        let selectedRangeLow = 0;
        if (this.selected - halfPageRange > 0) {
          selectedRangeLow = this.selected - 1 - halfPageRange;
        }

        let selectedRangeHigh = selectedRangeLow + this.pageRange - 1;
        if (selectedRangeHigh >= this.pageCount) {
          selectedRangeHigh = this.pageCount - 1;
          selectedRangeLow = selectedRangeHigh - this.pageRange + 1;
        }

        for (
          let i = selectedRangeLow;
          i <= selectedRangeHigh && i <= this.pageCount - 1;
          i++
        ) {
          setPageItem(i);
        }

        if (selectedRangeLow > this.marginPages) {
          setBreakView(selectedRangeLow - 1);
        }

        if (selectedRangeHigh + 1 < this.pageCount - this.marginPages) {
          setBreakView(selectedRangeHigh + 1);
        }

        for (
          let i = this.pageCount - 1;
          i >= this.pageCount - this.marginPages;
          i--
        ) {
          setPageItem(i);
        }
      }
      return items;
    }
  },

  data() {
    return {
      innerValue: 1
    };
  },

  methods: {
    handlePageSelected(selected) {
    	
      if (this.selected === selected) return;
      this.innerValue = selected;
      this.$emit("input", selected);
      this.clickHandler(selected);
    },
    prevPage() {
    	
      if (this.selected <= 1) return;

      this.handlePageSelected(this.selected - 1);
    },
    nextPage() {
      if (this.selected >= this.pageCount) return;

      this.handlePageSelected(this.selected + 1);
    },
    firstPageSelected() {
      return this.selected === 1;
    },
    lastPageSelected() {
      return this.selected === this.pageCount || this.pageCount === 0;
    },
    selectFirstPage() {
      if (this.selected <= 1) return;

      this.handlePageSelected(1);
    },
    selectLastPage() {
      if (this.selected >= this.pageCount) return;

      this.handlePageSelected(this.pageCount);
    }
  }
};
</script>

<style scoped></style>
