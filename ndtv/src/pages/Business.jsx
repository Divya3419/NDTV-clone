
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { H2, Img, Op, Op1 } from '../components/styled'


const Business = () => {
    

    const[data,setData]=useState([])

    useEffect(() =>{
axios.get(`https://newsapi.org/v2/everything?q=business&apiKey=797e7f5ba9044447b38bab11a979611c`)

.then((r)=>{
    setData(r.data.articles)

   // console.log(r.data.articles)
})
    
    },[])
  return (
    <>
    <H2>Business</H2>
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

export default Business