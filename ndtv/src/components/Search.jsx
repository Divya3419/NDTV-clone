
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Img, Op1 } from './styled'

const Search = () => {
  const[query,setQuery]=useState("")
  const [collect,setCollect] = useState([])
console.log("query",query)

  useEffect(() =>{
    axios.get(`https://newsapi.org/v2/everything?q=${query || `sports`}&apiKey=211dd25f3c3042bca11ca86f05becc77`)
    .then((r)=>{
      setCollect(r.data.articles)
    console.log(r.data.articles)
    })
    

  },[])
//console.log(collect)


  
return (
    <div>
       <input type="search" 
       value={query} 
       placeholder="Search" 
       onChange={(e)=>setQuery(e.target.value)}/> 
       
       {collect.map(ele=>(
 <p>{ele.title}</p>
        
       ))} 

    </div>
  )
}

export default Search