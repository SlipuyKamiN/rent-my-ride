const { HeroTitle, HeroDescription, HeroLink } = require('./Hero.styled');

const Hero = () => {
  return (
    <>
      <HeroTitle>Welcome to Rent my ride App</HeroTitle>
      <HeroDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid
        voluptate enim illum nostrum voluptas pariatur quidem voluptatibus neque
        velit incidunt ad, quasi ex dolor iste quos aut eos natus! Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Esse cum accusantium
        inventore, delectus error in dolor totam dicta iusto, quam id sint
        repudiandae magnam quod qui saepe similique ducimus laborum!Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Esse cum accusantium
        inventore, delectus error in dolor totam dicta iusto, quam id sint
        repudiandae magnam quod qui saepe similique ducimus laborum!
      </HeroDescription>
      <HeroLink to="/catalog">Let's rent your dream car!</HeroLink>
    </>
  );
};

export default Hero;
