import { Router } from "express";
import { searchChannel } from "../controllers/searchController";
import { title } from "process";
import Video from "../models/videoClass";

const router = Router();

export let videos: any;

router.post("/:id/:limit", async (req, res) => {
    const channelId = req.params.id;
    const videosLimit = parseInt(req.params.limit);

    try {
        videos = await searchChannel(channelId, videosLimit);

        if (videos) {
            res.status(201).send("Status: Created!")
        }
    } catch (err) {
        console.error(err)
        res.status(500).send("Error searching channel! :(");
    }
});

export default router;