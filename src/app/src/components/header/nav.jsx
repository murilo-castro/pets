import { LiaHeartbeatSolid } from 'react-icons/lia';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbPaw } from 'react-icons/tb';

const Nav = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="#"
              className="flex text-primary text-xl hover:text-blue-500"
              aria-current="page"
            >
              <GiHamburgerMenu className="mr-2 mt-1" />
              Produtos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex text-primary text-xl hover:text-blue-500"
            >
              <LiaHeartbeatSolid className="mr-2 mt-1" />
              Cuidados Pet
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex text-primary text-xl hover:text-blue-500"
            >
              <TbPaw className="mr-2 mt-1" />
              Roteiros Pet Family
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
