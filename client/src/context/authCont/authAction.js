


export const loginStart=()=>({
     type:"LOGIN_START"
})



export const loginsucess=(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user,
})


export const loginfaliled=(user)=>({
    type:"LOGIN_FAILED",
  
})


export const logout=(user)=>({
    type:"LOGOUT",
  
})