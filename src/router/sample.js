import Vue from "vue";
import lazyLoading from "./lazyLoading"; //사용하는 프로젝트에서 빌드 오류발생..(김지환)

import {
  LeftMenu,
  TopMenu,
  Breadcrumb,
  ContentHeader
} from "@/components/commonLayout";

import BasicPagingForm from "@/components/paging/BasicPagingForm";
import GridForm01 from "@/components/grid/GridForm01";
import GridForm02 from "@/components/grid/GridForm02";
import BasicModal from "@/components/modal/BasicModal";

export default [
  {
    path: "/sample",
    name: "Sample",
    component: lazyLoading("Dashboard")
  },
  {
    path: "/sample/layout/layout01",
    name: "Basic Layout01",
    props: true,
    component: lazyLoading("layout/Layout01")
  },
  {
    path: "/sample/layout/layout02",
    name: "Basic Layout02",
    props: true,
    component: lazyLoading("layout/Layout02")
  },
  {
    path: "/sample/layout/layout03",
    name: "Basic Layout03",
    props: true,
    component: lazyLoading("layout/Layout03")
  },
  {
    path: "/sample/button/button01",
    name: "Basic Button",
    props: true,
    component: lazyLoading("button/Button01")
  },
  {
    path: "/sample/checkbox/checkbox01",
    name: "Basic Check Box",
    props: true,
    component: lazyLoading("checkbox/Checkbox01")
  },
  {
    path: "/sample/radio/radio01",
    name: "Basic Radio",
    props: true,
    component: lazyLoading("radio/Radio01")
  },
  {
    path: "/sample/select/select01",
    name: "Basic Select Box",
    props: true,
    component: lazyLoading("select/Select01")
  },
  {
    path: "/sample/input/input01",
    name: "Basic Input",
    props: true,
    component: lazyLoading("input/Input01")
  },
  {
    path: "/sample/modal/modal01",
    name: "Basic Modal",
    props: true,
    component: lazyLoading("modal/Modal01")
  },
  {
    path: "/sample/picker/picker01",
    name: "Basic Date Picker",
    props: true,
    component: lazyLoading("picker/Picker01")
  },
  {
    path: "/sample/picker/picker02",
    name: "Basic Time Picker",
    props: true,
    component: lazyLoading("picker/Picker02")
  },
  {
    path: "/sample/tree/tree01",
    name: "Basic Tree",
    props: true,
    component: lazyLoading("tree/Tree01")
  },
  {
    path: "/sample/paging/paging01",
    name: "Basic Paging",
    props: true,
    component: lazyLoading("paging/Paging01")
  },
  {
    path: "/sample/grid/grid01",
    name: "Basic Grid",
    props: true,
    component: lazyLoading("grid/Grid01")
  },
  {
    path: "/sample/file/file01",
    name: "Basic File",
    props: true,
    component: lazyLoading("file/File01")
  },
  {
    path: "/sample/form/form01",
    name: "Basic Search",
    props: true,
    component: lazyLoading("form/Search01")
  },
  {
    path: "/sample/form/form02",
    name: "Basic Dashboard",
    props: true,
    component: lazyLoading("form/Dashboard01")
  },
  {
    path: "/sample/socket/socket01",
    name: "Basic Socket",
    props: true,
    component: lazyLoading("socket/Socket01")
  },
  {
    path: "/sample/socket/socket02",
    name: "Basic Socket",
    props: true,
    component: lazyLoading("socket/Socket02")
  },
  {
    path: "/sample/comppage/cmmcd-dtl-modal",
    name: "Common Code Modal",
    props: true,
    component: lazyLoading("comppage/CmmCdDtlModal01")
  }
];
