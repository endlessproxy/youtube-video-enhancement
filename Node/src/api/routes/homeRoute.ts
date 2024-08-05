import { Router } from "express";
import { homeFunc } from "../controllers/homeController";

const router = Router();

router.get("/", homeFunc);

export default router;