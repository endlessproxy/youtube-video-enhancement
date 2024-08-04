import Express from "express";
import dotenv from "dotenv";
import { searchChannel } from "./api/utils/searchService";
import { initFunc } from "./api/utils/initService";

dotenv.config()

const app = Express();

app.get("/", (req, res) => {
    res.send("Working!");
});

app.get("/api/channel/:id/:limit", async (req, res) => {
    const channelId = req.params["id"];
    const maxVideoLimit: number = parseInt(req.params["limit"]);

    const videosArr = await searchChannel(channelId, maxVideoLimit);

    return res.json(videosArr);
});

const port = process.env.PORT || 8023;

app.listen(port, initFunc);