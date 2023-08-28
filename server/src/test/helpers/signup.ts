import request from "supertest";

import { app } from "../../app";

//signup

export async function signupUser(
    name = "Jogesh",
    email = "jogesh@gmail.com",
    password = "zxcvbnm"
) {
    const data = await request(app)
        .post("/api/user/signup")
        .send({
            email,
            password,
            name,
        })
        .expect(201);
    return data.body;
}
