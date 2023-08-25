import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
let mongoServer: MongoMemoryServer;

beforeAll(async () => {
    const mongo = await MongoMemoryServer.create();
    const uri: string = mongo.getUri();
    mongoServer = mongo;
    mongoose.set("strictQuery", true);
    await mongoose.connect(uri);
});

afterAll(async () => {
    mongoServer.stop();
    await mongoose.connection.close();
});
