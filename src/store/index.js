import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import api from './modules/api'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";
console.info(`[vuex]当前开发环境为:${process.env.NODE_ENV} ${ debug ?',已开启严格模式':''}`);


const store = new Vuex.Store({
    actions,
    getters,
    mutations,
    state:{
      allApis: [],    
      apiId: ''  // 当前apiId
    },
    modules: {
      api
    },
    strict: debug
});
if(__DEV__){
  window.store = store;
}

export default store;
