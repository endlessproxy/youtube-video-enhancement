import { Router } from "express";
import { searchChannel } from "../controllers/searchController";

const router = Router();

export let videos: any;

router.get("/:channel/:limit", async (req, res) => {
    const channelId = req.params.channel;
    const videosLimit = parseInt(req.params.limit);

    videos = await searchChannel(channelId, videosLimit);

    if (videos) {
        res.status(201).send("Status: Created!")
    }
    if (!videos) {
        res.status(500).send("Error searching channel! :(");
    }
});

export default router;