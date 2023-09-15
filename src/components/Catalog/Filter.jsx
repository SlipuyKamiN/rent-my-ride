import Select from 'react-select';
import {
  FilterForm,
  FormLabel,
  MileageInput,
  SubmitButton,
} from './Filter.styled';
import makes from 'data/makes.json';

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

const Filter = () => {
  return (
    <FilterForm>
      <div className="filter-brand">
        <FormLabel>Car brand</FormLabel>
        <Select
          classNamePrefix="filter-select"
          options={brands}
          placeholder="Enter the text"
        />
      </div>
      <div className="filter-price">
        <FormLabel>Price / 1 hour</FormLabel>
        <Select
          classNamePrefix="filter-select"
          options={pricesPerHour}
          placeholder="Enter the text"
        />
      </div>
      <div>
        <FormLabel>Car mileage / km</FormLabel>
        <MileageInput type="text" placeholder="From" />
        <MileageInput type="text" placeholder="To" />
      </div>
      <SubmitButton type="submit">Search</SubmitButton>
    </FilterForm>
  );
};

export default Filter;
