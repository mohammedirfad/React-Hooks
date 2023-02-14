import React ,{useReducer}from 'react'


const initialstate = 0;

const reducer = (state,action) =>{
  switch(action){
    case 'increment': 
      return state + 1
     case 'decrement': 
      return state - 1
    case 'reset': 
      return initialstate
      
    default:
        return state
  }
// return newState;
}

function UseReducer() {

  const [count , dispatch ] = useReducer(reducer,initialstate)
  return (
    <div> <h1>UseReducer:</h1>
    <div className='Buttons'>
    <div>count : {count}</div>
    <button onClick={() => dispatch('increment')}>Increment</button>
    <button onClick={() => dispatch('decrement')}>decrement</button>
    <button onClick={() => dispatch('reset')}>Reset</button>

    </div>
    </div>
  )
}

export default UseReducer