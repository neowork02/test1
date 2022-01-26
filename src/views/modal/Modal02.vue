<template>
<div class="right_col" role="main">
	<div id="main_body">
  		<content-header
  		 :title="title"
  		></content-header>

        <div class="row" style="width:100%; display:flex; min-width:1600px; margin-left:0px;">
          <div class="col-md-6"  id="cont_tab" style="min-width:50%; width:50%;">

            <div class="x_panel item-bg-b">
                <div class="x_title">
                    <div class="clearfix"></div>
                </div>
                <div class="x_content">
                    <div class="container">
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="row pull-left" style="margin-top:-3px;">
                                <button class="btn btn-conform" type="button" @click="btnDelete">
                                    <i class="fa fa-search" style="padding-right:10px;"> </i> 삭제
                                </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="container">
                        <div class="col-md-13">
                          <codemirror v-model="source"></codemirror>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
            
        <!-- Modal Alert Component : start -->
        <basic-alert-modal 
          @close="alertModalClose"
          @action="alertModal.action"
          v-if="alertModal.open"
          :title="alertModal.title"
          :message="alertModal.message"
        ></basic-alert-modal>
        <!-- end : Modal Alert Component -->

  </div>
</div>
</template>

<script>
import { Breadcrumb, ContentHeader } from '@/components/commonLayout'
import BasicAlertModal from '@/components/modal/BasicAlertModal'
import { codemirror } from 'vue-codemirror'

export default {
  name: 'Modal02',
  
  data () {
    return {
      title: 'Basic Alert Modal',
      checked: false,
      queryParams: {},
      searchItem: {
        searchSenserModeType: null
      },
      codes: {
      },
      alertModal: {
        open: false,
        type: '',
        title: '',
        message: '',
        action: ''
      },
      source: `<template>
  <div>
    <basic-alert-modal 
      @close="alertModalClose"
      @action="alertModal.action"
      v-if="alertModal.open"
      :title="alertModal.title"
      :message="alertModal.message"
    ></basic-alert-modal> 
  </div>
</template>
import BasicAlertModal from '@/components/modal/BasicAlertModal'

export default {
  data () {
    return {
      alertModal: {
        open: false,
        type: '',
        title: '',
        message: '',
        action: ''
      }
    }
  },

  components: {
    BasicAlertModal
  },

  methods: {
    //팝업 action event 확인 및 팝업 설정 method
    btnDelete () {
      const title = '알림'
      const message = '정말 삭제 하시겠습니까?'
      this.alertModal = {
        open: true,
        type: 'delete',
        title: title,
        message: message,
        action: this.onDeleteData
      }
    },

    //팝업 action event 실행 method	
    onDeleteData () {
      this.alertModal.open = false
      alert('onDeleteData~*')
    },

    //팝업 close event 실행 method
    alertModalClose() {
      this.alertModal.open = false
    }
  }
}
`
    }
  },
  
  components: {
    Breadcrumb,
    ContentHeader,
    BasicAlertModal,
    codemirror
  },
  
  methods: {
	  btnDelete () {
      const title = '알림'
      const message = '정말 삭제 하시겠습니까?'
      this.alertModal = {
        open: true,
        type: 'delete',
        title: title,
        message: message,
        action: this.onDeleteData
      }
	  },
	
	  onDeleteData () {
      this.alertModal.open = false
      alert('onDeleteData~*')
    },

    alertModalClose() {
      this.alertModal.open = false
    }
  }
}
</script>

<style scoped>

</style>
