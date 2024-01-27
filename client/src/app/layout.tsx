import type {Metadata} from 'next'
import {Ubuntu} from 'next/font/google'
import Providers from './provider'

const ubuntuFont = Ubuntu({weight: '400', subsets: ['latin', 'cyrillic']})

export const metadata: Metadata = {
  title: 'Bersival.tech',
  description: "Bersival's NextJS portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={ubuntuFont.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
