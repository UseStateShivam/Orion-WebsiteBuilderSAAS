'use client'

import Image from 'next/image'
import React from 'react'
import Text from '../Global/Text'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'

interface User {
    user?: null | User
}

function Navigation({user}: User) {
    const router = useRouter()
  return (
    <>
        <nav className='w-full border-b border-b-neutral-950 p-4 fixed flex justify-between items-center bg-black text-neutral-300 z-10 text-[18px]'>
            <aside className='flex items-center gap-2'>
                <Image
                    alt='Logo'
                    src={'/assets/plura-logo.svg'}
                    height={40}
                    width={40}
                />
                <Text
                    text='Orion.'
                    className='text-xl font-bold'
                />
            </aside>
            <section className='hidden md:block'>
                <ul className='flex items-center justify-center gap-8'>
                    <Link href={'#'}>Pricing</Link>
                    <Link href={'#'}>About</Link>
                    <Link href={'#'}>Documentaion</Link>
                    <Link href={'#'}>Features</Link>
                </ul>
            </section>
            <aside className='flex items-center gap-2'>
                <Button 
                    title='Login'
                    className='bg-[#000] pt-1 hover:bg-[#da0303] border border-red-500 font-bold text-[16px]'
                    onClick={() => {router.push('/agency')}}
                >
                    Login
                </Button>
                <UserButton/>
            </aside>
        </nav>
    </>
  )
}

export default Navigation