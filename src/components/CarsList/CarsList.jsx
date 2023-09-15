import CarCard from 'components/CarCard/CarCard';
import { ItemsList } from './CarsList.styled';

const CarsList = ({ allCars }) => {
  return (
    <ItemsList>
      {allCars.map(car => (
        <CarCard car={car} key={car.id + car.mileage} />
      ))}
    </ItemsList>
  );
};

export default CarsList;
