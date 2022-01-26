<template>
<div class="row">
<div class="x_panel_no">
  <div class="x_title">
    <h2> 송신파일 목록 <small> </small></h2>
    <div class=" pull-right" >
      <button class="btn btn-gray" type="button"> 삭제 </button>
      <button class="btn btn-gray" type="button"> 수정 </button>
      <button class="btn btn-primary" type="reset"> 저장 </button>
    </div>
  </div>
  <div class="x_content"> 
    
    <div class="table-responsive">
      <div class="table-responsive" style="height:300px; overflow:auto;">
        <table class="table table-striped jambo_table bulk_action" >
          <thead >
            <tr class="headings">
              <th class="column-title text-center"> <input type="checkbox" id="check-all" class="pd-r10">
              </th>
              <th class="column-title text-center"> 날짜 </th>
              <th class="column-title text-center"> 제목 </th>
              <th class="column-title text-center"> 내용 </th>
              <th class="column-title text-center"> 파일명 </th>
              <th class="column-title text-center"> 송신여부 </th>
              <th class="column-title no-link last text-center"><span class="nobr"> 상세보기 </span> </th>
              <th class="bulk-actions" colspan="7"> <a class="antoo" style="color:#fff; font-weight:500;">Bulk Actions ( <span class="action-cnt"> </span> ) <i class="fa fa-chevron-down"></i></a> </th>
            </tr>
          </thead>
          <tbody >
            <tr class="odd pointer">
              <td class="text-center "><input type="checkbox" id="check-all" class="pd-r10"></td>
              <td class="text-center ">2020-04-12 11:47:56 PM </td>
              <td class=" text-left">121000210 <i class="success fa fa-long-arrow-up"></i></td>
              <td class="text-left "> ------ </td>
              <td class=" text-left"> ----- </td>
              <td class="a-right a-right text-left"> ------ </td>
              <td class=" last text-center"><a href="#">View</a></td>
            </tr>
            <tr class="odd pointer">
              <td class="text-center "><input type="checkbox" id="check-all" class="pd-r10"></td>
              <td class="text-center ">2020-04-12 11:47:56 PM </td>
              <td class=" text-left">121000210 <i class="success fa fa-long-arrow-up"></i></td>
              <td class="text-left "> ------ </td>
              <td class=" text-left"> ----- </td>
              <td class="a-right a-right text-left"> ------ </td>
              <td class=" last text-center"><a href="#">View</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="clearfix"></div>
    
    <basic-paging-form
      :page-count="10"
      :first-last-button="true">
    </basic-paging-form>
  
  </div>
</div>
</div>
</template>

<script>
import userList from '@/json/userJson01.json'
import BasicPagingForm from '@/components/paging/BasicPagingForm'

export default {
  name: 'GridForm02',

  data () {
    return {
      fileItems: {
        fileList: []
      },
      pageInfo: {
        page: 1,
        size: 10,
        resultCount: 1,
        totalCount: 1
      }
    }
  },

  components: {
    BasicPagingForm,
  },

  computed: {
  	userList () {
	    return userList.users.map((items) => {
	      return items
	    })
  	}
  },

  methods: {
    getUserList (params = {}){
      const defaultParams = {
	      page: this.pageInfo.page,
        size: this.pageInfo.size,
        q: this.queryParams		  	
      };
    
      this.$http.get('/api/v1.0/test/list2', {...defaultParams, ...params})
	      .then(data => {
	        const resultArray = [];
	        for ( let key in data ) {
	          resultArray.push(data[key]);
	        }
	        this.fileItems.fileList = resultArray;
        }).catch(e => {
          console.error(e);
        });
    }
  }
}
</script>

<style scoped>

</style>