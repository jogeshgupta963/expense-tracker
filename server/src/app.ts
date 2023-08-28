import express from "express";
import morgan from "morgan";
import { router as userRouter } from "./routes/user";
import { router as expenseRouter } from "./routes/expense";
export const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.get("/index", (req, res) => {
    res.send("Index Route");
});
app.use("/api/user", userRouter);
app.use("/api/expense", expenseRouter);
