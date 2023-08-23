import { Request, Response } from "express";
import { User } from "../../models/User";
import { hash } from "../../utils/helpers/hash";
import jwt from "jsonwebtoken";
import { userService } from "../../services/user";

export async function login(req: Request, res: Response) {
    const { email, password } = req.body;

    //searching user
    try {
        const user = await userService.getByEmail(email);
        if (!user) throw new Error("Invalid Credentials");

        //check password

        const isMatch = await hash.compareHash(user.password, password);
        if (!isMatch) throw new Error("Invalid Credentials");

        //generate jwt

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: process.env.JWT_EXPIRATION!,
            }
        );

        res.cookie(process.env.COOKIE_NAME!, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV! === "prod",
        });

        return res.status(200).json({
            success: true,
            data: user,
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
