import { Expense } from "../models/Expenses";

class ExpenseService {
    async getAll(params: { note?: string; amount?: number; type?: string }) {
        return await Expense.find(params);
    }
    async create(note: string, type: string, amount: Number, userId: string) {
        const expense = new Expense({
            note,
            type,
            amount,
            userId,
        });
        await expense.save();
        return expense;
    }
    async update(params:any, id:string) {
        const expense = await Expense.findByIdAndUpdate(id, params);
        return expense;
    }
}

export const expenseService = new ExpenseService();
