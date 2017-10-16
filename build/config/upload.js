/**
 * 发布上传配置
 */

 let project = "iwjw-finwxent";

export default {
    "project":project,
    "versionType":2,
    "api": {
        "uploadSuffix": "/resource/uploadAuto.do",
        "openAutoSuffix": "/resource/openAuto.do",
        "versionSuffix": "/resource/getResourceVersion.do"
    },
    "serverEnv": {
        "test": {
            "serverUrl": "http://192.168.1.75",
            "projectId": "97"
        },
        "beta": {
            "serverUrl": "http://121.41.34.206:8150",
            "projectId": "55"
        },
        "prod": {
            "serverUrl": "http://121.43.144.46",
            "projectId": "52"
        }
    },
    "zipFilePath": `${process.cwd()}/zip/${project}.zip`
}


