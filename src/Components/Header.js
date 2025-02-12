import React, { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../Utils/constants'
import { cacheResults } from '../Utils/searchSlice'


const Header = () => {

    const [searchQuery,setSearchQuery]=useState("")
    const[suggestions,setSuggestions]=useState([])

    const searchCache=useSelector(store=>store.search)
    /**
     * searchCache={
     *  "iphone":["iphone11","iphone12"]
     *  }
     * searchQuery:iphone
     * 
     * 
     */

    useEffect(()=>{
        //make an API call after every key press
        //but if the difference between two API call is < 200ms
        //decline the API call
      const timer=setTimeout(()=>{
        if(searchCache[searchQuery])
        {
            setSuggestions(searchCache[searchQuery])
        }
        else{
            getSearchSuggestions()
        }
        },200);
      return()=>{
        clearTimeout(timer)//The purpose of clearTimeout is to prevent the previous timeout from executing if a new search query is entered before the 200ms has passed. Without it, you'll have redundant API calls that could lead to poor performance and race conditions.
      }
    },[searchQuery])

   const getSearchSuggestions=async()=>{
    try{
        console.log("api call -" + searchQuery)
        const data= await fetch(YOUTUBE_SEARCH_API + searchQuery )
        const json= await data.json()
        
        setSuggestions(json[1]);
        // update Cache
        dispatch(cacheResults({
            [searchQuery]:json[1] // searchQuery is written in square bracket beacaus we are dynamically setting the key, if we would have used search directly without [] then its value would be searchQuery only, it will not change dynamically
        }))
    }
    catch(error){
        console.log(error)
    }
     
}

    const dispatch=useDispatch()
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }


  return (
    <div className="grid grid-flow-col shadow-lg ">
    <div className="flex col-span-1 ml-3 ">
        <img 
        onClick={()=>toggleMenuHandler ()}//By wrapping toggleMenuHandler inside a callback function, you ensure that dispatch(toggleMenu()) is called only when the user clicks the image, not when the component renders.
        className="w-16 h-16 mt-2 cursor-pointer" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-ITMJL3ERzkB8Sy7pYUXPIF5YQU0OayK1g&s" 
        alt="menu"
        />
        <img 
        className="w-52 h-20" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8U6Tkqc_8bi8-e5f57GZa8AENtyiBh9K_JA&s" 
        alt="yt-logo"
        />
    </div>

    <div className=" col-span-10">

        <input 
        className=" mt-5 h-6 w-[450px] pl-4 rounded-s-full ml-20 py-4 border-black border-2" 
        type="text" 
        placeholder="search here"
        value={searchQuery}
        onChange={(e)=>
            setSearchQuery(e.target.value)
        }
        />

        <button className="rounded-r-full px-5 py-1 border-2 border-black bg-gray-300"
         >🔍
        </button>

        <div className="ml-[85px] my-2  rounded-lg p-2 w-[445px] absolute bg-white shadow-2xl">
            <ul>
               
                {
                    suggestions.map((s,index)=>
                        <li className="mb-2 pl-2 hover:bg-slate-200 rounded-md"key={index}>
                           🔍 {s}
                        </li>
                    )
                }
              
            </ul>
        </div>
        
        
    </div>

 
    <div className="flex items-center col-span-1 ">
        <span className="mr-10">🎥</span>
        <span className="mr-10">🔔</span>
        <img 
        className="w-16 h-16" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_uqkSMAQ3JhpBHcu-0TnNVn2B5b3cr6Vig&s" 
        alt="user-logo"
        />
        
    </div>
    </div>
  )
}

export default Header
