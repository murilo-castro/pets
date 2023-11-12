import Secao01 from "./secao01";
import Secao02 from "../main/secao02";
import Secao03 from "../main/secao03";
import Secao04 from "../main/secao04";
export default function Main() {
  return (
    <main className="h-[calc(100vh_-_4rem)] lg:h-[calc(100vh_-_5rem)]">
      <div className="flex flex-col justify-between m-auto desktop:flex-row">
        <Secao01 />
        <Secao02 />
        <Secao03 />
        <Secao04 />
      </div>
    </main>
  );
}
