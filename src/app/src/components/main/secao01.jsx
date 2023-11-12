import Image from "next/image";

const Secao01 = () => {
  const tamanhoDaTelaPequeno = "block";
  const tamanhoDaTelaGrande = "block";

  return (
    <section className="relative p-0 pl-5">
      {/* Imagem para dispositivos móveis */}
      <div className="block  tablet:hidden ">
        <Image
          src="/imagens/frameMobile01.png"
          width={500}
          height={500}
          alt="frame"
          className={`${tamanhoDaTelaPequeno} pr-5`}
        />
      </div>

      {/* Imagem para desktop */}
      <div className="hidden laptop:block ">
        <Image
          src="/imagens/frameMobile02.png"
          width={894}
          height={276}
          alt="frame"
          className={`${tamanhoDaTelaGrande} min-h-[276px] md:[894px] pr-5`}
        />
      </div>
    </section>
  );
};

export default Secao01;
