import * as Types from "./action.type"
import axios from "axios"
import { baseurl } from "../../Api"



export const getUser = (id)=>(dispatch)=>{
    dispatch({type:Types.SIGNUP_GET_LOADING})
    return axios.get(`${baseurl}/studentuser/${id}`)
        .then((res)=>{
          return dispatch({type:Types.SIGNUP_GET_SUCCESS,payload:res.data})
        })
        .catch((err)=>{
            dispatch({type:Types.SIGNUP_GET_ERROR})  
        })
    
      
    }  

    export const updateUser = (payload)=>(dispatch)=>{
        dispatch({type:Types.SIGNUP_GET_LOADING})
        return axios.patch(`${baseurl}/studentuser/${payload.id}`,payload.input)
            .then((res)=>{
              return dispatch({type:Types.SIGNUP_UPDATE_SUCCESS,payload:res.data})
            })
            .catch((err)=>{
                dispatch({type:Types.SIGNUP_GET_ERROR})  
            })
        
          
        }  




export const signup = (payload) => (dispatch) => {
      dispatch({type:Types.SIGNUP_STUDENT_LOADING})
return axios.post(`${baseurl}/studentuser/signup`,payload)
    .then((res)=>{
      return dispatch({type:Types.SIGNUP_STUDENT_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:Types.SIGNUP_STUDENT_ERROR})  
    })

  
}

export const login  = (payload) => (dispatch) => {
    dispatch({type:Types.LOGIN_STUDENT_LOADING})
    return axios.post(`${baseurl}/studentuser/login`,payload)
        .then((res)=>{
           return dispatch({type:Types.LOGIN_STUDENT_SUCCESS , payload:res.data})
        })
        .catch((err)=>{
            dispatch({type:Types.LOGIN_STUDENT_ERROR})  
        }) 
}