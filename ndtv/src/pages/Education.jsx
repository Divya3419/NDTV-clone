
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Op1, Data, Img, Op, H2 } from '../components/styled'


const Education = () => {
    const[data,setData]=useState([])

    useEffect(() =>{
axios.get("https://newsapi.org/v2/everything?q=Education&from=2022-06-16&apiKey=211dd25f3c3042bca11ca86f05becc77")
.then((r)=>{
    setData(r.data.articles)
    //console.log(r.data.articles)
})
    
    },[])
  return (
    <>
    <H2>Education</H2>
    
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

export default Education