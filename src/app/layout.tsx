
import Providers from '@/lib/Providers'
import './globals.css'
import type { Metadata } from 'next'

import { ToastContainer } from 'react-toastify'


export const metadata: Metadata = {
  title: 'Food Fantasy',
  description: 'Food Fantasy. Best Restaurant in town',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          {children}
          <ToastContainer position="bottom-right" closeButton={false} />
          </body>
       
      </html>
    
    </Providers>
  )
}
