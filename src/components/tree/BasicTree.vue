<template>
<div class="treeview" style="background-color:#333; height:200px; overflow:auto">
  <v-jstree
    ref="tree"
    :data="treeData"
    :whole-row="true"
    :show-checkbox="true"
    :collapse="true"
    :draggable="false"
    :multiple="true"
    text-field-name="menuName"
    value-field-name="menuId"
    children-field-name="children">
    <template slot-scope="_">
      <!--ul style="display: inherit; width: 200px" @click.ctrl="customItemClickWithCtrl">
        <li :class="_.vm.themeIconClasses" role="presentation" v-if="!_.model.loading"></li>
        {{_.model.text}}
      </ul-->
      <label>{{_.model.text}}</label>
    </template>
  </v-jstree>

</div>
</template>

<script>
import VJstree from 'vue-jstree'

export default {
  name: 'BasicTree',

  components: {
    VJstree
  },

  props: [
    'id',
    'name',
    'treeData'
  ],

  data () {
    return {
    }
  },

  methods: {
    itemClick (node) {
      console.log(node.model.text + ' clicked !')
    }
  }
}
</script>
