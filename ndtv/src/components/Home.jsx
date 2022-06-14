
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Img, Data,Box } from './styled'

const Home = () => {
    const[data,setData]=useState([])

   
    useEffect(() =>{
axios.get("https://newsapi.org/v2/everything?q=big&apiKey=211dd25f3c3042bca11ca86f05becc77")
.then((r)=>{
    setData(r.data.articles)
    //console.log(r.data.articles)
})
    },[])
  return (
    <>
    <h1>Big story</h1>
    <Data>
       
        {data.map((ele)=>{
            return ( 
               <Box key={ele.url}>
             <Img src={ele.urlToImage} alt="" />
               <p>{ele.author}</p> 
              <p>{ele.title}</p>
          <p>{ele.content}</p>
               </Box>
               
               
        )})}
    </Data>
    </>
  )
}

export default Home