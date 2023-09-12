import Hero from 'components/Home/Hero';
import { HeroSection } from 'components/Home/Hero.styled';
import { Container } from 'components/Shared/Container.styled';

const HomePage = () => {
  return (
    <HeroSection>
      <Container>
        <Hero />
      </Container>
    </HeroSection>
  );
};

export default HomePage;
