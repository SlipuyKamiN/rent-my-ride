import Select from 'react-select';
import {
  FilterForm,
  FormLabel,
  MileageInput,
  BeforeInputWrapper,
  SubmitButton,
} from './Filter.styled';
import makes from 'data/makes.json';
import { yupResolver } from '@hookform/resolvers/yup';
import { useController, useForm } from 'react-hook-form';
import { validationSchema } from './filterSchema';

const brands = makes.map(make => ({ value: make, label: make }));
const pricesPerHour = [
  { value: 10, label: 10 },
  { value: 20, label: 20 },
  { value: 30, label: 30 },
  { value: 40, label: 40 },
  { value: 50, label: 50 },
  { value: 60, label: 60 },
  { value: 70, label: 70 },
  { value: 80, label: 80 },
  { value: 90, label: 90 },
  { value: 100, label: 100 },
];

const Filter = ({ cars, setFiltered }) => {
  const { register, handleSubmit, control, getValues } = useForm({
    defaultValues: { brand: '', price: '', mileageFrom: '', mileageTo: '' },
    resolver: yupResolver(validationSchema),
  });
  const {
    field: { value: brandValue, onChange: brandChange, ...brandAttrs },
  } = useController({ name: 'brand', control });
  const {
    field: { value: priceValue, onChange: priceChange, ...priceAttrs },
  } = useController({ name: 'price', control });

  const onSubmit = ({ price, brand, mileageFrom = 0, mileageTo }) =>
    setFiltered(
      cars
        .filter(({ make }) => (brand ? make === brand : make))
        .filter(({ rentalPrice }) => {
          if (!price) return rentalPrice;
          rentalPrice = Number(rentalPrice.replace('$', ''));
          price = Number(price);

          return rentalPrice <= price;
        })
        .filter(({ mileage }) => mileage > mileageFrom)
        .filter(({ mileage }) => (mileageTo ? mileage < mileageTo : mileage))
    );

  return (
    <FilterForm onSubmit={handleSubmit(onSubmit)}>
      <div className="filter-brand">
        <FormLabel>Car brand</FormLabel>
        <Select
          {...brandAttrs}
          classNamePrefix="filter-select"
          onChange={({ value }) => brandChange(value)}
          options={brands}
          placeholder="Enter the text"
        />
      </div>
      <div className="filter-price">
        <FormLabel>Price / 1 hour</FormLabel>
        <BeforeInputWrapper paddingLeft="18px">
          <Select
            {...priceAttrs}
            classNamePrefix="filter-select"
            onChange={({ value }) => priceChange(value)}
            options={pricesPerHour}
            placeholder=""
          />
          <span>To $</span>
        </BeforeInputWrapper>
      </div>
      <div>
        <FormLabel>Car mileage / km</FormLabel>
        <BeforeInputWrapper>
          <MileageInput
            className="from"
            type="number"
            min={0}
            max={Number(getValues().mileageTo) || null}
            {...register('mileageFrom')}
          />
          <span>From</span>
        </BeforeInputWrapper>
        <BeforeInputWrapper>
          <MileageInput
            className="to"
            type="number"
            min={Number(getValues().mileageFrom) || 0}
            {...register('mileageTo')}
          />
          <span>To</span>
        </BeforeInputWrapper>
      </div>
      <SubmitButton type="submit">Search</SubmitButton>
    </FilterForm>
  );
};

export default Filter;
