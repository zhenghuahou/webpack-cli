import path from "path";
import ip from "ip";
import sampleConfig from "./sample";

let mineConfig = {};

try {
    mineConfig = require("./mine").default;
} catch (e) {
    // console.log(' e:',e);
}

export default Object.assign(sampleConfig, mineConfig, {
    ip: ip.address()
});
