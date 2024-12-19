import { ReactNode } from 'react'

// 1. layout navbar, sidebar, footer

export const CustomComponent = ({ children } : { children: ReactNode }) => {
  return (
    <div className='border border-white p-2 rounded-lg w-fit'>
        {children}
    </div>
  )
}
