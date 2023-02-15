import React,{useState} from 'react';
// import '../components/useState/StateTutorials.css';
import { userContent } from '../../App';

const UseContext = () => {

  

  return (
    <div>
    


<userContent.Consumer>
 { user =>{
return (<> hi  from {user}</>)
  }}
</userContent.Consumer>


    
    


    </div>
      
    
  )
}

export default UseContext
