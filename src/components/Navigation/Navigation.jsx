import { NavList, NavigationLink } from './Navigation.styled';
import { NavLinks } from 'data/headerNav';

const Navigation = () => {
  return (
    <nav>
      <NavList>
        {NavLinks.map(({ href, content }) => (
          <li key={href}>
            <NavigationLink to={href}>{content}</NavigationLink>
          </li>
        ))}
      </NavList>
    </nav>
  );
};

export default Navigation;
