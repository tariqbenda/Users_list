"use client"
import React from 'react'
import useUserStore from '@/stores/users';

function ClearUserViewerButton() {
  const clearSelectedUser = useUserStore((state) => state.clearSelectedUser);

  return (
    <button onClick={clearSelectedUser} className='bg-white py-2 px-4 active:bg-white/60 flex items-center justify-center rounded-lg hover:bg-white/80 transition-all duration-200'>Clear User</button>
  )
}

export default ClearUserViewerButton