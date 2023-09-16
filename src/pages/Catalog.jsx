import CarsList from 'components/CarsList/CarsList';
import { PageSection } from 'components/Catalog/CatalogPage.styled';
import Filter from 'components/Catalog/Filter';
import { Container } from 'components/Shared/Container.styled';
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
        {isLoading ? <div>Loading</div> : <CarsList allCars={filteredCars} />}
      </Container>
    </PageSection>
  );
};

export default CatalogPage;
