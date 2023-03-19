const app = require('../app')
const request = require('supertest')

const businessStub = {
  "businessName" : "Tesla",
  "industry": "Automobile",
  "addressLine1": "124 Prairie st",
  "addressLine2": "Suite 32",
  "city": "Dallas",
  "state": "TX",
  "zip": "75051"
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

describe('Test opportunities routes', () => {

  const opsStub = {
    "operatorId": 60,
    "businessId": 14,
    "businessName": "Tesla",
    "opTitle": "Changing tyres",
    "opDescription": "Operators will be tasked with replacing model 3 tyres...",
    "pay": 100,
    "startTime": "2021-10-22 10:00:00",
    "endTime": "2021-10-22 15:55:00"
}
    test('post endpoint for /ops', async() => {
      const res = await request(app).post('/ops').send(opsStub);
      expect(res.statusCode).toBe(201);
      console.log(res.body);
      expect(res.body).toEqual(opsStub);
    });
})

describe('Test Schedules routes', () => {

})
