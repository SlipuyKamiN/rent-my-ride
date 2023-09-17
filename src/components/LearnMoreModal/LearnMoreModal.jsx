import Modal from 'components/Shared/Modal';
import { AiOutlineClose } from 'react-icons/ai';
import {
  CarDescription,
  CarImage,
  CarTitle,
  CloseButton,
  ConditionsItem,
  ConditionsList,
  InfoBlockTitle,
  RentalLink,
} from './LearnMoreModal.styled';
import { CardTopWrapper } from '../CarCard/CarCard.styled';
import CarDetailsList from '../CarCard/CarDetailsList';

const LearnMoreModal = ({
  car: {
    id,
    make,
    img,
    mileage,
    photoLink,
    description,
    rentalConditions,
    rentalPrice,
    engineSize,
    fuelConsumption,
    type,
    accessories,
    functionalities,
    model,
    address,
    year,
  },
  toggleModal,
}) => {
  const addressSplitted = address.split(', ');

  const carDetails = [
    addressSplitted[addressSplitted.length - 2],
    addressSplitted[addressSplitted.length - 1],
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine size: ${engineSize}`,
  ];

  const conditionsData = [
    ...rentalConditions.split('\n'),
    `Mileage:${mileage}`,
    `Price:${rentalPrice}`,
  ];

  return (
    <Modal toggleModal={toggleModal}>
      <CloseButton type="button" onClick={toggleModal}>
        <AiOutlineClose size={24} />
      </CloseButton>
      <CarImage src={photoLink || img} />
      <CardTopWrapper>
        <CarTitle>
          {make}
          <span> {model}</span>, {year}
        </CarTitle>
      </CardTopWrapper>
      <CarDetailsList listData={carDetails} marginBottom="14px" />
      <CarDescription>{description}</CarDescription>
      <InfoBlockTitle>Accessories and functionalities:</InfoBlockTitle>
      <CarDetailsList
        listData={[...accessories, ...functionalities]}
        marginBottom="24px"
      />
      <InfoBlockTitle>Rental Conditions:</InfoBlockTitle>
      <ConditionsList>
        {conditionsData.map(condition => {
          const [key, value] = condition.split(':');
          return (
            <ConditionsItem key={key}>
              {key}{' '}
              {value && (
                <>
                  : <span>{value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                </>
              )}
            </ConditionsItem>
          );
        })}
      </ConditionsList>
      <RentalLink href="tel:+380730000000">Rental car</RentalLink>
    </Modal>
  );
};

export default LearnMoreModal;
