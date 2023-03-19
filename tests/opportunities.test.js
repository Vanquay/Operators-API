const app = require('../app')
const request = require('supertest')

describe('Test opportunities routes', () => {

    test('post endpoint for /ops', async() => {
      const res = await request(app).post('/businesses').send(businessStub);
      expect(res.statusCode).toBe(201);
      console.log(res.body);
      expect(res.body).toEqual(businessStub);
    });
})