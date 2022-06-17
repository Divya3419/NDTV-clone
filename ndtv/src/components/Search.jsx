
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Img, Op1 } from './styled'

const Search = () => {
  const[q,setQ]=useState("")
  const [collect,setCollect] = useState([])
console.log("query",q)

  useEffect(() =>{
    getData()

  },[])



  const getData =() =>{
 
   
    return axios({
        method:"GET",
        url:`https://newsapi.org/v2/everything?q=${q}&pageSize=10&apiKey=211dd25f3c3042bca11ca86f05becc77`
       
    })
    .then(res=>{ 

      setCollect(res.data.article)
    })
    .catch(error=>{
    console.log(error)
    })
}
return (
    <div style={{display:"flex"}}>
       <input type="search" placeholder="Search" onChange={(e)=>setQ(e.target.value)} value={q}/> 
       {collect.map(ele=>(
 <p>{ele.title}</p>
        
       ))} 

    </div>
  )
}

export default Search