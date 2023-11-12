import Image from 'next/image';
import Footer from './src/components/footer';
import Main from './src/components/main';
import Header from './src/components/header/header';

export default function Home() {
  return (
    <div className="max-h-screen bg-main max-w-7xl mx-auto dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
