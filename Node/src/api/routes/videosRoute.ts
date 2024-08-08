import { Router, Request, Response } from "express";
import { analyzeVideos } from "../controllers/videosController";

const router = Router();

router.get("", async (req: Request, res: Response) => {
    const result = await analyzeVideos(req, res);
    res.send(result);
});

export default router;