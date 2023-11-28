'use client';

import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { TbPaw } from 'react-icons/tb';
import { MapsContext } from '../contexts/MapsContext';
import Autocomplete from 'react-google-autocomplete';
import { apiNext } from '../services/axiosAPi';

const Form = () => {
  const { saveCity, saveCare, setLoading, savePlaces } =
    useContext(MapsContext);
  const [inputCity, setInputCity] = useState('');
  const [inputCare, setInputCare] = useState('');
  const router = useRouter();

  const handleChangueForm = async (e) => {
    e.preventDefault();
    if (inputCity && inputCare) {
      saveCity(inputCity);
      saveCare(inputCare);

      try {
        setLoading(true);
        const response = await apiNext.get(
          `/googlePlaces/?city=${inputCity}&care=${inputCare}`
        );

        savePlaces(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

      if (window.location.pathname !== '/pet-intineraries')
        router.push('pet-intineraries');
    }
  };

  const place = async (place) => {
    if (place) {
      setInputCity(place.formatted_address);
    }
  };

  return (
    <section className="bg-white shrink-1 p-5 w-[100%] h-276px min-h-[276px] py-[6px]">
      <p className="text-primary w-[100%] text-[20px] xl:text-[24px] font-semibold mb-3">
        Digite uma cidade e o que procura:
      </p>
      <form
        onSubmit={handleChangueForm}
        className="flex flex-col gap-[8px] space-y-2 pb-[16px]"
      >
        <div className="relative">
          <IoLocationOutline className="absolute top-1/2 transform -translate-y-1/2 left-3  " />
          <Autocomplete
            apiKey={process.env.MAPS_KEY}
            onPlaceSelected={place}
            placeholder="Cidade"
            onChange={(e) => setInputCity(e.target.value)}
            className="p-2 pl-8 h-[56px] rounded-lg border border-gray-500 font-bold min-w-0 w-[100%] "
          />
        </div>
        <div className="relative">
          <TbPaw className="absolute top-1/2 transform -translate-y-1/2 left-3  " />
          <input
            value={inputCare}
            type="text"
            placeholder="Tipo de cuidado"
            onChange={(e) => setInputCare(e.target.value)}
            className="p-2 pl-8 h-[56px] rounded-lg border border-gray-500 font-bold min-w-0 w-[100%]"
          />
        </div>
        <button className="bg-primary h-[56px] text-white p-2 rounded-lg">
          Buscar
        </button>
      </form>
    </section>
  );
};

export default Form;
