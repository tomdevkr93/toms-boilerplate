import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import './globals.css'
import './normalize.css'

export const metadata: Metadata = {
  title: 'Toms Boilerplate',
  description: 'Toms Boilerplate'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
