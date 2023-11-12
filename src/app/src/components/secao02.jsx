import { IoLocationOutline } from "react-icons/io5";
import { TbPaw } from "react-icons/tb";

const Secao02 = () => {
  return (
    <section className="bg-white shrink-1 mx-5 desktop:w-[422px] xl:w-[454px] h-276px min-h-[276px] py-[6px]">
      <p className="text-primary w-[100%] text-[20px] xl:text-[24px] font-semibold mb-3">
        Digite uma cidade e o que procura:
      </p>
      <form className="flex flex-col gap-[8px] space-y-2 pb-[16px]">
        <div className="relative">
          <IoLocationOutline className="absolute top-1/2 transform -translate-y-1/2 left-3  " />
          <input
            type="text"
            placeholder="Cidade"
            className="p-2 pl-8 h-[56px] rounded-lg border border-gray-500 font-bold w-[100%] "
          />
        </div>
        <div className="relative">
          <TbPaw className="absolute top-1/2 transform -translate-y-1/2 left-3  " />
          <input
            type="text"
            placeholder="Tipo de cuidado"
            className="p-2 pl-8 h-[56px] rounded-lg border border-gray-500 font-bold w-[100%]"
          />
        </div>
        <button className="bg-primary h-[56px] text-white p-2 rounded-lg">
          Buscar
        </button>
      </form>
    </section>
  );
};

export default Secao02;
