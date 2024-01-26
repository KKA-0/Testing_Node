const request = require('supertest');
const mongoose = require('mongoose')
const userModel = require('../models/auth.schema')
const server = require('../serverTest')
const req = {
    body: {
        username: "test",
        email: "_test_@jest.com",
        password: "^%$&^%#$*^%$^%$*"
    }
}



describe("Auth Tests", () => {

    beforeEach((done) => {
  mongoose.connect("mongodb://localhost:27017/JestDB",
    { useNewUrlParser: true, useUnifiedTopology: true }, () =>done())
    
});

    afterEach((done) => {    
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(() => done());
        });
    });

    it("POST /api/user", async () => {
        await request(server).post("/api/user")
        .send(req.body)
        .expect(201)
    })
    it("POST /api/user", async () => {
        await userModel.create(req.body);
        await request(server).post("/api/user")
        .send(req.body)
        .expect(200)
    })
})
