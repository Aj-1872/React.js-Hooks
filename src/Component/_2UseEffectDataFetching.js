import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function _2UseEffectDataFetching() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const inputIdRef = useRef();
    const [idFromButtonClick,setFromButtonClick] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{console.log(res);
        setPost(res.data)
        })
        .catch(err=>{console.log(err);})
    },[idFromButtonClick])

    const handleChange =()=>{
        setId(inputIdRef.current.value)
    }
    const handleClick =()=>{
        setFromButtonClick(id)
    }
  return (
    <div>
        <input type="text" ref={inputIdRef} value={id}   onChange={handleChange}/>
    <button type='button'onClick={()=>{handleClick()}} >Fetch</button>
    <div>{post.title}</div>
{ /*   <ul>
    {
        post.map(post=> <li ket={post.id}>{post.title}</li>)
    }
</ul>*/}
    </div>
  )
}

export default _2UseEffectDataFetching