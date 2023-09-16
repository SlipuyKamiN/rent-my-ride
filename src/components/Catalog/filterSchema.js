import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  brand: yup.string('Brand name must be a string').notRequired(),
  price: yup.string('Price must be a string').notRequired(),
  mileageFrom: yup.string('Mileage must be a string').notRequired(),
  mileageTo: yup.string('Mileage must be a string').notRequired(),
});
