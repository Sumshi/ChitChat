import React from 'react'
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  // const shakeClass = message.shouldShake ? "shake" : "";


  return (
    <div className={`chat ${chatClassName}`}>
      <div className="avatar online">
        <div className="w-24 rounded-full">
            <img alt='Tailwind CSS chat bubble component' src={profilePic} />
        </div>
    </div>

      <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor}`}>{message.message}</div>
       <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12.30</div>
    </div>
  )
}

export default Message;


// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//       <div className="avatar online">
//         <div className="w-24 rounded-full">
//             <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//         </div>
//     </div>

//       <div className={"chat-bubble text-white bg-blue-500"}>Hi whats up!</div>
//        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12.30</div>
//     </div>
//   )
// }

// export default Message;