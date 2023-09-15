import CarsList from 'components/CarsList/CarsList';
import { PageSection } from 'components/Catalog/CatalogPage.styled';
import { Container } from 'components/Shared/Container.styled';
import { useCars } from 'context/carsContext';

const FavoritesPage = () => {
  const { wishlist, isLoading } = useCars();

  return (
    <PageSection>
      <Container>
        {isLoading ? <div>Loading...</div> : <CarsList allCars={wishlist} />}
      </Container>
    </PageSection>
  );
};

export default FavoritesPage;
