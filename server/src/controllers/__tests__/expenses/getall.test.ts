import request from "supertest";

import { app } from "../../../app";
import { signupUser } from "../../../test/helpers/signup";
import { ExpenseAccount } from "../../../utils/typings";

it("successful Expense create", async () => {
    const user = await signupUser("jogesh", "jogesh@mail.com", "zxcvbnm");

    const response = await request(app)
        .post("/api/expense")
        .send({
            note: "Expense 1",
            type: ExpenseAccount.account,
            amount: 100,
        })
        .set("Cookie", user.cookie)
        .expect(201);

    const res = await request(app)
        .get("/api/expense")
        .set("Cookie", user.cookie)
        .expect(200);
});
