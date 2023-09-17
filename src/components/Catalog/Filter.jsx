import Select from 'react-select';
import {
  FilterForm,
  FormLabel,
  MileageInput,
  BeforeInputWrapper,
  SubmitButton,
} from './Filter.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { useController, useForm } from 'react-hook-form';
import { validationSchema } from './filterSchema';
import { brands, pricesPerHour } from 'data/filter';
import { formatThousands } from 'utils/formatThousands';

const Filter = ({ cars, setFiltered }) => {
  const { register, handleSubmit, control, getValues, setValue } = useForm({
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
            {...register('mileageFrom')}
            className="from"
            type="text"
            min={0}
            max={Number(getValues().mileageTo) || null}
            maxLength={7}
            onChange={({ target }) =>
              setValue('mileageFrom', formatThousands(target.value))
            }
          />
          <span>From</span>
        </BeforeInputWrapper>
        <BeforeInputWrapper>
          <MileageInput
            {...register('mileageTo')}
            className="to"
            type="text"
            min={Number(getValues().mileageFrom) || 0}
            maxLength={7}
            onChange={({ target }) =>
              setValue('mileageTo', formatThousands(target.value))
            }
          />
          <span>To</span>
        </BeforeInputWrapper>
      </div>
      <SubmitButton type="submit">Search</SubmitButton>
    </FilterForm>
  );
};

export default Filter;
