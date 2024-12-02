import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const PaddingContainer = ({children,className}:{children:ReactNode,className?:string}) => {
  return (
    <div className={cn(['p-5 sm:p-20 ',className])}>
        {children}
    </div>
  )
}

export default PaddingContainer