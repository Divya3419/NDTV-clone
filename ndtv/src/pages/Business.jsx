
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { H2, Img, Op, Op1 } from '../components/styled'


const Business = () => {
    

    const[data,setData]=useState([])

    useEffect(() =>{
axios.get(`https://my-server-dna-project.herokuapp.com/business`)

.then((r)=>{
    setData(r.data)

   // console.log(r.data)
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