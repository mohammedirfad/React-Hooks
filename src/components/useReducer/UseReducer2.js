import React ,{useReducer}from 'react'


const initialstate = {
    FirstCounter :0,
    SecondCounter:0
};

const reducer = (state,action) =>{
  switch(action.type){
    case 'increment': 
      return {...state , FirstCounter:state.FirstCounter + action.value}
     case 'decrement': 
      return {...state ,FirstCounter:state.FirstCounter - action.value}
      case 'increment2': 
      return {...state ,SecondCounter:state.SecondCounter + action.value}
     case 'decrement2': 
      return {...state ,SecondCounter:state.SecondCounter - action.value}
    case 'reset': 
      return initialstate
      
    default:
        return state
  }
// return newState;
}

function UseReducer2() {

  const [count , dispatch ] = useReducer(reducer,initialstate)
  return (
    <div> <h1>UseReducer:</h1>
    <div className='Buttons'>
    <div>count : {count.FirstCounter}</div>

    <div>count : {count.SecondCounter}</div>
    <button onClick={() => dispatch({type : 'increment' ,value:1})}>Increment</button>
    <button onClick={() => dispatch({type :'decrement', value:1})}>decrement</button>

    <button onClick={() => dispatch({type : 'increment' ,value:5})}>Increment 5</button>
    <button onClick={() => dispatch({type :'decrement', value:5})}>decrement 5</button>

    <button onClick={() => dispatch({type : 'increment2' ,value:1})}>Increment2</button>
    <button onClick={() => dispatch({type :'decrement2', value:1})}>decrement2</button>

    <button onClick={() => dispatch({type :'reset'})}>Reset</button>

    </div>
    </div>
  )
}

export default UseReducer2