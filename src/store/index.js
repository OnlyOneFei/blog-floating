import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: "",
        userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
    },
    //方法集，通过commit调用
    mutations: {
        //类似Java set方法
        SET_TOKEN: (state, token) => {
            state.token = token;
            localStorage.setItem("token", token);
        },
        SET_USER_INFO: (state, userInfo) => {
            state.userInfo = userInfo;
            sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
        },
        REMOVE_INFO: (state) => {
            state.token = "";
            state.userInfo = {};
            sessionStorage.setItem("userInfo", JSON.stringify(""));
            localStorage.setItem("token", "");
        }
    },
    //get 方法，也可以直接调用 state 获取。类似Java get方法
    getters: {
        getUser: state => {
            return state.userInfo;
        },
        getToken: state => {
            return state.token;
        }
    },
    actions: {}
    ,
    modules: {}
})
