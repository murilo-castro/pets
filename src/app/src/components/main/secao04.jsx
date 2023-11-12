import Link from "next/link";
import Image from "next/image";
const Secao04 = () => {
  return (
    <section>
      <p>Serviços buscados com frequencia</p>
      <Link href="#">
        <Image
          src="/imagens/img01.png"
          width={200}
          height={200}
          alt="Pet Walker"
        />
      </Link>
      <Link href="#">
        <Image
          src="/imagens/img02.png"
          width={200}
          height={200}
          alt="Veterinário"
        />
      </Link>
      <Link href="#">
        <Image
          src="/imagens/img03.png"
          width={200}
          height={200}
          alt="Pet Sister"
        />
      </Link>
      <Link href="#">
        <Image
          src="/imagens/img04.png"
          width={200}
          height={200}
          alt="Adestrador"
        />
      </Link>
    </section>
  );
};

export default Secao04;
