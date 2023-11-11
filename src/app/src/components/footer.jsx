import { AiOutlineLinkedin } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-around max-w-7xl mx-auto p-4">
      <p className="text-sky-800 text-4xl font-black">Rex.Pet</p>
      <p>
        Copyright © Todos os direitos reservados - {new Date().getFullYear()}{" "}
      </p>
      <div className="flex space-x-2">
        <a href="#">
          <GrInstagram />
        </a>
        <a href="#">
          <AiOutlineLinkedin />
        </a>
      </div>
    </footer>
  );
}
