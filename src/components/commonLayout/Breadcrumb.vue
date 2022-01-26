<template>
    <!-- page history start -->
    <div class="page-title"  >
      <div class="title_left">
        <h3> <small> Home > 영상정보서비스  > 서비스  > 카탈로그 자료 </small></h3>
      </div>
      <div class="title_right">
        <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for...">
            <span class="input-group-btn">
            <button class="btn btn-default" type="button" @click="doSearch"> 검색 </button>
            </span> </div>
        </div>
      </div>
    </div>
    <!-- page history end -->
</template>

<script>
export default {
  methods: {
    doSearch () {
      alert('doSearch~*')
    }
  }
}
</script>
