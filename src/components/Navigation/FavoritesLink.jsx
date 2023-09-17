import { useCars } from 'context/carsContext';
import { AiOutlineHeart } from 'react-icons/ai';

const FavoritesLink = () => {
  const { wishlist } = useCars();

  return (
    <>
      <span>Favorites </span>{' '}
      {wishlist.length > 0 && (
        <>
          <AiOutlineHeart />
          <span>{wishlist.length}</span>
        </>
      )}
    </>
  );
};

export default FavoritesLink;
