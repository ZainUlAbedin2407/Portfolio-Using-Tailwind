import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
        <div>
          <Image src="/images/logo.png" alt="logo" width={130} height={100} className='mx-auto'/>
        </div>
        <p className='text-white text-opacity-60 text-center'>© 2024 All Right Reserved by Zain Ul Abedin</p>
    </div>
  )
}

export default Footer