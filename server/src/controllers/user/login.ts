import { Request, Response } from "express";
import { User } from "../../models/User";
import { hash } from "../../utils/helpers/hash";
import { userService } from "../../services/user";
import { jwt } from "../../utils/helpers/jwt";
import { config } from "../../config/config";

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

        const token = jwt.generateJWT(
            {
                id: user.id,
                email: user.email,
            },
            {
                expiresIn: config.JWT_EXPIRATION,
            }
        );

        res.cookie(config.COOKIE_NAME, token, {
            httpOnly: true,
            secure: config.NODE_ENV === "prod",
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
