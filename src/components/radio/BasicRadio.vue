<template>
<div class="radio">
  <div :class="divCls">
    <template v-if="dummyNm">
    <label :for="optId + '_dummy'">
    <input :class="cls"
           type="radio"
           v-model="checkedValue"
           @click="bind($event.target.value)"
           :id="optId + '_dummy'"
           :name="name||comCd"
           :value="dummyCd||''"
           :disabled="isDisabled||isDisabledOpt(dummyCd||'')"/>
           {{dummyNm}}
    </label>
    </template>
    <template v-for="(dtlCd, index) in radioList">
    <label :key="index" :for="optId + '_' + dtlCd[valueProp||'cd']">
    <input :class="cls"
           type="radio"
           v-model="checkedValue"
           @click="bind($event.target.value)"
           :id="optId + '_' + dtlCd[valueProp||'cd']"
           :name="name||comCd"
           :value="dtlCd[valueProp||'cd']"
           :disabled="isDisabled||isDisabledOpt(dtlCd[valueProp||'cd'])"/>
           {{dtlCd[textProp||'nm']}}
    </label>
    </template>
  </div>
</div>
</template>

<script>
export default {
  name: 'BasicRadio',
  
  props: [
    'divCls',
    'cls',
    'value',
    'id',
    'optId',
    'name',
    'comCd',
    'radioList',
    'valueProp',
    'textProp',
    'dummyCd',
    'dummyNm',
    'disabled',
    'disabledOpts',
    'excludes',
    'includes',
    'selectType'
  ],

  computed: {
    checkedValue : {
      get:function() {
        return this.value;
      },
      set:function(value) {
        //do nothing
      }
    },
    isDisabled: function () {
      if (this.disabled === true) {
        return true
      } else if (this.disabled === false) {
        return false
      } else if (Array.isArray(this.disabled) && this.disabled.includes(this.name || this.comCd)) {
        return true
      } else {
        return false
      }
    }
  },

  methods: {
    isDisabledOpt : function(value) {
      return (this.disabledOpts||[]).includes(value);
    },
    isVisible: function (value) {
      if (this.excludes && this.excludes.includes(value)) {
        return false
      }
      if (this.includes && !this.includes.includes(value)) {
        return false
      }
      return true
    },
    bind: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>