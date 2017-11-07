import axios from "axios";

const FAILCODE = -404;

const fInterceptor = axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.dir(error);
        return Promise.resolve({
            status: FAILCODE,
            msg: error.message || "网络异常"
        });
    }
);

/*
* 处理异常状态，全局封装axios
*/
let ajax = (url = '') => config => callback => {
    const defaults = {
        method: "get",
        url
    };
    config = Object.assign({}, defaults, config);
    return axios(config).then(resp => {
        // console.log('resp:',resp);
        if (resp.status !== FAILCODE) {
            resp = resp.data;
        }
        callback(resp);
    });
};


export {ajax};
