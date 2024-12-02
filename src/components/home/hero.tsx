import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const Hero = ({ className }: { className?: string }) => {
  return (
    <section className={cn([className])}>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[url('/assets/png/Background.png')]">
      </div>
      <div className='flex flex-col items-center text-center'>

        <h1 className=" text-4xl font-extrabold text-gray-900 leading-tight lg:text-5xl">
          Empower Your Learning Journey with the <br />
          <span className="text-blue-600">National Defense Academy</span>
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Stay ahead in your studies with our comprehensive, all-in-one
          platform designed to keep you connected, informed, and equipped for
          success.
        </p>

        <div className='flex gap-10 mt-4 mb-10'>
          <Button className='rounded-full'>
            Get Started
          </Button>
          <Button className='text-primary rounded-full' variant={'outline'}>
            Join Now
          </Button>
        </div>
      </div>
      <div className="w-full h-full">
        <Image
          src="/assets/png/hero1.png"
          alt="Hero"
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="contain"
          priority
        />
      </div>
    </section>
  )
}

export default Hero