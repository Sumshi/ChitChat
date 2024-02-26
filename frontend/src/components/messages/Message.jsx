import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className="avatar online">
        <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    </div>

      <div className={"chat-bubble text-white bg-blue-500"}>Hi whats up!</div>
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