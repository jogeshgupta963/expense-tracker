import { Request, Response } from "express";
import { expenseService } from "../../services/expenses";

export async function createExpense(req: Request, res: Response) {
    const { note, amount, type } = req.body;
    try {
        const expense = await expenseService.create(
            note,
            type,
            amount,
            req.user!.id
        );
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
