import { Inter } from "next/font/google";
import "./globals.css";
import LeftSideBar from "@/components/sidebar/LeftSideBar";
import RightSideBar from "@/components/sidebar/RightSideBar";
import profile from '@/assets/profile.svg'
import StorerPovider from "@/Redux/Provider";


const inter = Inter({ subsets: ["latin-ext"] });

export const metadata = {
  title: "ird",
  description: "Dua app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="grid grid-cols-12 bg-gray-200 p-5 h-screen overflow-hidden">
          <div className="col-span-1 overflow-hidden"><LeftSideBar></LeftSideBar></div>
          <div className="col-span-9 border "> {/* The middle column */}
            <div className="h-full"> {/* Ensure the middle column fills the height of the container */}
            <StorerPovider>
            {children}
            </StorerPovider>
            </div>
          </div>
          <div className="border col-span-2"> <RightSideBar></RightSideBar></div>
        </div>
      </body>
    </html>
  );
}

