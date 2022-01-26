<template>
  <div class="contents-wrap" role="main">
    <content-header :title="title"></content-header>

    <div class="contents-inner">
      <div class="layer-full">
        <div class="code-mirror-wrap">
          <codemirror v-model="source"></codemirror>
        </div>
        <div class="scroll-wrap">
          <div class="scroll-inner">
            <div class="sample-wrap">
              <div class="sample-cont">
                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>
                    grid -
                    <span>1</span>
                  </strong>
                </div>
                <!-- Grid Component : start -->
                <basic-grid
                  colStyle="width: 100%; height: 200px;"
                  :gridOptions="gridOptions"
                  :defaultColDef="defaultColDef"
                  :columnDefs="columnDefs"
                  :rowData="rowData"
                ></basic-grid>
                <!-- end : Grid Component -->

                <div class="sample-tit">
                  <i class="fa fa-dot-circle-o"></i>
                  <strong>
                    grid -
                    <span>2</span>
                  </strong>
                </div>
                <!-- Grid Component : start -->
                <basic-grid
                  colStyle="width: 100%; height: 200px;"
                  :gridOptions="gridOptions2"
                  :defaultColDef="defaultColDef"
                  :columnDefs="columnDefs2"
                  :rowData="rowData2"
                  :frameworkComponents="frameworkComponents"
                ></basic-grid>
                <!-- end : Grid Component -->
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
import BasicGrid from "@/components/grid/BasicGrid";
import GridButton from "@/components/grid/GridButton.js";
import GridImage from "@/components/grid/GridImage.js";
import { codemirror } from "vue-codemirror";
import auth from "@/api/auth";

