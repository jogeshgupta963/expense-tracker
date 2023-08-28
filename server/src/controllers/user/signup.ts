import { Request, Response } from "express";
import { hash } from "../../utils/helpers/hash";
import { userService } from "../../services/user";
import { config } from "../../config/config";
import { jwt } from "../../utils/helpers/jwt";

export const signup = async (req: Request, res: Response) => {
    const { email, name, password } = req.body;
    //check user

    try {
        const user_exists = await userService.getByEmail(email);

        if (user_exists) {
            return res.status(400).json({
                success: false,
                data: `Account with email id ${email} alread exists`,
            });
        }

        //hashing password
        const hashedPassword = await hash.hashString(password);
        // create a new user
        const user = await userService.create(name, email, hashedPassword);
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
        return res.status(201).json({
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
};
