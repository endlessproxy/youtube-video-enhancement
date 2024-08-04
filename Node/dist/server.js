"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const searchService_1 = require("./api/utils/searchService");
const initService_1 = require("./api/utils/initService");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Working!");
});
app.post("/api/channel/:id/:limit", async (req, res) => {
    const channelId = req.params["id"];
    const maxVideoLimit = parseInt(req.params["limit"]);
    const videosArr = await (0, searchService_1.searchChannel)(channelId, maxVideoLimit);
    return res.json(videosArr);
});
const port = process.env.PORT || 8023;
app.listen(port, initService_1.initFunc);
