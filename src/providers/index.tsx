'use client'

import ReactQueryProvider from './reactquery'

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ReactQueryProvider>{children} </ReactQueryProvider>
}
