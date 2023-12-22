import { createSlice } from "@reduxjs/toolkit";
const counts = 4

 const counterSlice = createSlice({
    name: "counter",
    initialState:{
        count: 0
    },
    reducers: {
        increment: (state)=>{state.count+=1
        console.log(state.count)},
        decrement: (state)=>{state.count -=1},
        reset: (state)=>{state.count = 0}
    }
})

export const {increment, decrement, reset} = counterSlice.actions
export default counterSlice.reducer
// export const selectCount = counterSlice