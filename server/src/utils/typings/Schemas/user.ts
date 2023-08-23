import mongoose from "mongoose";

export interface UserDoc extends mongoose.Document {
    name: string;
    password: string;
    email: string;
}
