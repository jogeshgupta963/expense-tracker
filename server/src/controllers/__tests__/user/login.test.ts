import request from "supertest";

import { app } from "../../../app";
import { signupUser } from "../../../test/helpers/signup";

it("invalid email supplied", async () => {
    const user = await signupUser("jogesh", "jogesh@mail.com", "zxcvbnm");
    return await request(app)
        .post("/api/user/login")
        .send({
            email: "abc@gmail.com",
            password: "zxcvbnm",
        })
        .expect(400);
});

it("fails when incorrect password is supplied", async () => {
    const user = await signupUser("jogesh", "jogesh@mail.com", "zxcvbnm");

    await request(app)
        .post("/api/user/login")
        .send({
            email: "jogesh@mail.com",
            password: "zaxcvbnm",
        })
        .expect(400);
});

it("successful login", async () => {
    const user = await signupUser("jogesh", "jogesh@mail.com", "zxcvbnm");

    const response = await request(app)
        .post("/api/user/login")
        .send({
            email: user.data.email,
            password: "zxcvbnm",
        })
        .expect(200);
    expect(response.get("Set-Cookie")).toBeDefined();
});
