
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Business from '../pages/Business'
import Opinion from '../pages/Opinion'
import { Img, Data,Box } from './styled'
import { articles } from '../Data/data'

const Home = () => {
    const[data,setData]=useState([])
    const [top,setTop]=useState([])
    console.log(articles.id)

   //big story
    useEffect(() =>{
axios.get("https://newsapi.org/v2/everything?q=big&pageSize=1&apiKey=797e7f5ba9044447b38bab11a979611c")
.then((r)=>{
    setData(r.data.articles)
    //console.log(r.data.articles)
})
    },[])

    ///top story
    useEffect(() =>{
      axios.get("https://newsapi.org/v2/everything?q=top&pageSize=10&apiKey=797e7f5ba9044447b38bab11a979611c")
      .then((r)=>{
          setTop(r.data.articles)
          //console.log(r.data.articles)
      })
          },[])

  return (
    <>
   <div style={{width:"80%",margin:"auto"}}>
    <Data>
    <h1>Big story</h1>
    
        {data.map((ele)=>{
            return ( 
                
               <Box key={ele.url}>
                
             <Img src={ele.urlToImage} alt="" />
          <p>{ele.content}</p>
          <p>link</p>
          
               </Box>
               
               
        )})}
        
    </Data>
    {data.map((ele)=>{
        return

    })}
    </div>

    <div style={{width:"80%",margin:"auto"}}>
    <Data>
    <h1>Top Stories</h1>
        {top.map((ele)=>{
            return ( 
               <Box B1 key={ele.url}>
             <Img I1 src={ele.urlToImage} alt="" />
          <p>{ele.title}</p>
               </Box>
               
               
        )})}
    </Data>
    
    </div>
    <Business/>
    <Opinion/>

    </>
  )
}

export default Home