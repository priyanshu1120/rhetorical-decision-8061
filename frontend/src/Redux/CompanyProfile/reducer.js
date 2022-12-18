import * as Types from "./actionTypes";

const preState = {
    isLoading : false,
    isError : false,
    ProfileArr : []
}

export const reducer = (state = preState,{type,payload}) =>{

    switch(type){
        case Types.GET_PROFILE_LOADIING : {
            return { ...state, isLoading : true}
        }

        case Types.GET_PROFILE_SUCCESS : {
            return { ...state , isLoading : false , ProfileArr : payload, isError : false}
        }

        case Types.GET_PROFILE_ERROR : {
            return { ...state , isLoading : false, isError : true , ProfileArr : []}
        }

        case Types.POST_PROFILE_LOADIING : {
            return { ...state, isLoading : true }
        }

        case Types.POST_PROFILE_SUCCESS : {
            return { ...state, isLoading:false, ProfileArr:payload, isError:false}
        }
        
        case Types.POST_PROFILE_ERROR : {
            return {...state,isLoading:false,ProfileArr:[],isError:false }
        }

        default : 
            return state 
    }
}