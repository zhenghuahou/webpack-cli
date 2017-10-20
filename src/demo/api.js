import Vue from 'vue';
const api_list = (key) => {

    let root =  '';

    if (__DEV__) {
        root = 'http://xx.xx.com';
    }

    return root + {
        //客户详情
        'getFinanceUserDetail': '/user/getFinanceUserDetail.action',
    }[key];
};


let chained_http=(apiName)=>(formData)=>(callback)=>{
   let param = {
        params:formData,
        method:'get',
        url:api_list(apiName)
    };
    return Vue.http(param).then((res)=>callback(res.body));
};

export default chained_http