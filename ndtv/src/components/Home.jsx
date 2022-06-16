
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Business from '../pages/Business'
import Opinion from '../pages/Opinion'
import { Img, Data,Box } from './styled'
import { articles } from '../Data/data'
import Live from '../pages/Live'

const Home = () => {
    const[data,setData]=useState([])
    const [top,setTop]=useState([])
    console.log(articles.id)

   //big story
    useEffect(() =>{
axios.get("https://newsapi.org/v2/everything?q=big&pageSize=3&apiKey=797e7f5ba9044447b38bab11a979611c")
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
    
   
   <h1>Big story</h1>
    <Data D1>
    
    
        {data.map((ele)=>{
            return ( 
                
               <Box key={ele.url}>
            
             <Img src={ele.urlToImage} alt="" />
          <p>{ele.content}</p>
          
        
               </Box>
                )})}
        </Data>




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
    <Live/>
     <Business/>
    <Opinion/>

    </>
  )
}

export default Home