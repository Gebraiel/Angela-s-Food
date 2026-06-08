import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
export const revalidate = 0;

const cairoFont = Cairo({
  variable: "--font-cairo",
});


export const metadata = {
  title: "Angela's Food",
  description: "Angela’s Food offers premium homemade meals, catering services, frozen food, and delicious family recipes made with fresh ingredients and authentic homemade taste. Order high-quality homemade food prepared with love and delivered fresh to your door.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar" dir="rtl"
      className={`${cairoFont.variable}  h-full antialiased`}
    >
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
