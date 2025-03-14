import { Inter_Tight } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const InterFont = Inter_Tight({
  subsets: ["latin", "cyrillic", "latin-ext", "cyrillic-ext"],
      variable: '--font-InterFont'
  });

const NNserif = localFont({
  src: [
    {
      path: './fonts/nn-ms-serif.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-NNserif'
})

const whiterabbit = localFont({
  src: [
    {
      path: './fonts/whiterabbit-webfont.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-whiterabbit'
})
export const metadata = {
  title: "NN_of 98",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${InterFont.variable} ${NNserif.variable} ${whiterabbit.variable} font-nns`}>
      <body className="">{children}</body>
    </html>
  );
}
