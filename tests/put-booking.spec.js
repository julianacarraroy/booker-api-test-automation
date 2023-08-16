import request from 'supertest';
import { deleteAllBookings, generateBooking } from '../utils';

const url = process.env.BASEURL;
const user = process.env.USER;
const pass = process.env.PASS;
const route = '/booking';

describe('PUT', () => {
  afterAll(async() => {
    await deleteAllBookings();
  });

  it('should update first name ', async() => {
    const { body: { bookingid } } = await generateBooking();
    const newPayload = { firstname: 'Fulano', lastname: 'De Tal', totalprice: 111, depositpaid: true, bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' } };

    const { body } = await request(url).put(route + `/${bookingid}`).set('Accept', 'application/json').auth(user, pass).send(newPayload).expect(200);
    expect(body.firstname).toEqual(newPayload.firstname);
  });
});
