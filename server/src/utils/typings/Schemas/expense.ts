import mongoose from "mongoose";

export enum ExpenseAccount {
    account = "ACCOUNT",
    cash = "CASH",
    bank = "BANK",
}
export interface ExpenseDoc extends mongoose.Document {
    userId: mongoose.ObjectId;
    note: string;
    amount: string;
    type: ExpenseAccount;
}
