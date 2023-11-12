import Link from "next/link";
import { ImSearch } from "react-icons/im";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";

const Secao03 = () => {
  return (
    <section>
      <ul className="flex  justify-center flex-row gap-16 text-auxiliaryPink font-bold ">
        <li className="px-2">
          <Link href="#">
            <ImSearch />
            Encontre especialistas
          </Link>
        </li>
        <li>
          <Link href="#">
            <AiOutlineStar /> Os melhores proficionais
          </Link>
        </li>
        <li>
          <Link href="#">
            <AiOutlineHeart /> Avalie o serviço
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Secao03;
