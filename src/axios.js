import axios from 'axios'
import Element from 'element-ui'
import router from './router'
import store from './store'

axios.defaults.baseURL = "http://localhost:8081";

// 前置拦截
axios.interceptors.request.use(config => {
    return config;
});

// 后置拦截
axios.interceptors.response.use(response => {
    let res = response.data;
    let msg = res.responseMsg;
    // 查询成功 0  更新成功 1
    if (res.code === 0) {
        return response;
    }
    if (res.code === 1) {
        Element.Message.success(msg);
        return response;
    } else {
        Element.Message.error(msg);
        return Promise.reject(msg);
    }
}, error => {
    if (error.response.data) {
        console.log(error.response.data.responseMsg);
        error.message = error.response.data.responseMsg;
    }
    console.log(error.response.status);
    if (error.response.status === 401) {
        store.commit("REMOVE_INFO");
        router.push("/login")
    }
    Element.Message.error(error.message, {duration: 3 * 1000});

    return Promise.reject(error);
});