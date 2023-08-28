import { Request, Response } from "express";
import { expenseService } from "../../services/expenses";

export async function getAll(req: Request, res: Response) {
    try {
        const expense = await expenseService.getAll({});
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
