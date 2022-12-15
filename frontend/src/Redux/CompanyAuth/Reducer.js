import * as Types from "./actionType";

const initialState = {
    isLoading : false,
    isError : false,
    token : ""
}

const reducer = (state = initialState,{type,payload}) =>{
    switch(type){
        case Types.REGISTER_COMPANY_LOADIING : {
            return { ...state,isLoading:true,isError:false}
        }
        case Types.REGISTER_COMPANY_SUCCESS : {
            return { ...state,isLoading:false,isError:false,token:payload}
        }
        case Types.REGISTER_COMPANY_ERROR : {
            return { ...state,isError:true,token:""}
        }

        case Types.LOGIN_CONPANY_LOADING : {
            return { ...state,isLoading:true,isError:false}
        }
        case Types.LOGIN_CONPANY_SUCCESS : {
            return { ...state,isLoading:false,isError:false,token:payload}
        }
        case Types.LOGIN_CONPANY_ERROR : {
            return { ...state,isError:true,token:""}
        }

        default : return state

    }
}
export {reducer}