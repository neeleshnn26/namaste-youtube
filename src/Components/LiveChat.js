import React, { useEffect,useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/chatSlice'
import { generateRandomName } from '../Utils/helper'
import { generateRandomString } from '../Utils/helper'

const LiveChat = () => {

    const [chatReply,setChatReply]=useState("");
    const dispatch=useDispatch()

    const chatMessages=useSelector(store=>store.chat.messages)

    useEffect(()=>{
      
      const i=setInterval(()=>{
      //Api polling
      dispatch(addMessage({
        name:generateRandomName(),
        message:generateRandomString(20)
      }))

      },2000)

      return()=>{
        clearInterval(i);
      }
    },[])


  return (
    <>
    <div className="h-[450px] border-2 border-black rounded-lg ml-2 p-2 w-[500px] bg-slate-200 overflow-y-scroll flex flex-col-reverse">
        
        {
         chatMessages.map((c,index)=>
             <ChatMessage 
             key={index}
             name={c.name} 
             message={c.message}/>
         )
        }
    </div>
    <div className="">
        <input type="text" placeholder="Reply to chat "
         className="w-[480px] ml-3 border-b-black border-2 p-1 pl-3"
         value={chatReply}
         onChange={(e)=>{setChatReply(e.target.value)}}
        />
        <button className=" border-black border-2 ml-[420px] mt-1 p-1 bg-green-300"
        onClick={()=>{
          dispatch(addMessage({
            name:"Neelesh nainwal",
            message:chatReply
        }))
        setChatReply('')
        }}
        >Send ➤</button>
    </div>
    </>
    
  )
}

export default LiveChat;
