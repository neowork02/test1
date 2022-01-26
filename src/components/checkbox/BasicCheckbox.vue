<template>
<div class="checkbox">
  <div :class="divCls">
    <template v-if="checkAllNm">
      <label :for="optId + '_all'">
      <input :class="cls"
             type="checkbox"
             @change="checkAll($event.target.checked)"
             :id="optId + '_all'"
             :disabled="isDisabled||isDisabledOpt(checkAllCd||'')"
             :checked="isAllChecked"/>
             {{checkAllNm}}
      </label>
   </template>
   <template v-for="(dtlCd, index) in dtlCdList">
     <label :key="index" :for="optId + '_' + dtlCd[valueProp||'cd']">
      <input :class="cls"
             type="checkbox"
             v-model="checkedValue"
             @change="bind($event.target.value, $event.target.checked)"
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
  name: 'BasicCheckbox',
  
  props: [
    'divCls',
    'cls',
    'value',
    'id',
    'optId',
    'name',
    'comCd',
    'dtlCdList',
    'valueProp',
    'textProp',
    'checkAllCd',
    'checkAllNm',
    'disabled',
    'disabledOpts',
    'excludes',
    'includes'
  ],

  data () {
    return {
      //
    }
  },

  computed: {
  	checkedValue: {
      get: function() {
        return this.value;
      },
      set: function(value) {
        //do nothing
      }
    },
    isAllChecked: function() {
      var me = this;
      return this.value.length > 0 && this.getCheckableOpts().every(function(cd){return me.value.includes(cd);});
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
    isDisabledOpt: function(value) {
      return (this.disabledOpts||[]).includes(value);
    },
    isVisible: function(value) {
      if(this.excludes && this.excludes.includes(value)) {
        return false;
      }
      if(this.includes && !this.includes.includes(value)) {
        return false;
      }
      return true;
    },
    getCheckableOpts: function() {
      var me = this;
      return this.dtlCdList.map(function(dtlCd){return dtlCd[me.valueProp||'cd'];})
        .filter(function(cd){return !me.isDisabledOpt(cd) && me.isVisible(cd);});
    },
    checkAll: function(checked) {
      this.$emit('input', checked ? this.getCheckableOpts() : []);
    },
    bind: function(newVal, checked) {
      if(checked) {
        this.value.push(newVal);
      }else{
        this.$emit('input', this.value.filter(function(item){return item != newVal;}));
      }
    }
  }
}
</script>