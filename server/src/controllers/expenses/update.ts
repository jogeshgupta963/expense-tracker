import { Request, Response } from "express";
import { expenseService } from "../../services/expenses";
import { Expense } from "../../models/Expenses";

export async function updateExpense(req: Request, res: Response) {
    try {
        // const expense = await expenseService.update(req.params.id, {
        //     ...req.body,
        // });
        console.log("Yoo");
        const expense = await Expense.findById(req.params.id);
        if (!expense) {
            console.log("yoo");
            return res.status(400).json({
                success: false,
            });
        }
        expense.note = req.body.note || expense.note;
        expense.type = req.body.type || expense.type;
        expense.amount = req.body.amount || expense.amount;
        await expense.save();
        console.log(expense);

        return res.status(203).json({
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
