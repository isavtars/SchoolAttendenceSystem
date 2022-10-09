import React, { useEffect, useReducer } from 'react'
import {AuthReducer} from "./authReducer"

//create  context
const Authcontext = React.createContext();



//initals values
const INITIAL_VALUE={
  
     user: JSON.parse(localStorage.getItem("user")) || null,
     error:false,
     feteching:false
}
//make provider
const Authprovider=({children})=>{
//reducers
//hook

const [state, dispatch] = useReducer(AuthReducer,INITIAL_VALUE)

useEffect(() => {
     localStorage.setItem("user", JSON.stringify(state.user));
   }, [state.user]);
 
 

    return(
         <Authcontext.Provider value={{
          user:state.user,
          error:state.error,
          feteching:state.feteching,
          dispatch,

         }}>
              {children}
         </Authcontext.Provider>
    )
}


export {Authcontext,Authprovider}

