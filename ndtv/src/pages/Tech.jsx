
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box, Data, Img } from '../components/styled'


const Tech = () => {
    const[data,setData]=useState([])

    useEffect(() =>{
axios.get("https://newsapi.org/v2/everything?q=Tech&apiKey=211dd25f3c3042bca11ca86f05becc77")
.then((r)=>{
    setData(r.data.articles)
   // console.log(r.data.articles)
})
    
    },[])
  return (
    <Data>
        {data.map((ele)=>{
            return <Box key={ele.url}>
               <p>{ele.author}</p> 
               <Img src={ele.urlToImage} alt="" />
               </Box>
        })}
    </Data>
  )
}

export default Tech