import { BsStackOverflow } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { Empty, EmptyDescription } from './EmptySection.styled';

const EmptySection = ({ children, filter = false }) => {
  return (
    <Empty>
      {filter ? <FiFilter size={100} /> : <BsStackOverflow size={100} />}
      <EmptyDescription>{children}</EmptyDescription>
    </Empty>
  );
};

export default EmptySection;
