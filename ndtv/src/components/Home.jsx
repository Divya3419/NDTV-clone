
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Img,Box } from './styled'

const Home = () => {
    const[data,setData]=useState([])

   
    useEffect(() =>{
axios.get("https://newsapi.org/v2/everything?q=bigstory&apiKey=211dd25f3c3042bca11ca86f05becc77")
.then((r)=>{
    setData(r.data.articles)
    //console.log(r.data.articles)
})
    },[])
  return (
    <div>
        {data.map((ele)=>{
            return <Box>
               <p>{ele.author}</p> 
               <Img src={ele.urlToImage} alt="" />
               </Box>
        })}
    </div>
  )
}

export default Home