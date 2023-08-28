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
    // console.log(data.get("Set-Cookie"));
    data.body.cookie = data.get("Set-Cookie");
    return data.body;
}
