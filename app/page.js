import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1 class="text-7xl">
        Home Page
      </h1>
      <Link href='/about' className='text-2xl'>About</Link>
    </div>
  )
}

export default HomePage
