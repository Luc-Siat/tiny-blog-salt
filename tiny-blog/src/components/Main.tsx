import React, { ReactNode } from 'react'

type Props = {
  children: React.ReactNode
}

export const Main = ({children} : Props ) => {
  return (
    <main className='flex flex-wrap flex-col container mx-auto bg-white rounded p-4 mb-6'>
      {children}
    </main>
  )
}
