let root = "";

if (__DEV__) {
    root = __BASEAPI__;
}

const api_list = key => {
    return (
        root +
        {
            testApi: "/mock/demo",
            "404Api": "/mock/demo2"
        }[key]
    );
};

export default key => {
    return global.ajax(`${api_list(key)}`);
};
