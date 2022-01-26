<template>
<div class="">
  <div class="x_panel_no">
    <div class="x_title">
      <h2> 송신파일 목록 <small> </small></h2>
      <div class=" pull-right" >
        <button class="btn btn-conform" type="button" @click="btnOpenModal">열기</button>
        <button class="btn btn-gray" type="button" @click="btnDelete"> 삭제 </button>
        <button class="btn btn-gray" type="button" @click="btnUpdate"> 수정 </button>
        <button class="btn btn-primary" type="reset" @click="btnSave"> 저장 </button>
      </div>
    </div>
    <div class="x_content"> 
      
      <div class="table-responsive" style="height:380px; overflow:auto;">
        <table class="table table-striped jambo_table bulk_action" >
          <thead >
            <tr class="headings">
              <th class="column-title text-center"> <input type="checkbox" class="pd-r10" @click="selectAll" v-model="allSelected"></th>
              
              <th class="column-title text-center" v-for="(tableColumn, key) in tableColumns" :key="key"> {{ tableColumn.label }} </th>
              
              <th class="column-title no-link last text-center"><span class="nobr"> 상세보기 </span> </th>
              <th class="bulk-actions" colspan="7"> <a class="antoo" style="color:#fff; font-weight:500;">Bulk Actions ( <span class="action-cnt"> </span> ) <i class="fa fa-chevron-down"></i></a> </th>
            </tr>
          </thead>
          <tbody >
          
            <!--tr class="odd pointer" v-for="(item, index) in tableData" :key="index">
              <td class="text-center "><input type="checkbox" :value="item.content_id" class="pd-r10" @click="select" v-model="selectItems"></td>
              <td class="text-center ">{{ item.created_date }} </td>
              <td class="text-left">{{ item.title }} <i class="success fa fa-long-arrow-up"></i></td>
              <td class="text-left ">{{ item.content }}</td>
              <td class="text-left">{{ item.file_name }}</td>
              <td class="a-right a-right text-left">{{ item.send_yn }}</td>
              <td class=" last text-center"><a href="#">View</a></td>
            </tr-->
            <tr class="odd pointer" v-for="(item, index) in tableList[0]" :key="index">
              <td class="text-center ">{{ item.custNm }} </td>
              <td class="text-center ">{{ item.custAddr }} </td>
              <td class="text-center ">{{ item.custNo }} </td>
            </tr>
            
          </tbody>
        </table>
        
        <!--basic-grid
          :fields="fields"
          :items="items"
          :onRowSelected="onRowSelected">
        </basic-grid-->
        
      </div>
      <div class="clearfix"></div>
      
      <basic-paging-form
	      :page-count="10"
	      :first-last-button="true">
	    </basic-paging-form>
      
	    <basic-modal
        @close="closeModal"
        @action="modal.action"
        v-if="modal.open"
        :title="modal.title"
        :subTitle="modal.subTitle"
        :message="modal.message"
      >
        <div id="testmodal" style="padding: 5px 10px;">
          <div class="form-group">
            <h4 class=" pull-left"> 수집중점 </h4>
          </div>
          <div class="clearfix"></div>
          <div class="table-responsive" style="height:430px; overflow:auto;">
            <table class="table table-striped  bulk_action">
              <thead>
                <tr class="headings">
                  <th class="column-title text-center"> <input type="checkbox" id="check-all" class="check-all" name="all">
                  </th>
                  <th class="column-title text-center"> 내용 </th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd pointer">
                  <td class="text-center "><input type="checkbox" id="chkid1" class="cb" name="cb1"></td>
                  <td class="text-left "> 적 000 훈련/발사 징후 포착 </td>
                </tr>
                <tr class="odd pointer">
                  <td class="text-center "><input type="checkbox" id="chkid1" class="cb" name="cb1"></td>
                  <td class="text-left "> 접적 지역 이동 징후 포착 </td>
                </tr>
                <tr class="odd pointer">
                  <td class="text-center "><input type="checkbox" id="chkid1" class="cb" name="cb1"></td>
                  <td class="text-left "> xxx부대 전방 이동 포착 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
	    </basic-modal>
	    
	    <basic-alert-modal 
        @close="alertModalClose"
        @action="alertModal.action"
        v-if="alertModal.open"
        :title="alertModal.title"
        :message="alertModal.message"
	    ></basic-alert-modal>
      
    </div>
  </div>
