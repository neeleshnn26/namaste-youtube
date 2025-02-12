import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center ">
         <img 
        className="w-10 h-10" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_uqkSMAQ3JhpBHcu-0TnNVn2B5b3cr6Vig&s" 
        alt="user-logo"
        />
        <span className="pl-1 font-semibold">{name }:</span>
        <span className="pl-1"> { message}</span>
    </div>
  )
}

export default ChatMessage