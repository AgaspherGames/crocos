import '@/styles/globals.scss'
import '@/app/styles/main.scss'
import type { AppProps } from 'next/app'

import localFont from "@next/font/local";

const euclideFlex = localFont({
  // src: '../app/euclidFlex/EuclidFlexMedium.ttf'
  src: [
    {
      path: "../app/euclidFlex/EuclidFlexLight.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../app/euclidFlex/EuclidFlexRegular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../app/euclidFlex/EuclidFlexMedium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../app/euclidFlex/EuclidFlexSemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../app/euclidFlex/EuclidFlexBold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return <main className={euclideFlex.className}>
    <Component {...pageProps} />
  </main>
}
