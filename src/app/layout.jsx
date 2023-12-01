import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { MapsContextProvider } from '../contexts/MapsContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pets',
  description: 'Rex Pets',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="h-full min-h-full bg-main">
      <body className={inter.className + 'h-screen min-h-screen'}>
        <MapsContextProvider>
          <div className="h-screen min-h-screen flex flex-col justify-between">
            <div className="xl:container mx-auto grow">
              <Header />
              {children}
            </div>
            <Footer />
          </div>
        </MapsContextProvider>
      </body>
    </html>
  );
}
