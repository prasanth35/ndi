import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Drawer, DrawerContent ,DrawerTrigger } from '../ui/drawer';

const NavBar = () => {
    const links: Array<{ route: string; name: string }> = [
        {
            route: "/",
            name: "About"
        },
        {
            route: "#features",
            name: "Features"
        },
        {
            route: "#services",
            name: "Services"
        },
        {
            route: '#testimonials',
            name: "Testimonials"
        },
        {
            route: "#faq",
            name: "FAQ"
        }
    ]
    return (
        <nav className="block w-full max-w-2xl mx-auto px-4 py-2 bg-white shadow-sm rounded-2xl border-2 border-[#E5E5E5]">
            <div className='flex justify-between items-center'>
                <Link className='' href={"/"}>
                    <Image alt='NDI' width={100} height={100} src={"assets/svg/logo.svg"} />
                </Link>

                <div className="hidden md:block">
                    <div className='flex flex-row gap-5'>
                        {
                            links.map(link =>
                                <Link className='hover:text-slate-700 hover:font-semibold text-slate-500' href={link.route} key={link.name}>{link.name}</Link>
                            )
                        }
                    </div>

                </div>
                <Button className='hidden md:block'>
                    Get Started
                </Button>
                <Drawer direction='bottom'>
                    <DrawerTrigger className='block md:hidden'>
                        <Menu />
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className='flex flex-col text-center items-center'>

                            {
                                links.map(link =>
                                    <Link className='hover:text-slate-700 hover:font-semibold text-slate-500 p-4 border-b w-full' href={link.route} key={link.name}>{link.name}</Link>
                                )
                            }
                            <Button className='w-1/2 item mt-2 mb-2'>
                                Get Started
                            </Button>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
        </nav>
    )
}

export default NavBar