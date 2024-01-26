const request = require('supertest');
const mongoose = require('mongoose');
const userModel = require('../models/auth.schema');
const server = require('../serverTest');
const req = {
  body: {
    username: 'test',
    email: '_test_@jest.com',
    password: '^%$&^%#$*^%$^%$*',
  },
};

describe('Auth Tests', () => {
  beforeEach(async () => {
    await mongoose.connect("mongodb://localhost:27017/JestDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });
  
  afterEach(async () => {
    // Delete the database
    await mongoose.connection.db.dropDatabase();
    
    // Disconnect from the database
    await mongoose.disconnect();
  });
      

  it('POST /api/user', async () => {
    await request(server).post('/api/user').send(req.body).expect(201);
  });

  it('POST /api/user', async () => {
    await userModel.create(req.body);
    await request(server).post('/api/user').send(req.body).expect(200);
  });
});
