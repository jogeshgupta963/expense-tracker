import express from "express";
import morgan from "morgan";

export const app = express();

app.use(morgan("dev"));
app.get("/index", (req, res) => {
    res.send("Index Route");
});
