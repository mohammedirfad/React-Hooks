import React,{useEffect,useReducer} from 'react'
import axios from 'axios'


const initialstate ={
    loading : true,
    error  : ""  ,
    post   : {}
}
const reducer = (state , action) =>{
    switch(action.type){
        case 'Success':
            return {
                loading : false,
                error : '',
                post : action.payload


            }
        case 'Error':
            return {
                loading : false,
                error : 'Something went wrong',

                post : {}

            }
        default :
            return state
    }
}
function DataFetch2() {

const [state, dispatch ] =useReducer(reducer,initialstate)

useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res)=>{
          
            dispatch({type:'Success' ,payload:res.data})
        }).catch(err=>{

            dispatch({type:'Error'})
        })

    },[])
  return (
    <div><h3>DataFetch2 using reducer , useeffect</h3>
      {state.loading ? 'Loading..' :state.post.title}
      {state.error? <p>{state.error}</p> : null}


    </div>
  )
}

export default DataFetch2