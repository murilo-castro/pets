import Nav from './nav';
import Title from './title';
import NavButton from './navButton';

const Header = () => {
  return (
    <header classNameName="flex flex-col justify-between mx-auto">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4 mb-5">
        <Title />
        <NavButton />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
