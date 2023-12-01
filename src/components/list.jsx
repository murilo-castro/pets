'use client';

import { useContext } from 'react';
import { MapsContext } from '../contexts/MapsContext';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from "react-icons/fa";

const stars = [...(new Array(5).keys())]

const List = () => {
  const { markers } = useContext(MapsContext);
  return (
    <div className='flex my-2 m-3 bg-slate-500'>
      <ul className="w-full h-[612px] md:max-w-[448px]  overflow-auto">
        {markers.map(({ name, id, photo, rating, number }) => (
          <li key={id}>
            <div className="grid grid-cols-3">
              <div className="col-span-2 grid grid-cols-3 my-4">
                <div>
                  <img src={photo} alt={name} />
                </div>
                <div className="col-span-2 ">
                  <span className="flex ml-5">{name}</span>
                </div>
              </div>
              <div className="flex ml-auto mr-2 my-4">
                <div className="flex">
                  {stars.map(index => (
                    <FaStar key={index} className={rating >= index + 1 ? "text-yellow-400" : 'text-gray-300 ' }/>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <span>Distância 40km</span>
              <span>Abertos das 8h às 18h</span>
            </div>
            <div className="flex gap-8">
              <Link
                href={'tel:' + number}
                className="flex text-rexpet text-xl hover:text-blue-500"
                aria-current="page"
              >
                {number}
              </Link>
              <Link
                href={'https://web.whatsapp.com/send?phone=' + number}
                className="flex text-rexpet text-xl hover:text-blue-500"
                aria-current="page"
              >
                {number}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
