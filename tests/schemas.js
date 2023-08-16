// esse arquivo é responsável por definir os esquemas!

import joi from 'joi';

const getBooking = joi.array().items(
  joi.object({
    bookingid: joi.number().required()
  })
);

const postBooking = joi.object({
  bookingid: joi.number().required(),
  booking: joi.object({
    firstname: joi.string().required(),
    lastname: joi.string().required(),
    totalprice: joi.number().required(),
    depositpaid: joi.boolean().required(),
    bookingdates: joi.object({
      checkin: joi.date().required(),
      checkout: joi.date().required()
    }),
    additionalneeds: joi.string().optional()
  })
});

const putBooking = joi.object({
  firstname: joi.string().required(),
  lastname: joi.string().required(),
  totalprice: joi.number().required(),
  depositpaid: joi.boolean().required(),
  bookingdates: joi.object({
    checkin: joi.date().required(),
    checkout: joi.date().required()
  }),
  additionalneeds: joi.string().optional()
});

export { getBooking, postBooking, putBooking };
