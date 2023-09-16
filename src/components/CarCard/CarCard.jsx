import { useCars } from 'context/carsContext';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {
  AddToWishlistBtn,
  CardImage,
  CardItem,
  CardPrice,
  CardTitle,
  CardTopWrapper,
  LearnMoreButton,
} from './CarCard.styled';
import { colors } from 'styles/common/vars';
import { useState } from 'react';
import LearnMoreModal from './LearnMoreModal';
import CarDetailsList from './CarDetailsList';

const CarCard = ({
  car: {
    id,
    make,
    img,
    mileage,
    photoLink,
    rentalCompany,
    rentalPrice,
    type,
    functionalities,
    model,
    address,
    year,
  },
  car,
}) => {
  const { wishlist, reducer } = useCars();
  const [openLearnMore, setOpenLearnMore] = useState(false);
  const isFavorite = wishlist.find(car => car.id === id);

  const toggleLearnMore = () => {
    setOpenLearnMore(prev => !prev);
  };

  const toggleFavorite = () => {
    if (!isFavorite) {
      reducer('wishlist/add', car);
    } else {
      reducer('wishlist/remove', car.id);
    }
  };

  const addressSplitted = address.split(', ');

  const carDetails = [
    addressSplitted[addressSplitted.length - 2],
    addressSplitted[addressSplitted.length - 1],
    rentalCompany,
    type,
    model,
    mileage,
    functionalities[0].split(' ').slice(0, 1).join(' '),
  ];

  return (
    <CardItem>
      <AddToWishlistBtn type="button" onClick={toggleFavorite}>
        {isFavorite ? (
          <AiFillHeart color={colors.accentColor} size={22} />
        ) : (
          <AiOutlineHeart size={22} />
        )}
      </AddToWishlistBtn>
      <CardImage src={photoLink || img} alt={make} width={274} />
      <CardTopWrapper>
        <CardTitle>
          {make}
          <span> {model}</span>, {year}
        </CardTitle>
        <CardPrice>{rentalPrice}</CardPrice>
      </CardTopWrapper>
      <CarDetailsList listData={carDetails} />
      <LearnMoreButton type="button" onClick={toggleLearnMore}>
        Learn more
      </LearnMoreButton>
      {openLearnMore && (
        <LearnMoreModal car={car} toggleModal={toggleLearnMore} />
      )}
    </CardItem>
  );
};

export default CarCard;
