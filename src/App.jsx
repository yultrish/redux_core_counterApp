import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch , useSelector} from 'react-redux'
import { Increment, Decrement, Reset } from './store/actions/actions'


// import BtnApp from './components/BtnApp'

function App() {
 const dispatch = useDispatch() //to dispatch an action
  // const [count, setCount] = useState(0)

const counterVariable = useSelector((state)=>state.counter.counter)
console.log(counterVariable) //useSelector() is use to get the current state/data coming from the store



  const handleIncrease = ()=>{   
    dispatch({type:Increment})

    // the dispatch is emitting the action increment for the reducer to change the state
}

const handleDecrease = ()=>{   
  dispatch({type:Decrement})
}

const handleReset = ()=>{   
  dispatch({type:Reset})
}

// const handleDecrease = ()=>{
  
// }

  return (
    <>
{/* <BtnApp/> */}
<button onClick={handleDecrease} style={{border: "2px solid aliceBlue"}}> Decrease-</button>
&nbsp; &nbsp;
{counterVariable}
&nbsp; &nbsp;
<button onClick={handleIncrease}>Increase+</button>
<div>
  <button onClick={handleReset}>Reset</button>
</div>

    </>
  )
}

export default App
