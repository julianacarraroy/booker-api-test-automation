import { faker } from '@faker-js/faker';
import request from 'supertest';
const url = process.env.BASEURL;
const user = process.env.USER;
const pass = process.env.PASS;
const route = '/booking';

function generatePayload() {
  return {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    totalprice: faker.number.int(),
    depositpaid: faker.datatype.boolean(),
    bookingdates: {
      checkin: faker.date.past(),
      checkout: faker.date.future()
    }
  };
}

async function deleteAllBookings() {
  const { body } = await request(url).get(route);

  for (const element of body) {
    await request(url).delete(route + `/${element.bookingid}`).set('Accept', 'application/json').auth(user, pass);
  }
}

async function generateBooking(quantity = 1) {
  return quantity === 1 ? createOne() : createBookings(quantity);
}

async function createOne() {
  const payload = generatePayload();
  return await request(url).post(route).set('Accept', 'application/json').send(payload);
}

async function createBookings(quantity) {
  for (let index = 0; index < quantity; index++) {
    const payload = generatePayload();
    await request(url).post(route).set('Accept', 'application/json').send(payload);
  }
}

export { generatePayload, deleteAllBookings, generateBooking };
