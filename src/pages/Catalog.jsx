import CarsList from 'components/CarsList/CarsList';
import { PageSection } from 'components/Catalog/CatalogPage.styled';
import Filter from 'components/Catalog/Filter';
import { Container } from 'components/Shared/Container.styled';
import { useCars } from 'context/carsContext';

const CatalogPage = () => {
  const { allCars, isLoading } = useCars();

  return (
    <PageSection>
      <Container>
        <Filter />
        {isLoading ? <div>Loading</div> : <CarsList allCars={allCars} />}
      </Container>
    </PageSection>
  );
};

export default CatalogPage;
