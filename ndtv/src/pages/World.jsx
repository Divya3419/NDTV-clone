
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Op1, Data, Img, Op, H2 } from '../components/styled'


const World = () => {
    const[data,setData]=useState([])

    useEffect(() =>{
axios.get("https://my-server-dna-project.herokuapp.com/world")
.then((r)=>{
    setData(r.data)
    //console.log(r.data)
})
    
    },[])
  return (
    <>
    <H2>World</H2>
   
    <Op>
        {data.map((ele)=>{
            return <Op1 key={ele.url}>
              
               <Img src={ele.urlToImage} alt="" />
               <p>{ele.title}</p> 
               </Op1>
        })}
    </Op>
    </>
  )
}

export default World