import "../styles/globals.css";
import { Montserrat, Hind } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Contexts from "../contexts/contexts";

const primaryFont = Hind({
  subsets: ["latin"],
  variable: "--primary-font",
  weight: ["400", "700"],
});
const secondaryFont = Montserrat({
  subsets: ["latin"],
  variable: "--secondary-font",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Contexts>
        <body
          className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </body>
      </Contexts>
    </html>
  );
}
