import CarCard from 'components/CarCard/CarCard';
import { ItemsList, LoadMoreBtn } from './CarsList.styled';
import { useState } from 'react';

const CarsList = ({ allCars }) => {
  const [loadMore, setLoadMore] = useState(false);

  const carsToRender = allCars.slice(0, loadMore ? allCars.length : 8);

  if (!allCars.length) return <div>This cars list is empty yet!</div>;

  return (
    <>
      <ItemsList>
        {carsToRender.map(car => (
          <CarCard car={car} key={car.id + car.mileage} />
        ))}
      </ItemsList>
      {!loadMore && allCars.length > 8 && (
        <LoadMoreBtn type="button" onClick={setLoadMore}>
          Load more
        </LoadMoreBtn>
      )}
    </>
  );
};

export default CarsList;
