import Express from "express";
import dotenv from "dotenv";
import { searchChannel } from "./api/utils/searchService";

dotenv.config()

const app = Express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Working!");
});

app.post("/api/channel/:id/:limit", (req, res) => {
    const channelId = req.params["id"];
    const maxVideoLimit: number = parseInt(req.params["limit"]);

    try {
        searchChannel(channelId, maxVideoLimit);
    } catch (error) {
        console.error("Algo deu errado: ", error);
    }
});

app.listen(port, () => { 
    console.log(`\n- Server running on http://localhost:${port}\n`); 
});