import logo from './logo.svg';
import StateTutorials from './components/useState/StateTutorials';
import UseReducer from './components/useReducer/UseReducer'
import UseReducer2 from './components/useReducer/UseReducer2'
import UseContext from './components/useContext/UseContext'
import './App.css';
import React from 'react';


export const userContent = React.createContext()
function App() {
  return (
    <div className="App">
 <userContent.Provider value={'mohammed irfad'}>
  <UseContext/>
 </userContent.Provider>
   {/* <StateTutorials/> */}
   {/* <UseReducer1/>  use with simple and local state , action */}
   {/* <UseReducer2/>  use with complex state and action (action in terms of object,state) */}

    </div>
  );
}

export default App;
