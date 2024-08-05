import Express from "express";
import searchRoute from "./api/routes/searchRoute";
import homeRoute from "./api/routes/homeRoute";

const app = Express();

app.use("/", homeRoute);
app.use("/api/channel", searchRoute);

export default app;