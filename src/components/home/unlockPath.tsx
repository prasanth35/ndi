import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const UnlockPath = ({className}:{className?:string}) => {
    return (
        <section className={cn(["w-full",className])}>
            <div className='grid grid-cols-1 md:grid-cols-2 p-8'>
                <div>
                    <h1 className='text-3xl font-semibold'>Unlock Your Path to Financial Success</h1>
                    <br/>
                    <p>Dive into our comprehensive resources, stay ahead with industry insights, and reach out to our experts for personalized support on your financial journey</p>
                    <br/>
                    <div className='flex gap-5'>
                        <Button variant={'default'}>
                            Get Started
                        </Button>
                        <Button variant={'default'} className='bg-white text-primary'>
                            Try Demo
                        </Button>
                    </div>
                </div>
                <div className='flex items-center w-full mt-10 sm:mt-0'>
                    <Image
                        src={"/assets/png/home1.png"}
                        alt='Home'
                        height={500}
                        width={500}
                    />
                </div>
            </div>
        </section>
    )
}

export default UnlockPath