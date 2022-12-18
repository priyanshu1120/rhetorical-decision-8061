import * as Types from "./action.type"

const initialState = {
    isLoading:false,
    Educationdata:[],
    Experiencedata:[],
    isError:false
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){

// <=========================Education Reducer============================================>  
       
       
         case Types.GET_EDUCATION_LOADING : {
            return {
                ...state,
                isLoading:true
            }
        }
        case Types.GET_EDUCATION_SUCCESS : {
            return {
                ...state,
                isLoading:false,
               Educationdata:payload,
                isError:false
            }
        }
        case Types.GET_EDUCATION_ERROR : {
            return {
                ...state,
                isLoading:false,
               Educationdata:[],
                isError:false
            }
        }

        case Types.CREATE_EDUCATION_LOADING : {
            return {
                ...state,
                isLoading:true
            }
        }
        case Types.CREATE_EDUCATION_SUCCESS : {
            return {
                ...state,
                isLoading:false,
               Educationdata:payload,
                isError:false
            }
        }
        case Types.CREATE_EDUCATION_ERROR : {
            return {
                ...state,
                isLoading:false,
               Educationdata:[],
                isError:false
            }
        }


    // <=========================Experience Reducer============================================>  

    case Types.GET_EXPERIENCE_LOADING : {
        return {
            ...state,
            isLoading:true
        }
    }
    case Types.GET_EXPERIENCE_SUCCESS : {
        return {
            ...state,
            isLoading:false,
           Experiencedata:payload,
            isError:false
        }
    }
    case Types.GET_EXPERIENCE_ERROR : {
        return {
            ...state,
            isLoading:false,
           Experiencedata:[],
            isError:false
        }
    }

    case Types.CREATE_EXPERIENCE_LOADING : {
        return {
            ...state,
            isLoading:true
        }
    }
    case Types.CREATE_EXPERIENCE_SUCCESS : {
        return {
            ...state,
            isLoading:false,
           Experiencedata:payload,
            isError:false
        }
    }
    case Types.CREATE_EXPERIENCE_ERROR : {
        return {
            ...state,
            isLoading:false,
           Experiencedata:[],
            isError:false
        }
    }



        default:return state
    }
  
}