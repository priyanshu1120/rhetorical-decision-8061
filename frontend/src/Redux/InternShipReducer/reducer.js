import * as Types from "./actionTypes";

const preState = {
    isLoading : false,
    isError : false,
    InternShipsArr : []
}

export const reducer = (state = preState,{type,payload}) =>{

    switch(type){
        case Types.GET_INTERNSHIP_LOADIING : {
            return { ...state, isLoading : true}
        }

        case Types.GET_INTERNSHIP_SUCCESS : {
            return { ...state , isLoading : false , InternShipsArr : payload, isError : false}
        }

        case Types.GET_INTERNSHIP_ERROR : {
            return { ...state , isLoading : false, isError : true , InternShipsArr : []}
        }

        case Types.POST_INTERNSHIP_LOADIING : {
            return { ...state, isLoading : true }
        }

        case Types.POST_INTERNSHIP_SUCCESS : {
            return { ...state, isLoading:false, InternShipsArr:payload, isError:false}
        }
        
        case Types.POST_INTERNSHIP_ERROR : {
            return {...state,isLoading:false,InternShipsArr:[],isError:false }
        }

        default : 
            return state 
    }
}