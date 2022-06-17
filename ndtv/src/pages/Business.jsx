
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { H2, Img, Op, Op1 } from '../components/styled'


const Business = () => {
    

    const[data,setData]=useState([])

    useEffect(() =>{
axios.get(`https://newsapi.org/v2/everything?q=business&from=2022-06-16&apiKey=211dd25f3c3042bca11ca86f05becc77`)

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