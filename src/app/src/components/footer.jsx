import { AiOutlineLinkedin } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="flex flex-col  text-center  max-w-7xl mx-auto p-4 bg-[#062A3C] text-white  laptop:flex-row laptop:justify-between ">
      <p className="text-2xl text-white font-black p-2 mx-11">rex.pet</p>
      <p className="p-2 laptop:p-3 laptop:mx-[20vw]">
        Todos os direitos reservados - {new Date().getFullYear()}{" "}
      </p>
      <div className="flex space-x-2 m-auto p-2">
        <a href="#" className="hover:scale-110">
          <GrInstagram className="w-5 h-5 mt-0.5 hover:text-blue-500 trasition duration-300" />
        </a>
        <a href="#" className="hover:scale-110">
          <AiOutlineLinkedin className="w-6 h-6 hover:text-blue-500 transition duration-300" />
        </a>
      </div>
    </footer>
  );
}
