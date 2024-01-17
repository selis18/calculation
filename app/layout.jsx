import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Main from './page'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'Мед. калькулятор',
  description: 'Расчет дозировок и площади поверхности тела',
}

export default function RootLayout(){ 
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="./assets/fav_med.ico" />
      </head>
      <body className={inter.className}>
        <Main/>
      </body>
    </html>
  )
}