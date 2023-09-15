import CarsList from 'components/CarsList/CarsList';
import { CatalogSection } from 'components/Catalog/CatalogPage.styled';
import { Container } from 'components/Shared/Container.styled';
import { useCars } from 'context/carsContext';

const CatalogPage = () => {
  const { allCars, isLoading } = useCars();

  return (
    <CatalogSection>
      <Container>
        {isLoading ? <div>Loading</div> : <CarsList allCars={allCars} />}
      </Container>
    </CatalogSection>
  );
};

export default CatalogPage;
