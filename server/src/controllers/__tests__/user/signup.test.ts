import request from "supertest";

import { app } from "../../../app";
import { signupUser } from "../../../test/helpers/signup";

//signup

it("returns a status on successful signup", async () => {
    return await request(app)
        .post("/api/user/signup")
        .send({
            email: "jogeshgupta963@gmail.com",
            password: "zxcvbnm",
            name: "Jogesh",
        })
        .expect(201);
});
it("duplicate email returns 400", async () => {
    const user = await signupUser();
    return await request(app)
        .post("/api/user/signup")
        .send({
            email: user.email,
            password: user.password,
            name: user.name,
        })
        .expect(400);
});
it("invalid body returns 400", async () => {
    return await request(app)
        .post("/api/user/signup")
        .send({
            email: "asflasa",
            password: "zxcvbnm",
        })
        .expect(400);
});
it("setting cookie after signup", async () => {
    const response = await request(app)
        .post("/api/user/signup")
        .send({
            email: "jogeshgupta9@gmail.com",
            password: "zxcvbnm",
            name: "Jogi",
        })
        .expect(201);

    expect(response.get("Set-Cookie")).toBeDefined();
});
