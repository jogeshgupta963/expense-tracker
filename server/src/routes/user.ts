import express from "express";
import { signup, login } from "../controllers/user";

export const router = express.Router();

router.route("/login").post(login);
router.route("/signup").post(signup);
