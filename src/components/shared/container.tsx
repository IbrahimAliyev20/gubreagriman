import React from 'react'

function Container({ children,className }: { children: React.ReactNode,className?: string }) {
  return (
    <div className={` mx-auto md:px-[30px] px-4 ${className}`}>
        {children}
    </div>
  )
}

export default Container