import request from 'supertest';
import { deleteAllBookings, generateBooking } from '../utils';

const url = process.env.BASEURL;
const route = '/booking';

beforeEach(async() => {
  await deleteAllBookings();
});

describe('Get Booking IDs', () => {
  it('should return two bookings', async() => {
    await generateBooking(2);

    const { body } = await request(url).get(route).expect(200);

    expect(body).toHaveLength(2);
  });
});
