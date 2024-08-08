import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Navigation from '@/components/Site/Navigation'
import React from 'react'
import localFont from 'next/font/local'

const grotesk = localFont({
  src: '../../../public/fonts/Grotesk.ttf'
})

function layout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider
        appearance={{
          baseTheme: dark
        }}
    >
      <main className={grotesk.className}>
        <section className='h-full'>
          <Navigation/>
          {children}
        </section>
      </main>
    </ClerkProvider>
  )
}

export default layout