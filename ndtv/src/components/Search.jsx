
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
        url:`https://newsapi.org/v2/everything?q=${q}&pageSize=10&apiKey=797e7f5ba9044447b38bab11a979611c`
       
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
 <Op1 key={ele.url}>
               
<Img src={ele.urlToImage} alt="" />
<p>{ele.title}</p>
</Op1>
        
       ))} 

    </div>
  )
}

export default Search