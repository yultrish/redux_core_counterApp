const initialState = {
    counter: 0
}

import { Increment, Reset } from "../actions/actions"
import { Decrement } from "../actions/actions"

export const counterReducer = (state = initialState, action) =>{
    // using if else statements
    // if (action.type === Increment){
    //     return {counter: state.counter+=1}
    // }else if (action.type === Decrement && state.counter > 0){
    //     return {counter: state.counter-1}
    // }else if (action.type==="RESET"){
    //    return {counter: state.counter = 0}
    // }else{
    //     return state
    // }

    //using switch statements
    switch (action.type) {
        case "INCREMENT": {
            return {...state, counter:state.counter+=1}
        }

        case "DECREMENT": {
            if (state.counter > 0 )
            return {...state, counter:state.counter -1 }
        }
            
        case "RESET": {
            return {...state, counter:state.counter =0}
        }
        default:
            return state;
    }

    }


    //the reducer is listening to the event/ actions and return it
  

