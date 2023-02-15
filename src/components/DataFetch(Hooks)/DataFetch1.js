// DATA FECTHING USING USESTATE AND USEEFFECT BY AXIOS (SIMPLE ^*)

import React,{useState,useEffect} from 'react';
import axios from 'axios';




function DataFetch1() {
    const [loading ,setLoading] = useState(true);
    const [error , setError] = useState('')
    const [data, setData] = useState([])

    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res)=>{
          
            setLoading(false)
            setData(res.data)
            setError('')
        }).catch(err=>{
            setData({})
            setError('something went wrong')

            setLoading(false)
        })

    },[])

  return (
    <div><h3>DataFetch1 using usestste,useEffect</h3>

        {loading ? 'loading....' : data.title} 
        {error ? error : null}
    
    
    </div>
  )
}

export default DataFetch1