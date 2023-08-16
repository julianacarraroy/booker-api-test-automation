import request from 'supertest';
import { deleteAllBookings } from '../utils';

const url = process.env.BASEURL;
const route = '/booking';

beforeEach(async() => {
  await deleteAllBookings();
});

describe('DELETE', () => {
  it('should return empty array', async() => {
    const { body } = await request(url).get(route).expect(200);

    expect(body).toEqual([]);
  });
});
