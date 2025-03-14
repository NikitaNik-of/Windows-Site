import { Inter_Tight } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const InterFont = Inter_Tight({ subsets: ["latin", "cyrillic", "latin-ext", "cyrillic-ext"] });

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
      <body className={`${InterFont.className} ${NNserif.className}`}>{children}</body>
    </html>
  );
}
