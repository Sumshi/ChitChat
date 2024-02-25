// this component is the sidebar of the chat app with conversations and search input

import React from 'react'
import SearchInput from './SearchInput';
import Conversations from './Conversations';

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
       <div className="divider px-3"></div>
      <Conversations />
      {/* <LogoutButton /> */}
    </div>
  )
}

export default Sidebar;
