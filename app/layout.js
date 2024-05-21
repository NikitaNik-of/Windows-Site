import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const NNserif = localFont({
  src: [
    {
      path: './fonts/nn-ms-serif.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
})

export const metadata = {
  title: "NN_of 98",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${NNserif.className}`}>{children}</body>
    </html>
  );
}
