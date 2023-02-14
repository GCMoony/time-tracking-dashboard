import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {Rubik} from "@next/font/google";

const rubik = Rubik({
  weight: ["300","400","500"],
  subsets: ["latin"],
  variable:"--font-rubik"
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${rubik.variable} font-sans bg-very-dark-blue w-max-screen min-h-screen`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
