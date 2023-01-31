import { createContext,useContex, useReducer } from "react";
import reducer from "../reducer/recducer";
import { initialState } from "../reducer/recducer";

export const StateContex = createContext();

export const StateProvider=({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return(
    <StateContex.Provider value={[state,dispatch]}>
        {children}
    </StateContex.Provider>)
}

export const useStateValue=()=>useContex(StateContex)