import request from "supertest";

import { app } from "../../../app";

//signup

it("returns a status on successful signup", async () => {
    return await request(app)
        .post("/api/user/signup")
        .send({
            email: "jogeshgupta963@gmail.com",
            password: "zxcvbnm",
        })
        .expect(201);
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
it("duplicate email returns 400", async () => {
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
        })
        .expect(201);

    expect(response.get("Set-Cookie")).toBeDefined();
});

// //login

// it("invalid email supplied", async () => {
//     return await request(app)
//         .post("/api/user/login")
//         .send({
//             email: "joe@gmail.com",
//             password: "zxcvbnm",
//         })
//         .expect(400);
// });

// it("fails when incorrect password is supplied", async () => {
//     await request(app)
//         .post("/api/user/signup")
//         .send({
//             email: "joe@gmail.com",
//             password: "zxcvbnm",
//         })
//         .expect(201);

//     await request(app)
//         .post("/api/user/login")
//         .send({
//             email: "joe@gmail.com",
//             password: "zaxcvbnm",
//         })
//         .expect(400);
// });

// it("successful login", async () => {
//     await request(app)
//         .post("/api/user/signup")
//         .send({
//             email: "jogeshgupta963@gmail.com",
//             password: "zxcvbnm",
//         })
//         .expect(201);

//     const response = await request(app)
//         .post("/api/user/login")
//         .send({
//             email: "jogeshgupta963@gmail.com",
//             password: "zxcvbnm",
//         })
//         .expect(200);
//     expect(response.get("Set-Cookie")).toBeDefined();
// });

// //get current user

// it("current user", async () => {
//     const cookie = await global.getCookie();
//     const response = await request(app)
//         .get("/api/user")
//         .set("Cookie", cookie)
//         .send({})
//         .expect(200);
//     expect(response.body.data.email).toEqual("joe@gmail.com");
// });
