const app = require('../app')
const request = require('supertest')

const businessStub = {
  "businessName" : "Tesla",
  "industry": "Automobile",
  "addressLine1": "124 Prairie st",
  "addressLine2": "Suite 32",
  "city": "Dallas",
  "state": "TX",
  "zipcode": "75051"
}

describe('Test business routes', () => {
    test('responds to /', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toEqual('Hello World!');
      });

    test('post endpoint for /businesses', async() => {
      const res = await request(app).post('/businesses').send(businessStub);
      expect(res.statusCode).toBe(201);
      console.log(res.body);
      expect(res.body).toEqual(businessStub);
    });
})

