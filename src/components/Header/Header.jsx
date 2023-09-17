import { Link } from 'react-router-dom';
import { PageHeader, PageLogo } from './Header.styled';
import pageLogoPath from 'images/page-logo.png';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <PageHeader>
      <Link to="/">
        <PageLogo src={pageLogoPath} width={150} />
      </Link>
      <Navigation />
    </PageHeader>
  );
};

export default Header;
