import { Link } from 'react-router-dom';
import { NavigationLink, NavList, PageHeader, PageLogo } from './Header.styled';
import pageLogoPath from 'images/page-logo.png';

const Header = () => {
  return (
    <PageHeader>
      <Link>
        <PageLogo src={pageLogoPath} width={150} />
      </Link>
      <nav>
        <NavList>
          <li>
            <NavigationLink to="/">Home</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/catalog">Catalog</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/favorites">Favorites</NavigationLink>
          </li>
        </NavList>
      </nav>
    </PageHeader>
  );
};

export default Header;
