import Text from '@/components/Global/Text'
import BgGrid from '@/components/Site/BgGrid'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { pricingCards } from '@/lib/constants'
import clsx from 'clsx'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <>
      <main>
        {/* main section */}
        <section className='pb-28 w-full h-fit relative pt-36 flex flex-col items-center justify-center bg-black overflow-x-hidden'>
          {/* grid title description banner */}
          <BgGrid/>
          <Text 
            alt='Description'
            text='One stop shop for your agency!' 
            align='left'
            className='text-neutral-300 md:text-[20px]'
          />
          <Text
            alt='Title'
            text='Orion'
            align='center'
            className='bg-gradient-to-b from-[#ff0000] via-[#ff4400] to-transparent bg-clip-text text-9xl font-bold md:text-[300px] text-transparent relative md:-mt-[56px] mt-[-28px]'
          />
          <Image
            alt='Banner-Image'
            src={'/assets/preview.png'}
            height={1200}
            width={1200}
            className='rounded-t-2xl border-0 border-muted relative md:-mt-[72px] mt-[-32px] flex items-center justify-center mx-auto md:scale-100 scale-90'
          />
          <section className='flex flex-col gap-4 md:mt-20 items-center justify-center'>
            {/* billing section */}
            <Text
              alt='Billing Title'
              text='Choose what fits you the best'
              align='center'
              className='text-neutral-300 md:text-[54px] text-[28px] md:pt-24 pt-12 font-bold tracking-tight'
            />
            <Text
              alt='Billing Description'
              text='Our billing plans are made to meet your needs. Your can also try the free version too, before purchasing any plan.'
              align='center'
              className='text-neutral-400 mb-[48px] md:text-[20px] text-[12px] md:w-[55%] w-[80%] md:-mt-[12px]'
            />
            <section className='flex justify-center mt-6 flex-wrap gap-4'>
            {/* pricing cards */}
              {pricingCards.map((pricingCard) => (
                <>
                  <Card key={pricingCard.title} className={clsx('cursor-pointer text-neutral-300 border-neutral-600 bg-transparent w-[300px] flex flex-col justify-between', {'border-2 border-primary text-neutral-300': pricingCard.title === 'Unlimited Saas'})}>
                    <CardHeader>
                      <CardTitle className={clsx('', {'text-muted-foreground': pricingCard.title !== 'Unlimited Saas'})}>
                        {pricingCard.title}
                      </CardTitle>
                      <CardDescription>
                        {pricingCard.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className='text-4xl font-bold'>
                        {pricingCard.price}
                        <span className='text-[20px] text-neutral-500'>
                          &nbsp;/m
                        </span>
                      </span>
                    </CardContent>
                    <CardFooter className='flex flex-col items-start gap-4'> 
                      {pricingCard.features.map((feature) => (
                        <>
                          <div key={feature} className='flex gap-2 justify-center'>
                            <Check className='text-muted-foreground'/>
                            {feature}
                          </div>
                        </>
                      ))}
                    </CardFooter>
                    <Link
                      href={`/agency?/plan=${pricingCard.priceId}`}
                      className={clsx('w-full bg-primary p-2 rounded-md text-center', {'!bg-muted-foreground': pricingCard.title !== 'Unlimited Saas'})}
                    >
                      Get Started
                    </Link>
                  </Card>
                </>
              ))}
            </section>
          </section>
        </section>
      </main> 
    </>
  )
}

export default Home