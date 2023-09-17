import Modal from 'components/Shared/Modal';
import { AiOutlineClose } from 'react-icons/ai';
import {
  CarDescription,
  CarImage,
  CloseButton,
  ConditionsItem,
  ConditionsList,
  InfoBlockTitle,
} from './LearnMoreModal.styled';
import { CardTitle, CardTopWrapper } from './CarCard.styled';
import CarDetailsList from './CarDetailsList';
import { SubmitButton } from 'components/Catalog/Filter.styled';

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
  car,
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
        <CardTitle>
          {make}
          <span> {model}</span>, {year}
        </CardTitle>
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
                  : <span>{value}</span>
                </>
              )}
            </ConditionsItem>
          );
        })}
      </ConditionsList>
      <SubmitButton>Rental car</SubmitButton>
    </Modal>
  );
};

export default LearnMoreModal;
