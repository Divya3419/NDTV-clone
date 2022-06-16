
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box, Data, H2, Img, Op, Op1 } from '../components/styled'


const Cities = () => {
    const[data,setData]=useState([])

    useEffect(() =>{
axios.get("https://newsapi.org/v2/everything?q=Cities&apiKey=797e7f5ba9044447b38bab11a979611c")
.then((r)=>{
    setData(r.data.articles)
    //console.log(r.data.articles)
})
    
    },[])
  return (
    <>
    <H2>Cities</H2>
    
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

export default Cities