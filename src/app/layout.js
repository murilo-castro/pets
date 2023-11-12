import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./src/components/header/header";
import Footer from "./src/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pets",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="h-full min-h-full">
      <body className={inter.className + "h-screen min-h-screen"}>
        <div className="h-screen min-h-screen flex flex-col justify-between">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
