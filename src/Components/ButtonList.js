import React from 'react'
import Button from './Button'

const list=["All","News","Live","Podcasts","Chess","Gaming","Js",]

const ButtonList = () => {
  return (
    <div className="flex justify-between items-center">
     {/* <Button name={"All"}/>
     <Button name={"News"}/>
     <Button name={"Live"}/>
     <Button name={"Podcasts"}/>
     <Button name={"Chess"}/>
     <Button name={"Gaming"}/>
     <Button name={"JS"}/>
     <Button name={"Weight"}/>
     <Button name={"Cars"}/> */}
    {
      list.map((list,index)=>
        <Button key={index} name={list}/>
       )
     }
    
     
    </div>
  )
}

export default ButtonList
