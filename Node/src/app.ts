import Express from "express";
import searchRoute from "./api/routes/searchRoute";
import homeRoute from "./api/routes/homeRoute";
import videosRoute from "./api/routes/videosRoute";

const app = Express();

app.use("/", homeRoute);
app.use("/api/search", searchRoute);
app.use("/api", videosRoute)

export default app;