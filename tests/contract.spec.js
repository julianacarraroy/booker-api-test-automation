import request from 'supertest';
import { deleteAllBookings, generateBooking, generatePayload } from '../utils';
import joi from 'joi';
import { getBooking, postBooking, putBooking } from './schemas';

const url = process.env.BASEURL;
const user = process.env.USER;
const pass = process.env.PASS;

const route = '/booking';
const payload = generatePayload();

describe('CONTRACT', () => {
  afterAll(async() => {
    await deleteAllBookings();
  });

  it('GET', async() => {
    await generateBooking();

    const { body } = await request(url).get(route).expect(200);

    joi.assert(body, getBooking);
  });

  it('POST ', async() => {
    const { body } = await request(url).post(route).set('Accept', 'application/json').send(payload).expect(201);

    joi.assert(body, postBooking);
  });

  it('PUT ', async() => {
    const { body: { bookingid } } = await generateBooking();

    const { body } = await request(url).put(route + `/${bookingid}`)
      .set('Accept', 'application/json')
      .auth(user, pass)
      .send(payload)
      .expect(200);

    joi.assert(body, putBooking);
  });
});
