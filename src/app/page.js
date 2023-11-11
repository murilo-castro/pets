import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header classNameName="flex flex-col justify-between max-w-7xl mx-auto p-4">
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
              <h1 className="text-sky-800 text-4xl font-black">rex.pet</h1>
            </a>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="text-gray-900 text-xl hover:text-blue-500"
                    aria-current="page"
                  >
                    Produtos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 text-xl hover:text-blue-500"
                  >
                    Cuidados Pet
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 text-xl hover:text-blue-500"
                  >
                    Roteiros Pet Family
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
