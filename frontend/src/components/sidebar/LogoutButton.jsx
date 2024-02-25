// logout button component

import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";

const LogoutButton = () => {
  return (
    <div className='mt-10'> {/* or mt-auto */}
      <RiLogoutCircleLine className='w-6 h-6 text-white cursor-pointer'/>
    </div>
  )
}

export default LogoutButton;
