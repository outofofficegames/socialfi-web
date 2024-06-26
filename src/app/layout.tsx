import type { Metadata } from 'next'
import { Russo_One } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import Providers from '@/providers'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'

const russo = Russo_One({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Battle Derby',
  description:
    'Immerse yourself in the adrenaline-fueled action of Battle Derby, the ultimate web3 game available on iOS and Android. Experience the thrill of free-to-play battles on your mobile device, and join the global gaming community today!',
  openGraph: {
    title: 'Battle Derby',
    description:
      'Immerse yourself in the adrenaline-fueled action of Battle Derby, the ultimate web3 game available on iOS and Android. Experience the thrill of free-to-play battles on your mobile device, and join the global gaming community today!',
    siteName: 'Battle Derby',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          russo.className,
          'min-h-screen bg-layer1 text-white flex flex-col bg-pattern bg-cover'
        )}
      >
        <Header />
        <main className="relative mx-auto my-4 max-w-7xl md:my-8 flex flex-col flex-1">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  )
}
