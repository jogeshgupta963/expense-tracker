import mongoose from "mongoose";
import { UserDoc } from "../utils/typings";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            min: 8,
            required: true,
        },
    },
    {
        toJSON: {
            transform(_, ret) {
                ret.id = ret._id;
                delete ret._id;
            },
        },
        timestamps: true,
    }
);

export const User = mongoose.model<UserDoc>("User", userSchema);
