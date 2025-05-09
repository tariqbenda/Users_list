import React from 'react'
import SidebarUserInfo from './SidebarUserInfo'
import SidebarUserViewer from './SidebarUserViewer'

function Sidebar() {
  return (
    <div className='w-[30%] h-full border-r-2 border-white/50 flex flex-col items-center lg:flex hidden'>
        <SidebarUserInfo/>
        <h1 className='text-white/80 font-bold text-xl p-4'>User Viewer</h1>
        <SidebarUserViewer/>
        <h1 className='text-white/80 font-bold text-md p-4'>You can re-click on the user to close this viewer</h1>
    </div>
  )
}

export default Sidebar