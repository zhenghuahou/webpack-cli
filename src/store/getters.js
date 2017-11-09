/*
*根级别的 getter
*/

// getters
const getters = {
    apiList: (state) => {
        console.log('state:',state);
        return state.allApis.length;
    }
};

export default getters;
