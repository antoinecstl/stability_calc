import { Inter } from "next/font/google";
import Topbar from "@/components/shared/topbar";
import "./globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stability Calculator",
  description: "Created by Antoine CASTEL and Luca LIZON",
};

export default function RootLayout({children}) {
  return (
    <><html lang='en'>
      <body className={inter.className}>
      <Topbar />
      <main className='flex flex-row'>
        <LeftSidebar />
        <section className='main-container mt-4 mb-4'>
          <div className='w-full'>{children}</div>
        </section>
        <Bottombar/>
      </main>
      </body>
    </html></>
  );
};
