import React, { useEffect, useState } from 'react'
import axios from 'axios'
function _4UseReducerDataFetching() {
    const [loading, setLoading] = useState(true);
    const [error, seterror] = useState('');
    const [post, setpost] = useState({});

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            setLoading(false)
            setpost(res.data)
            seterror('')
        })
        .catch(err=>{
            setLoading(false)
            setpost({})
            seterror('error')
        })
    },[])
  return (
    <div> 
    {loading ? 'loading' : post.title}
    {error ? error : null }
    </div>
  )
}

export default _4UseReducerDataFetching