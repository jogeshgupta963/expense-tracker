import { Request, Response } from "express";
import { expenseService } from "../../services/expenses";

export async function updateExpense(req: Request, res: Response) {
    try {
        const expense = await expenseService.update(req.params.id, {
            ...req.body,
        });
        return res.status(201).json({
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
