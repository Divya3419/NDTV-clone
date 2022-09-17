
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box, Data, H2, Img, Op, Op1 } from '../components/styled'


const Coronavirus = () => {
    const[data,setData]=useState([])

    useEffect(() =>{
axios.get("https://my-server-dna-project.herokuapp.com/latest")
.then((r)=>{
    setData(r.data)
    //console.log(r.data)
})
    
    },[])
  return (
    <>
    <H2>Corona Virus</H2>
        <Op>
        {data.map((ele)=>{
            return <Op1 key={ele.urlToImage}>
               <p>{ele.title}</p> 
               <Img src={ele.urlToImage} alt="" />
               </Op1>
        })}
    </Op>
    </>

  )
}

export default Coronavirus