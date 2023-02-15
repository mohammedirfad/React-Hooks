import React,{useContext} from 'react'


import { userContent } from '../../App'


function UseContext2() {
   const user =  useContext(userContent)

  return (
    <div>
    <h2>   UseContext2 using UseContext Hook</h2>
 
{user}
    
    </div>
  )
}

export default UseContext2