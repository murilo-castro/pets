import Secao01 from "./secao01";
import Secao02 from "../main/secao02";
import Secao03 from "../main/secao03";
import Secao04 from "../main/secao04";
export default function Main() {
  return (
    <main className="h-full min-h-full">
      <div>
        <div className="flex flex-col desktop:flex-row justify-between mx-auto mt-1">
          <Secao01 />
          <Secao02 />
        </div>
        <Secao03 />
        <Secao04 />
      </div>
    </main>
  );
}
