import { Router } from "express";
import { videos } from "./searchRoute";
import { titleArr } from "../controllers/searchController";

const router = Router();

router.get("", async (req, res) => {
    res.send(titleArr);
})

export default router;