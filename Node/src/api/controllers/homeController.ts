import { Request, Response } from "express";

export async function homeFunc(req: Request, res: Response) {
    res.send("Hello World!")
}