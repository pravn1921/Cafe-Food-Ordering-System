import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppProvider } from "@/components/AppContext";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({ subsets: ["latin"], weight: ['400','500','700'] });

export const metadata = {
  title: "Blue Forest",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="mx-auto p-4">
          <AppProvider>
            <Toaster />
            <Header />
            {children}
            <Footer />
          </AppProvider>  
        </main>
      </body>
    </html>
  );
}
