"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initFunc = initFunc;
function initFunc() {
    const port = process.env.PORT || 8023;
    console.clear();
    console.log(`\n- Main Endpoint: http://localhost:${port}/api/channel/id/limit\n`);
    console.log(`- ${"\x1b[33m"}Warning: Change "id" to the channel id you want and change "limit" to the number of videos you want. ${"\x1b[0m"}\n`);
}
