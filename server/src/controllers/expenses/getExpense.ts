import { Request, Response } from "express";
import { expenseService } from "../../services/expenses";
import { Expense } from "../../models/Expenses";

export async function getExpense(req: Request, res: Response) {
    try {
        const expense = await Expense.findById(req.params.id);
        return res.status(200).json({
            success: true,
            data: expense,
        });
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({
                success: false,
                data: err.message,
            });
        }
    }
}
