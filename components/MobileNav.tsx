"use client"

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
  

const MobileNav = ({user}: MobileNavProps) => {
    const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]:'>
        <Sheet>
  <SheetTrigger>
    <Image 
     src="/icons/hamburger.svg"
     width={38} 
     height={30} 
     alt='menu' 
     className='cursor-pointer'
     
    />
  </SheetTrigger>
  <SheetContent side="left" className='border'>
  <Link href="/"
      className='mb-12 cursor-pointer flex items-center gap-2'
     >
        <Image 
         src="/icons/logo.svg"
         width={34} 
         height={34}
         alt='Horizon logo'
         className='size-[24px] max-xl:size-14'
        />
        <h1
          className='sidebar-logo'
        >Horizon</h1>
     </Link>
     <div className='mobilenav-sheet'>
      <SheetClose asChild>
        <nav className='flex h-full flex-col gap-6 pt-16 text-white'>

      
       {sidebarLinks.map((item)=>{
        const isActive = 
        pathname === item.route || pathname.startsWith(`${item.route}/`)
        return(
          <SheetClose asChild key={item.route}>
            <Link href={item.route}
            key={item.label}
            className={cn('sidebar-link', {'bg-bank-gradient': isActive})}
            >
            <div className='relative size-6'>
                <Image 
                  src={item.imgURL} 
                  alt={item.label} 
                  fill 
                  className={cn({ 
                    'brightness-[3] invert-0': isActive
                  })}
                />
            </div>
                <p className={cn("sidebar-label", {"!text-white": isActive})}>
                {item.label}
                </p>
            </Link>
              
              </SheetClose>
             
             )
            })} 
             USER
            </nav>
            </SheetClose> 

            FOOTER
           / </div>
            
  </SheetContent>
</Sheet>

    </section>
  )
}

export default MobileNav