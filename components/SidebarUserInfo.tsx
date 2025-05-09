import Image from 'next/image'
import React from 'react'
import default_avatar from '../public/avatar_picture.svg'

function SidebarUserInfo() {
  return (
    <div className='w-full h-19 flex items-center justify-beetwen gap-2 p-2 border-b-2 border-white/20'>
      <Image src={default_avatar} alt='Logo' width={50} height={50} className='rounded-full bg-white/10 p-1' />
      <h1 className='text-white/80 font-semibold text-lg'>Tariq Bendallah</h1>
    </div>
  )
}

export default SidebarUserInfo