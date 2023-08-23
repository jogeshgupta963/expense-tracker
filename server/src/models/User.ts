import mongoose from "mongoose";
import { UserDoc } from "../utils/typings";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        min: 8,
        required: true,
    },
});

export const User = mongoose.model<UserDoc>("User", userSchema);
