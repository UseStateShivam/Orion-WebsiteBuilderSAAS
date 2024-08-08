import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'

function layout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider
        appearance={{
          baseTheme: dark
        }}
    >
        {children}
    </ClerkProvider>
  )
}

export default layout