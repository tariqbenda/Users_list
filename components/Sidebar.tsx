import React from 'react'
import SidebarUserInfo from './SidebarUserInfo'

function Sidebar() {
  return (
    <div className='w-[30%] h-full border-r-2 pt-8 border-white/50 flex flex-col items-center p-2'>
        <SidebarUserInfo/>
    </div>
  )
}

export default Sidebar