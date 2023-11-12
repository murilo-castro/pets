import Nav from './nav';
import Title from './title';

const Header = () => {
  return (
    <header classNameName="flex flex-col justify-between max-w-7xl mx-auto p-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Title />
        <Nav />
      </div>
    </header>
  );
};

export default Header;