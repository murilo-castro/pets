import Image from 'next/image';
import Footer from './src/components/footer';
import Main from './src/components/main';
import { LiaHeartbeatSolid } from 'react-icons/lia';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbPaw } from 'react-icons/tb';

export default function Home() {
  return (
    <>
      <div className="max-h-screen bg-main max-w-7xl mx-auto dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 ">
        <header classNameName="flex flex-col justify-between max-w-7xl mx-auto p-4">
          <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="#" className="flex items-center">
                <h1 className="text-rexpet text-4xl ml-3 font-black">
                  rex.pet
                </h1>
              </a>
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-default"
              >
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
            </div>
          </nav>
        </header>
        <Main />
      </div>
      <Footer />
    </>
  );
}
