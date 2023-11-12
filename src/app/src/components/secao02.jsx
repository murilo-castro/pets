import { IoLocationOutline } from "react-icons/io5";
import { PiPawPrintThin } from "react-icons/pi";

const Secao02 = () => {
  return (
    <section className="p-5 bg-white mx-5">
      <p className="text-[#062A3C] font-bold mb-3">
        Digite uma cidade e o que procura:
      </p>
      <form className="flex flex-col space-y-2 ">
        <div className="relative">
          <IoLocationOutline className="absolute top-1/2 transform -translate-y-1/2 left-3  " />
          <input
            type="text"
            placeholder="Cidade"
            className="p-2 pl-8 rounded-lg border border-gray-500 font-bold w-[100%] "
          />
        </div>
        <div className="relative">
          <PiPawPrintThin className="absolute top-1/2 transform -translate-y-1/2 left-3  " />
          <input
            type="text"
            placeholder="Tipo de cuidado"
            className="p-2 pl-8 rounded-lg border border-gray-500 font-bold w-[100%]"
          />
        </div>
        <button className="bg-[#062A3C] text-white p-2 rounded-lg">
          Buscar
        </button>
      </form>
    </section>
  );
};

export default Secao02;
