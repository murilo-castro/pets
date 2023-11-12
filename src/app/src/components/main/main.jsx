import Secao01 from "./secao01";
import Secao02 from "../main/secao02";
import Secao03 from "../main/secao03";
import Secao04 from "../main/secao04";
export default function Main() {
  return (
    <main>
      <div className="flex flex-col desktop:flex-row justify-between m-auto">
        <Secao01 />
        <Secao02 />
        <Secao03 />
        <Secao04 />
      </div>
    </main>
  );
}
