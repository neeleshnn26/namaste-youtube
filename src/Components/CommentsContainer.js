import React from 'react'
const commentsData=[
    {
    name:"Neelesh nainwal",
    text:"Lorem sorem borem korem dorem forem porem jorem ",
    reply:[
        {
            name:"Neelesh nainwal",
            text:"Lorem sorem borem korem dorem forem porem jorem ",
            reply:[
                {
                    name:"Neelesh nainwal",
                    text:"Lorem sorem borem korem dorem forem porem jorem ",
                    reply:[
                        {
                            name:"Neelesh nainwal",
                            text:"Lorem sorem borem korem dorem forem porem jorem ",
                            reply:[
                                {
                                    name:"Neelesh nainwal",
                                    text:"Lorem sorem borem korem dorem forem porem jorem ",
                                    reply:[],
                                }, {
                                    name:"Neelesh nainwal",
                                    text:"Lorem sorem borem korem dorem forem porem jorem ",
                                    reply:[],
                                }

                            ],
                        },
                        {
                            name:"Neelesh nainwal",
                            text:"Lorem sorem borem korem dorem forem porem jorem ",
                            reply:[],
                        }
                    ],
                }, 
                {
                    name:"Neelesh nainwal",
                    text:"Lorem sorem borem korem dorem forem porem jorem ",
                    reply:[],
                },
                {
                    name:"Neelesh nainwal",
                    text:"Lorem sorem borem korem dorem forem porem jorem ",
                    reply:[],
                }
            ],
        },
        {
            name:"Neelesh nainwal",
            text:"Lorem sorem borem korem dorem forem porem jorem ",
            reply:[],
        },
        {
            name:"Neelesh nainwal",
            text:"Lorem sorem borem korem dorem forem porem jorem ",
            reply:[],
        }, 
        {
            name:"Neelesh nainwal",
            text:"Lorem sorem borem korem dorem forem porem jorem ",
            reply:[],
        }
        
    ]
    },
    {
    name:"Neelesh nainwal",
    text:"Lorem sorem borem korem dorem forem porem jorem ",
    reply:[]
    },
    {
        name:"Neelesh nainwal",
        text:"Lorem sorem borem korem dorem forem porem jorem ",
        reply:[]
    },
    {
        name:"Neelesh nainwal",
        text:"Lorem sorem borem korem dorem forem porem jorem ",
        reply:[]
    }
]

const Comment=({data})=>{
    const{name,text,reply}=data
    return(
        <div className="flex mt-5 ml-5 bg-gray-200 rounded-md w-[500px] px-2 py-1">
            <img className="w-10 h-10 mt-1" alt="pp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_uqkSMAQ3JhpBHcu-0TnNVn2B5b3cr6Vig&s"/>
            <div className="ml-2">
            <h1 className="font-bold">{name}</h1>
            <h1>{text}</h1>
            </div>
        </div>
    )
}


const CommentList=({comments})=>{
   return(
    comments.map((comment,index)=>(
    <div>
        <Comment key={index} data={comment}/>
        <div className="ml-8">
        <CommentList comments={comment.reply}/>
        </div>
    </div>))
    
    )
  }

const CommentsContainer = () => {
  return (
    <div>
       <h1 className="font-bold text-xl mt-6 ml-5">
         Comments :
        </h1> 
        <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
