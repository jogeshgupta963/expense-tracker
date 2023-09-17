import express from "express";
import {
    createExpense,
    getAll,
    getExpense,
    updateExpense,
} from "../controllers/expenses";
import { isLoggedIn } from "../middleware/auth";
export const router = express.Router();

router.route("/").post(isLoggedIn, createExpense).get(isLoggedIn, getAll);

router.route("/:id").put(isLoggedIn, updateExpense).get(isLoggedIn, getExpense);
