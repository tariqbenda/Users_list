"use client"

import React from 'react'
import useUserStore from '@/stores/users';
import Image from 'next/image';


function SidebarUserViewer() {
    const selectedUser = useUserStore((state) => state.selectedUser);

    if (!selectedUser) {
        return (
            <div className='w-full h-4/5 p-2 flex items-center justify-center'>
                <h1 className='text-white/80 font-semibold text-lg animate-pulse'>Select a user to view their details</h1>
            </div>
        );
    }

  return (
    <div className='size-full p-4 flex flex-col items-center justify-start gap-4'>
        <Image src={selectedUser.avatar} alt="Avatar" width={150} height={150} className='rounded-full p-1' />
        <h1 className='text-white font-bold text-xl'>{selectedUser.name}</h1>
        <div className='p-2 rounded-lg flex flex-wrap items-center justify-center flex gap-4 w-full h-fit'>
            <div className='flex flex-col  h-fit w-fit min-w-[50px] max-w-[200px]'>
                <p className='text-white/80 text-sm'>City: {selectedUser.city}</p>
                <p className='text-white/60 text-sm'>Company: {selectedUser.company}</p>
            </div>
            <div className='flex flex-col h-fit w-fit min-w-[120px] max-w-[200px]'>
                <p className='text-white/60 text-sm'>Email: {selectedUser.email}</p>
                <p className='text-white/80 text-sm'>Phone: {selectedUser.phone}</p>
            </div>
        </div>

    </div>
  )
}

export default SidebarUserViewer;