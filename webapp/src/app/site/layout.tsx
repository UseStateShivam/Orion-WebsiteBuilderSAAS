import Navigation from '@/components/Site/Navigation'
import React from 'react'
import localFont from 'next/font/local'

const grotesk = localFont({
  src: '../../../public/fonts/Grotesk.ttf'
})

function layout({children}: {children: React.ReactNode}) {
  return (
    <main className={grotesk.className}>
      <section className='h-full'>
        <Navigation/>
        {children}
      </section>
    </main>
  )
}

export default layout