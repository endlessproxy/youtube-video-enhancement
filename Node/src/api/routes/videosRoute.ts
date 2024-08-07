import { Router } from "express";
import { videos } from "./searchRoute";

const router = Router();

router.get("/videos", async (req, res) => {
    res.send(videos);
})

export default router;