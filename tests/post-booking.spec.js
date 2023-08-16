import request from 'supertest';
import { deleteAllBookings, generatePayload } from '../utils';

const url = process.env.BASEURL;
const route = '/booking';
const payload = generatePayload();

describe('POST ' + route, () => {
  afterAll(async() => {
    await deleteAllBookings();
  });

  it('should return sucess when create one booking', async() => {
    await request(url).post(route).set('Accept', 'application/json').send(payload).expect(201);
  });

  it('should return I\'m a Teapot when using a bad accept header', async() => {
    await request(url).post(route).set('Accept', '').send(payload).expect(418);
  });

  it('should return an error when a bad payload is sent', async() => {
    const badPayload = { firstname: 'Jim', lastname: 'Brown', totalprice: 111, depositpaid: true };

    await request(url).post(route).set('Accept', 'application/json').send(badPayload).expect(500);
  });
});
