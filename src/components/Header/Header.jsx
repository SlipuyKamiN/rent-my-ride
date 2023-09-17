import { Link } from 'react-router-dom';
import { NavigationLink, NavList, PageHeader, PageLogo } from './Header.styled';
import pageLogoPath from 'images/page-logo.png';
import { useCars } from 'context/carsContext';
import { AiOutlineHeart } from 'react-icons/ai';

const Header = () => {
  const { wishlist } = useCars();

  return (
    <PageHeader>
      <Link to="/">
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
            <NavigationLink to="/favorites">
              <span>Favorites </span>
              {wishlist.length > 0 && (
                <>
                  <AiOutlineHeart />
                  <span>{wishlist.length}</span>
                </>
              )}
            </NavigationLink>
          </li>
        </NavList>
      </nav>
    </PageHeader>
  );
};

export default Header;