export default {
  name: "Grid01",

  data() {
    return {
      frontendId: "sample_grid01",
      title: "Basic Grid",
      checked: false,
      queryParams: {},
      searchItem: {},
      codes: {},
      source: `<template>
  <div>
    <basic-grid
      colStyle="width: 100%; height: 300px;"
      :gridOptions="gridOptions"
      :defaultColDef="defaultColDef"
      :columnDefs="columnDefs"
      :rowData="rowData"
    >
</basic-grid>
  </div>
</template>
import BasicGrid from '@/components/grid/BasicGrid'

export default {
  data () {
    return {
      gridOptions: null,
      columnDefs: null,
      defaultColDef: null,
      rowData: []
    }
  },

  components: {
    BasicGrid
  },

  methods: {
    //grid 데이터 가져오기 method
    getUserData () {
      let list = []
        this.$http.get('/api/v1.0/test/list')
          .then((res) => {
          res.data.body.content.forEach.forEach(function (value, index) {
              const userData = {
                custNm: value.custNm,
                custAddr: value.custAddr,
                custNo: value.custNo,
                mobileNo: value.mobileNo,
                sex: value.sex,
                age: value.age
              }

              console.log(userData)
              list.push(userData)
            });

          this.rowData = list
      })
      .catch((err) => {
        console.log(err)
        alert('오류가 발생 하였습니다')
      })
    }
  },

  beforeMount () {
    this.gridOptions = {},

    //grid row style 설정
    this.gridOptions.rowStyle = { background: 'red' },
    this.gridOptions.getRowStyle = function (params) {
      if (params.node.rowIndex % 2 === 0) {
        return { background: 'blue' }
      }
    }
     this.gridOptions2 = {},

    //grid 컬럼 설정
    this.columnDefs = [
      {headerName: '사용자명', field: 'custNm', minWidth: 180, headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true, sortable: false},
      {headerName: '지역', field: 'custAddr', sortable: true},
      {headerName: '사용자 NO', field: 'custNo', sortable: true, cellStyle: {'background-color': '#797970'}},
      {headerName: '휴대폰', field: 'mobileNo', sortable: true, cellStyle: {'background-color': '#897979'}},
      {headerName: '성별', field: 'sex', sortable: true, cellStyle: {'background-color': 'green'}},
      {headerName: '나이', field: 'age', sortable: true, cellStyle: {'background-color': 'black'}}
    ]

    //grid 기본 컬럼 설정
    this.defaultColDef = {
      editable: false,
      sortable: true,
      flex: 1,
      minWidth: 50,
      filter: false,
      resizable: true
    }

    //grid data 가져오기
    this.getUserData() 
  }
}
`,
      gridOptions: null,
      gridOptions2: null,
      columnDefs: null,
      columnDefs2: null,
      defaultColDef: null,
      defaultColDef2: null,
      rowData: [],
      rowData2: [],
      frameworkComponents: null,
    };
  },

  components: {
    Breadcrumb,
    ContentHeader,
    BasicGrid,
    GridButton,
    GridImage,
    codemirror,
  },

  methods: {
    onSearch() {
      const { searchDate01 } = this.searchItem;
      let submitItems = {
        searchDate01,
      };

      alert(JSON.stringify(this.searchItem));
    },

    getUserData() {
      let list = [];
      this.$http
        .get("/iss/api/v1.0/tdmdljobmgmt/local", {
          frontendId: this.frontendId,
          accessToken: auth.getToken(),
        })
        .then((res) => {
          /*
ProgramId : 'P' + '부체계약어(3)' + 프로그램 파일명(확장자제외한 20자리 이내)
frontendId : 'F' + [ 'C'(cs) or 'W'(web) ] + ProgramId
EX) FWPISSGrid01
*/

          //(res.data.contents.userList.body.content).forEach(function (value, index) {
          res.data.body.content.forEach(function (value, index) {
            const userData = {
              custNm: value.custNm,
              custAddr: value.custAddr,
              custNo: value.custNo,
              mobileNo: value.mobileNo,
              sex: value.sex,
              age: value.age,
            };

            console.log(userData);
            list.push(userData);
          });

          this.rowData = list;
        })
        .catch((err) => {
          console.log(err);
          alert("오류가 발생 하였습니다");
        });
    },

    getUserData2() {
      let list = [];
      this.$http
        .get("/iss/api/v1.0/tdmdljobmgmt/local", {
          frontendId: this.frontendId,
          accessToken: auth.getToken(),
        })
        .then((res) => {
          res.data.body.content.forEach(function (value, index) {
            const userData = {
              custNm: value.custNm,
              custAddr: value.custAddr,
              custNo: value.custNo,
              mobileNo: value.mobileNo,
              sex: value.sex,
              age: value.age,
            };

            console.log(userData);
            list.push(userData);
          });

          this.rowData2 = list;
        })
        .catch((err) => {
          console.log(err);
          alert("오류가 발생 하였습니다");
        });
    },

    getUserData3() {
      this.rowData = [
        {
          custNm: "",
          custAddr: "주소1",
          custNo: "번호1",
          mobileNo: "000111222",
          sex: "F",
          age: "30",
        },
        {
          custNm: "",
          custAddr: "주소2",
          custNo: "번호2",
          mobileNo: "000111222",
          sex: "F",
          age: "30",
        },
        {
          custNm: "",
          custAddr: "주소3",
          custNo: "번호3",
          mobileNo: "000111222",
          sex: "F",
          age: "30",
        },
      ];
    },

    getUserData4() {
      this.rowData2 = [
        {
          custNm: "",
          custAddr: "주소1",
          custNo: "번호1",
          mobileNo: "000111222",
          sex: "F",
          age: "30",
        },
        {
          custNm: "",
          custAddr: "주소2",
          custNo: "번호2",
          mobileNo: "000111222",
          sex: "F",
          age: "30",
        },
        {
          custNm: "",
          custAddr: "주소3",
          custNo: "번호3",
          mobileNo: "000111222",
          sex: "F",
          age: "30",
        },
      ];
    },
  },

  beforeMount() {
    (this.gridOptions = {}),
      (this.gridOptions.rowStyle = { background: "red" }),
      (this.gridOptions.getRowStyle = function (params) {
        if (params.node.rowIndex % 2 === 0) {
          return { background: "blue" };
        }
      });

    (this.gridOptions2 = {}),
      (this.columnDefs = [
        {
          headerName: "",
          field: "custNm",
          minWidth: 180,
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          checkboxSelection: true,
          sortable: false,
        },
        { headerName: "지역", field: "custAddr", sortable: true },
        {
          headerName: "사용자 NO",
          field: "custNo",
          sortable: true,
          cellStyle: { "background-color": "#797970" },
        },
        {
          headerName: "휴대폰",
          field: "mobileNo",
          sortable: true,
          cellStyle: { "background-color": "#897979" },
        },
        {
          headerName: "성별",
          field: "sex",
          sortable: true,
          cellStyle: { "background-color": "green" },
        },
        {
          headerName: "나이",
          field: "age",
          sortable: true,
          cellStyle: { "background-color": "black" },
        },
      ]);

    this.columnDefs2 = [
      {
        headerName: "",
        field: "custNm",
        minWidth: 180,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
        sortable: false,
      },
      {
        headerName: "이미지",
        field: "custAddr",
        width: 60,
        sortable: false,
        autoHeight: true,
        //cellRendererFramework: "GridImage"
      },
      {
        headerName: "버튼",
        field: "custNo",
        cellRenderer: "GridButton",
        colId: "params",
        width: 180,
      },
      {
        headerName: "휴대폰2",
        field: "mobileNo",
        sortable: true,
        cellStyle: { "background-color": "#897979" },
      },
      {
        headerName: "성별2",
        field: "sex",
        sortable: true,
        cellStyle: { "background-color": "green" },
      },
      {
        headerName: "나이2",
        field: "age",
        sortable: true,
        cellStyle: { "background-color": "black" },
      },
    ];

    this.defaultColDef = {
      editable: false,
      sortable: true,
      flex: 1,
      minWidth: 50,
      filter: false,
      resizable: true,
    };

    this.frameworkComponents = {
      GridButton: GridButton,
      GridImage: GridImage,
    };

    //this.getUserData();
    //this.getUserData2();
    this.getUserData3();
    this.getUserData4();
  },
};
</script>

<style scoped></style>
