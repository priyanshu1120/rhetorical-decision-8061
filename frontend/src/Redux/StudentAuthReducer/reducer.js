import * as Types from "./action.type"

const initialState = {
    isLoading:false,
    isERROR:false,
    token:"",
    data:[]
    
}

const reducer = (state=initialState,{type,payload})=>{
     switch(type){
       
        case  Types.SIGNUP_STUDENT_LOADING : {
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        } 

        case  Types.SIGNUP_STUDENT_SUCCESS : {
            return {
                ...state,
                isLoading:false,
                isError:false,
                token:payload
            }
        } 

        case  Types.SIGNUP_GET_SUCCESS : {
            return {
                ...state,
                isLoading:false,
                isError:false,
                data:payload
            }
        } 
      
         
        
        case  Types.LOGIN_STUDENT_SUCCESS : {
            return {
                ...state,
                isLoading:false,
                isError:false,
                token:payload
            }
        } 


        case  Types.SIGNUP_STUDENT_ERROR : {
            return {
                ...state,
                isLoading:true,
                isError:false,
                token:""
            }
        } 
        default:return state
     }
}

export {reducer} 