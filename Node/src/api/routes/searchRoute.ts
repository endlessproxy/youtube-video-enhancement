import { Router } from "express";
import { searchChannel } from "../controllers/searchController";

const router = Router();

router.get("/:id/:limit", async (req, res) => {
    const channelId = req.params.id;
    const videosLimit = parseInt(req.params.limit);

    try {
        const videos = await searchChannel(channelId, videosLimit);
        res.json(videos);
    } catch (err) {
        res.status(500).send("Error searching channel! :(");
    }
});

export default router;