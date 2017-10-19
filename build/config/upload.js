/**
 * 发布上传配置
 */

 const project = "fe-test";

 const envConfig = {
    test :{
        publicPath:`http://house-test-water.oss.aliyuncs.com/resource/${project}_test/`
    },
    prod :{
        publicPath:`http://resource.iwjw.com/${project}/`
    }
};

export default {
    "project":project,
    //测试环境，线上环境的publicPath不一样，统一在这里面配置
    "env":envConfig,
    "zipFilePath": `${process.cwd()}/zip/${project}.zip`
}


