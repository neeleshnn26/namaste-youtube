import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)

  if(isMenuOpen===false) return null;
  // or we can write as if(!isMenuOpen) return null;

  return (
    <div className="border-b-2 border-black h-auto shadow-lg w-auto">
      <div className="py-10 px-7 border-b-2 shadow-lg">
        <ul className="">
            <li className="font-bold rounded-md bg-slate-400 pl-10 mb-2"><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
      </div>
      <div className="py-10 px-7 shadow-lg">
        <ul>
            <li className="font-bold rounded-md bg-slate-400 px-5 mb-2 ">Subscription</li>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
      </div>
      <div className="py-10 px-7 shadow-lg">
        <ul>
            <li className="font-bold rounded-md bg-slate-400 px-5 mb-2">Watch later</li>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
