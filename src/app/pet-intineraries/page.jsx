'use client'

import { useEffect, useState } from 'react';
import CarouselServices from '../../components/carouselServices';
import Form from '../../components/form';
import List from '../../components/list';

export default function Teste() {
  const [screen, setSecreen] = useState(window.innerWidth)

  useEffect(() => {
    setSecreen(window.innerWidth)
  }, [screen])

  const tela = true;

  return screen > 600 ? (
    <div className="flex gap-6 justify-between grow bg-main w-full max-w-full mx-auto dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50">
      <div className='2xl:w-[448px] h-[922px] gap-[40px]'>
        <Form className='p-[16px]' />
        <List />
      </div>
      <CarouselServices className='flex' />
    </div>
  ) : (
    <div className="grid grid-cols-1 bg-main w-full mx-auto dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50">
      <div>
        <Form />
      </div>
      <div>
        <CarouselServices className='flex' />
      </div>
      <div>
        <List />
      </div>
    </div>
  )
}
