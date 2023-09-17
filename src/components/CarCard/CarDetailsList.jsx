import { CardDetailsList, CardDetailsItem } from './CarCard.styled';

const CarDetailsList = ({ listData, marginBottom = '28px' }) => {
  return (
    <CardDetailsList marginBottom={marginBottom}>
      {listData.map((item, index) => (
        <CardDetailsItem key={item + index}>{item}</CardDetailsItem>
      ))}
    </CardDetailsList>
  );
};

export default CarDetailsList;
