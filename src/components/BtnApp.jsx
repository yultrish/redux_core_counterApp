import React from 'react'
import BtnStyles from "./BtnApp.module.css"
// import { useSelector, useDispatch } from 'react-redux'
// import { counterSlice, decrement, increment } from '../Redux/Counter'


 export default function BtnApp () {
  // console.log(selectCount)
  const count = useSelector((state) => {state.counter.count});
  console.log(count)
  const dispatch = useDispatch()
  return (
    <>
    <div className={BtnStyles.appContainer}>
      <div>
        <h2 style={{marginLeft:"3rem"}}>Counter App</h2>
      <div className={BtnStyles.incDec}>
        <button className={BtnStyles.btn}onClick={()=>dispatch(increment())}>  Increase</button>
        <button className={BtnStyles.btn} style={{backgroundColor:"aliceblue", color:"black"}} onClick={()=>console.log(count)}>0</button>
        <button className={BtnStyles.btn} onClick={()=>dispatch(decrement())}>Drecrease</button>
      </div>
      <div className={BtnStyles.reset}>
        <button className={BtnStyles.resetBtn}>Reset</button>
      </div>
    </div>
    </div>
    </>
  )
}

 BtnApp