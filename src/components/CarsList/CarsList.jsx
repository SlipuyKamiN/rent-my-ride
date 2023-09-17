import CarCard from 'components/CarCard/CarCard';
import { ItemsList, LoadMoreBtn } from './CarsList.styled';
import { useState } from 'react';
import EmptySection from 'components/EmptySection/EmptySection';

const CarsList = ({ allCars }) => {
  const [loadMore, setLoadMore] = useState(false);

  const carsToRender = allCars.slice(0, loadMore ? allCars.length : 8);

  if (carsToRender.length === 0)
    return (
      <EmptySection filter>
        There is no cars. Please, change the filter settings and try again
      </EmptySection>
    );

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
