import '@/styles/globals.scss'
import '@/app/styles/main.scss'
import type { AppProps } from 'next/app'

import localFont from "@next/font/local";

const euclideFlex = localFont({
  src: [
    {
      path: "../public/euclidFlex/EuclidFlexLight.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/euclidFlex/EuclidFlexRegular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/euclidFlex/EuclidFlexMedium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/euclidFlex/EuclidFlexSemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../public/euclidFlex/EuclidFlexBold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  console.log(euclideFlex.style);
  
  return <main className={euclideFlex.className}>
    <Component {...pageProps} />
  </main>
}
