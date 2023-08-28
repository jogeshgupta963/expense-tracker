import express from "express";
import morgan from "morgan";
import { router as userRouter } from "./routes/user";
export const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.get("/index", (req, res) => {
    res.send("Index Route");
});
app.use("/api/user", userRouter);
