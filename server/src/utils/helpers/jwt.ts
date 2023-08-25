import jsonwebtoken from "jsonwebtoken";
import { config } from "../../config/config";

class JWT {
    generateJWT(
        payload: jsonwebtoken.JwtPayload,
        options: jsonwebtoken.SignOptions
    ) {
        const token = jsonwebtoken.sign(payload, config.JWT_SECRET, options);
        return token;
    }

    verifyJWT(jwt: string) {
        return jsonwebtoken.verify(jwt, config.JWT_SECRET);
    }
}

export const jwt = new JWT();
