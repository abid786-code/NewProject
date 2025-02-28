import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/NavBar/NavBar";
import FirstLoadPage from "@/components/Common/Others/FirstLoadPage";
import NextTopLoader from 'nextjs-toploader';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Alia Girls College',
  description: 'Alia Girls College',
  generator: 'Next.js',
  applicationName: 'Alia girls College',
  referrer: 'origin-when-cross-origin',
  keywords: ['Alia Girls College', 'soumojit', 'shome', 'soumojitshome', 'Next.js', 'React'],


  icons: {
    icon: '/',
    shortcut: '/logo1.png',
    apple: '/logo1.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo1.png',
    },
  },

  openGraph: {
    title: 'Alia Girls College',
    description: 'Alia Girls College',
    url: '/logo1.jpg',
    siteName: 'Alia Girls College',
    images: [
      {
        url: '/logo1.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: '/logo1.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Alia Girls College',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#431d7a" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.className} min-h-screen `}>
      
          {/* <div>
            <img src="/background.png" className=" h-screen w-full fixed top-0 left-0 -z-50" />
          </div> */}
          <div className=" h-screen w-full fixed top-0 left-0 -z-50 bg-gradient-to-b from-white to-blue-100" ></div>
          <NextTopLoader color="#FF0000"
            initialPosition={0.08}
            height={4}
            crawl={true}
            showSpinner={false} />
          <Navbar />

          {/* <div className=" min-h-screen overflow-x-hidden">
        {children}
        </div>
        <Footer /> */}

          <FirstLoadPage children={children} />
       
      </body>
    </html>
  );
}
