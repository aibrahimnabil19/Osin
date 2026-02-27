import { Geist, Geist_Mono, Fredoka, Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredoka = Fredoka({ 
  subsets: ['latin'], 
  weight: ['300','400','500','600','700'], 
  variable: '--ff-brand' 
});
const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['300','400','600'], 
  variable: '--ff-body' 
});

export const metadata = {
  title: "Ọsin - Find Your Perfect Companion",
  description: "Project by Abdurrahman Nabil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body
        className={`antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
