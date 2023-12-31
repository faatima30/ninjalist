import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ninja list',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <div className='content'>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}
