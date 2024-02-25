// this file represents a list of conversations from conversation file  in the sidebar

import React from 'react';
import Conversation from './Conversation';

const Conversations = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  )
}

export default Conversations;
