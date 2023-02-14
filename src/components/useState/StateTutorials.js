import React,{useState} from 'react';
// import '../components/useState/StateTutorials.css';

const StateTutorials = () => {

    const [count ,setCount]=useState(0);
    const [color,setColor]=useState('red');

  return (
    <div style={{backgroundColor:color}}>
    
    {count > 0?  <button style={{visibility:"visible"}} onClick={()=>{setCount(count-1)
    setColor("blue") }}>-</button> :  <button style={{visibility:"hidden"}} onClick={()=>{setCount(count-1) 
      setColor("green")
    }}>-</button>}
   
    
    {count}

    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>setCount(0)}>Reset</button>




    
    


    </div>
      
    
  )
}

export default StateTutorials
