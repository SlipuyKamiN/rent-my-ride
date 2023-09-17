import { Oval } from 'react-loader-spinner';
import { colors } from 'styles/common/vars';

const LoadingSpinner = () => (
  <Oval
    width={150}
    wrapperStyle={{ justifyContent: 'center' }}
    secondaryColor={colors.accentColor}
    color={colors.accentHoverColor}
    strokeWidth={4}
    strokeWidthSecondary={4}
  />
);

export default LoadingSpinner;
