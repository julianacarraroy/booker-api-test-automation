import request from 'supertest';
import { deleteAllBookings, generateBooking } from '../utils';

const url = process.env.BASEURL;
const route = '/booking';

beforeEach(async() => {
  await deleteAllBookings();
});

describe('Get booking', () => {
  it('should return specific booking', async() => {
    const { body: { bookingid } } = await generateBooking();

    await request(url).get(route + `/${bookingid}`).set('Accept', 'application/json').expect(200);
  });
});
