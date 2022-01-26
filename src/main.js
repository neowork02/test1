import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import App from "./App";
import router from "./router";
import "es6-promise/auto";
import axios from "axios";
import validate from "./validate";
import util from "./util";
import store from "./store";
import VueCodemirror from "vue-codemirror";
import plugins from './plugins'

import VueWebsocket from "vue-websocket";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/base16-dark.css";
import "codemirror/mode/vue/vue.js";

// scss
import "./assets/css/style.scss";

Vue.use(plugins)

Vue.use(VueCodemirror, {
  options: {
    tabSize: 4,
    mode: "text/x-vue",
    theme: "base16-dark",
    lineNumbers: true,
    line: true
  }
});

//임시 auth token 설정
localStorage.token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJMb2dpbiIsIkdJRCI6ImdpZF9sb2NhbCIsIm5iZiI6MTYwMTAxODE1MiwiaXNzIjoibWlmczEwMDEiLCJleHAiOjE2MDEwMTk5NTIsImlhdCI6MTYwMTAxODE1Mn0.C3iRfPYDZCUN0z3ZoaeB1NkVZFW_cOnEWMQjif_xgRQ";

const config = require("../config");
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}

if (process.env.SOCKET_PORT != "") {
  Vue.use(VueWebsocket, "http://localhost:" + process.env.SOCKET_PORT);
}

Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);


const ax = axios.create({
  baseURL: "/",
  transformResponse: [
    function (data) {
      const origin = JSON.parse(data);
      return (origin || {});;
    }
  ]
});

const axFile = axios.create({
  baseURL: "/"
});

Vue.prototype.$valid = validate;

Vue.prototype.$util = util;

function setRoRw(url, type) {
  /*
  if (process.env.NODE_ENV !== "development") {
    if (type == 'ro') {
      url = url.replace('api/v', 'api/ro/v')
    } else {
      url = url.replace('api/v', 'api/rw/v')
    }
  }
*/
  return url;
}

Vue.prototype.$http = {
  get(url = "", headers = {}) {
    //    url = setRoRw(url, 'ro')
    return ax.get(url, {
      headers: headers
    });
  },
  post(url = "", headers = {}) {
    //    url = setRoRw(url, 'rw')
    return ax.post(url, {
      headers: headers
    });
  },
  put(url = "", headers = {}) {
    //    url = setRoRw(url, 'rw')
    return ax.put(url, {
      headers: headers
    });
  },
  delete(url = "", headers = {}) {
    //    url = setRoRw(url, 'rw')
    return ax.delete(url, {
      headers: headers
    });
  },

  // File
  getFile(url = "", params = {}) {
    return axFile.get(url, {
      params: params
    });
  },
  postFile(url = "", params = {}) {
    return axFile.post(url, {
      params: params
    });
  }
};

const EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $eventBus: {
    get: function () {
      return EventBus;
    }
  }
});



new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: {
    App
  }
});
