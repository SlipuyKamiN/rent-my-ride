import { CardDetailsList, CardDetailsItem } from './CarCard.styled';

const CarDetailsList = ({ listData }) => {
  return (
    <CardDetailsList>
      {listData.map((item, index) => (
        <CardDetailsItem key={item + index}>{item}</CardDetailsItem>
      ))}
    </CardDetailsList>
  );
};

export default CarDetailsList;
