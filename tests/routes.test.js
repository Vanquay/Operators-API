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

const opsStub = {
  "operatorId": 60,
  "businessId": 1,
  "businessName": "Tesla",
  "opTitle": "Changing tyres",
  "opDescription": "Operators will be tasked with replacing model 3 tyres...",
  "pay": 100,
  "startTime": "2021-10-22 10:00:00",
  "endTime": "2021-10-22 15:55:00"
}

const scheduleStub = [{
  "businessName": "Tesla",
  "opTitle": "Changing tyres",
  "pay": 100,
  "startTime": "2021-10-22 10:00:00",
  "endTime": "2021-10-22 15:55:00",
  "addressLine1": "3422 Devin st",
  "addressLine2": "Suite 32",
  "city": "Dallas",
  "state": "TX",
  "zip": "75051"
}]

describe('Test business routes', () => {
    test('responds to /', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toEqual('Hello World!');
      });

    test('POST endpoint for /businesses', async() => {
      const res = await request(app).post('/businesses').send(businessStub);
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual(businessStub);
    });
})

describe('Test opportunities routes', () => {
    test('POST endpoint for /ops', async() => {
      const res = await request(app).post('/ops').send(opsStub);
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual(opsStub);
    });
})

describe('Test Schedules routes', () => {


  test('GET endpoint for /operators/:operatorId/schedules', async() => {
    //Insert stubs
    const res = await request(app).get('/operators/1/schedules');
    expect(res.statusCode).toBe(200);
  })

})
