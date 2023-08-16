import request from 'supertest';
import { deleteAllBookings, generateBooking } from '../utils';

const url = process.env.BASEURL;
const user = process.env.USER;
const pass = process.env.PASS;
const route = '/booking';

describe('PATCH', () => {
  afterAll(async() => {
    await deleteAllBookings();
  });

  it('should update first and last name with a partial payload', async() => {
    const { body: { bookingid } } = await generateBooking();
    const newPayload = { firstname: 'Teste', lastname: 'Patch' };

    const { body } = await request(url).patch(route + `/${bookingid}`).set('Accept', 'application/json').auth(user, pass).send(newPayload).expect(200);
    expect(body.firstname).toEqual(newPayload.firstname);
    expect(body.lastname).toEqual(newPayload.lastname);
  });
});
