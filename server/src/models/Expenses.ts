import mongoose from "mongoose";
import { ExpenseAccount, ExpenseDoc } from "../utils/typings";
const expenseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        min: 0,
        required: true,
    },
    type: {
        type: String,
        enum: ExpenseAccount,
    },
});

export const Expense = mongoose.model<ExpenseDoc>("Expense", expenseSchema);
