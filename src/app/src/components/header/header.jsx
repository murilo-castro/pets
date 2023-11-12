import Nav from './nav';
import Title from './title';

const Header = () => {
  return (
    <header classNameName="flex flex-col justify-between mx-auto">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Title />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
