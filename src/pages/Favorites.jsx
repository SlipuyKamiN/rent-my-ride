import CarsList from 'components/CarsList/CarsList';
import { PageSection } from 'components/Catalog/CatalogPage.styled';
import Filter from 'components/Catalog/Filter';
import { Container } from 'components/Shared/Container.styled';
import { useCars } from 'context/carsContext';
import { useEffect, useState } from 'react';

const FavoritesPage = () => {
  const { wishlist, isLoading } = useCars();
  const [filteredWishlist, setFilteredWishlist] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setFilteredWishlist(wishlist);
    }
  }, [wishlist, isLoading]);

  return (
    <PageSection>
      <Container>
        <Filter cars={wishlist} setFiltered={setFilteredWishlist} />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <CarsList allCars={filteredWishlist} />
        )}
      </Container>
    </PageSection>
  );
};

export default FavoritesPage;
