
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Business from '../pages/Business'
import Opinion from '../pages/Opinion'
import { Img, Data,Box } from './styled'

import Live from '../pages/Live'

const Home = () => {
    const[data,setData]=useState([])
    const [top,setTop]=useState([])
    
    

   //big story
    useEffect(() =>{
axios.get("https://my-server-dna-project.herokuapp.com/home")
.then((r)=>{
    setData(r.data)
    //console.log(r.data)
})
    },[])

    ///top story
    useEffect(() =>{
      axios.get("https://my-server-dna-project.herokuapp.com/viral")
      .then((r)=>{
          setTop(r.data)
          //console.log(r.data)
      })
          },[])

  return (
    <>
    
   
   <h1>Big story</h1>
    <Data D1>
    
    
        {data.map((ele)=>{
            return ( 
                
               <Box key={ele.urlToImage}>
            
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
               <Box B1 key={ele.urlToImage}>
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