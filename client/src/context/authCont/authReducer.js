const AuthReducer=(state,action)=>{
    switch(action.type){
        case "LOGIN_START":
            return{
                user:null,
                error:false,
                feteching:true,
            }

            case "LOGIN_SUCCESS":
                return{
                    user:action.payload,
                    error:false,
                    feteching:false,
                }

                case "LOGIN_FAILED":
                    return{
                        user:null,
                        error:true,
                        feteching:false,
                    }


                    case "LOGOUT":
                        return{
                            user:null,
                            error:false,
                            feteching:false,
                        }

                        default :
                        return{...state}
    
    }
}


export {AuthReducer} ;