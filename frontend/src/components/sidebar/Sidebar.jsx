import React from 'react'
import SearchInput from './SearchInput';

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
       <div className="divider px-3"></div>
      {/* <Conversation />
      <LogoutButton /> */}
    </div>
  )
}

export default Sidebar;
