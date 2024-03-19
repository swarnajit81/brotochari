import { Antonio } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import LoadedImage from "@/components/common/LoadedImage";
import GlobalState from "@/context/GlobalState";
import { getSession } from "@/lib/actions";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const bebas = Antonio({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default async function RootLayout ({ children }) {
  const session = await getSession()
  console.log(session)
  return (
    <html lang="en">
      <GlobalState>
        <body className={`${bebas.variable} font-bebas  bg-accent_blue`}>
          <Navbar />
          
         
          <div className="w-full h-screen fixed top-0 left-0 z-[-1]">
            <LoadedImage
              alt="bg"
              src={"/images/background.png"}
              fill={true}
              objectFit="cover"
              priority={true}
            />
          </div>

          {children}
          <BottomNav />
        </body>
      </GlobalState>
    </html>
  );
}