</div>
</template>

<script>
import tableData from '@/json/userJson01.json'
import BasicPagingForm from '@/components/paging/BasicPagingForm'
import GridForm01 from '@/components/grid/GridForm01'
import BasicModal from '@/components/modal/BasicModal'
import BasicAlertModal from '@/components/modal/BasicAlertModal'
import BasicGrid from '@/components/grid/BasicGrid';

export default {
  name: 'GridForm01',

  data () {
    return {
      tableColumns: [
    	  {
      	  label: '날짜'
    	  },
      	{
      	  label: '제목'
      	},
      	{
      	  label: '내용'
      	},
      	{
      	  label: '파일명'
      	},
      	{
      	  label: '송신여부'
      	},
      ],
      allSelected: false,
      selectItems: [],
	    odal: false,
      message: '',
      modal: {
        open: false,
        type: '',
        title: '',
        subTitle: '',
        message: '',
        action: ''
      },
      alertModal: {
        open: false,
        type: '',
        title: '',
        message: '',
        action: ''
      },
      
      gridOptions: {},
      fields: [
  	    { headerName: '날짜', field: 'date' },
	      { headerName: '제목', field: 'title' },
	      { headerName: '내용', field: 'content' },
	      { headerName: '파일명', field: 'fileName' },
	      { headerName: '송신여부', field: 'sendYn' },
	    ],
      items: [],
      tableList: [],
	    pageInfo: {
         page: 1,
         size: 10,
         resultCount: 1,
         totalCount: 1
      },
      pageOptions: [
        10,
        20,
        50,
        100
      ]
    }
  },

  components: {
    BasicPagingForm,
    GridForm01,
    BasicModal,
    BasicAlertModal,
    BasicGrid
  },

  computed: {
	  tableData () {
  	  return tableData.dataList.map((items) => {
	      return items
	    })
  	}
  },
  
  created (){
    //this.fetchList();

    this.$eventBus.$on('searchResult', this.tableListFetch)
  },

  methods: {
    tableListFetch: function(data) {
      this.tableList.push(data)
    },

    onRowSelected (item){
      //this.$router.push({ name: 'API 상세', params: { id: item.apiId }})
    },
    
    fetchList (params = {}){
      const defaultParams = {
        //page: this.pageInfo.page,
        //size: this.pageInfo.size,
        q: this.queryParams
      };

//      this.$https.get('/apiManagement/apis', {...defaultParams, ...params})
//       .then((res) => {
//         // Setting Service Type Name
//         this.items = res.data.items.map(obj => {
//           obj.nbBaseUrl = obj.nbBaseUrl.substring(obj.nbBaseUrl.indexOf('/', 10));
//           return obj;
//         });
//         this.pageInfo = res.data.pageInfo;
//      });
    },
    
    onRowSelect (size){
      this.fetchList({ page: 1, size });
    },

    onPagination (page){
      this.fetchList({ page });
    },
	  
	  selectAll () {
      this.selectItems = [];
      
      if (!this.allSelected) {
    	  for (let i in tableData.dataList) {
    		  this.selectItems.push(tableData.dataList[i].content_id);
    	  }
      }
	  },
	
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
      // this.$https.delete(`/aaa/bbb/${this.id}`)
      // .then(() => {
      //   this.$router.push({ name: 'AAA' });
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
	  },
	
	  btnUpdate () {
  		alert("btnUpdate : " + this.selectItems);
	  },
	
  	btnSave () {
	  	alert("btnSave : " + this.selectItems);
  	},
	
    select: function() {
      this.allSelected = false;
    },

    btnOpenModal() {
      const title = '수집중점관리'
      const subTitle = '수집중점'
      const message = ''
      this.modal = {
        open: true,
        type: 'view',
        title: title,
        message: message,
        action: this.doSave
      }
    },

    doSave() {
      this.modal.open = false
      alert("doSave ~*")
    },

    closeModal() {
      this.modal.open = false
    },

    doSend() {
      if (this.message.length > 0) {
        alert(this.message)
        this.message = ''
        this.closeModal()
      } else {
        alert('메시지를 입력해주세요.')
      }
    },

    alertModalClose() {
      this.alertModal.open = false
    }
  }
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
	transition: opacity 0.5s ease-out;
}

.modal-enter, .modal-leave-to {
	opacity: 0;
}
</style>