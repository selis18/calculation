import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CalculationPage from './page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Мед. калькулятор',
  description: 'Расчет дозировок и площади поверхности тела',
}

export default function RootLayout(){ 
  return (
    <html lang="ru">
      <body className={inter.className}>
        <CalculationPage/>
        </body>
    </html>
  )
  }