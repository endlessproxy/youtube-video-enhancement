import Express from "express";
import searchRoute from "./api/routes/searchRoute";
import homeRoute from "./api/routes/homeRoute";
import savedVideosRoute from "./api/routes/savedVideosRoute";
import videosRoute from "./api/routes/videosRoute";

const app = Express();

app.use("/", homeRoute);
app.use("/search", searchRoute);
app.use("/results", videosRoute);
app.use("/api/videos", savedVideosRoute)

export default app;