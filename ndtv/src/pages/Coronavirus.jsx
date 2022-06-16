
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box, Data, H2, Img, Op, Op1 } from '../components/styled'


const Coronavirus = () => {
    const[data,setData]=useState([])

    useEffect(() =>{
axios.get("https://newsapi.org/v2/everything?q=Coronavirus&apiKey=797e7f5ba9044447b38bab11a979611c")
.then((r)=>{
    setData(r.data.articles)
    //console.log(r.data.articles)
})
    
    },[])
  return (
    <>
    <H2>Corona Virus</H2>
        <Op>
        {data.map((ele)=>{
            return <Op1 key={ele.url}>
               <p>{ele.title}</p> 
               <Img src={ele.urlToImage} alt="" />
               </Op1>
        })}
    </Op>
    </>

  )
}

export default Coronavirus