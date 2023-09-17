import CarsList from 'components/CarsList/CarsList';
import { PageSection } from 'components/Catalog/CatalogPage.styled';
import Filter from 'components/Catalog/Filter';
import { Container } from 'components/Shared/Container.styled';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import { useCars } from 'context/carsContext';
import { useEffect, useState } from 'react';

const CatalogPage = () => {
  const { allCars, isLoading } = useCars();
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setFilteredCars(allCars);
    }
  }, [allCars, isLoading]);

  return (
    <PageSection>
      <Container>
        <Filter cars={allCars} setFiltered={setFilteredCars} />
        {!isLoading && allCars.length > 0 ? (
          <CarsList allCars={filteredCars} />
        ) : (
          <LoadingSpinner />
        )}
      </Container>
    </PageSection>
  );
};

export default CatalogPage;
