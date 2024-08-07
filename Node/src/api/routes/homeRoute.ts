import { Router } from "express";
import { homeFunc } from "../controllers/homeController";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = Router();

const genAI = new GoogleGenerativeAI("AIzaSyDCwYezfdWMrVY5TxQjGA2XTbb0S7TVDiA");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.get("/", homeFunc);

export default router;