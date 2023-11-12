import Image from 'next/image';
import Main from '../components/main/main';

export default function Home() {
  return (
    <div className="flex grow bg-main mx-auto dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 ">
      <Main />
    </div>
  );
}
