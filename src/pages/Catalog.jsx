import CarsList from 'components/CarsList/CarsList';
import { CatalogSection } from 'components/Catalog/CatalogPage.styled';
import { Container } from 'components/Shared/Container.styled';

const CatalogPage = () => {
  return (
    <CatalogSection>
      <Container>
        <CarsList />
      </Container>
    </CatalogSection>
  );
};

export default CatalogPage;
