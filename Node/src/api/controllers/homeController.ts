import { Request, Response } from "express";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDCwYezfdWMrVY5TxQjGA2XTbb0S7TVDiA");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function homeFunc(req: Request, res: Response) {
    const prompt = "Conte uma piada sobre esquilos.";

    const result = await model.generateContent(prompt);
    
    const response = await result.response;
    const text = await response.text();

    return res.send(text);
}