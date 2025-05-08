import React from 'react'
import Image from 'next/image'
import avatar from '../public/avatar_picture.svg'

function Avatar() {
  return (
    <Image src={avatar} alt="Avatar" width={70} className='rounded-full' />
  )
}

export default Avatar