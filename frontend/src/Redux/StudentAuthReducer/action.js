import * as Types from "./action.type"
import axios from "axios"

export const signup = (payload) => (dispatch) => {
      dispatch({type:Types.SIGNUP_STUDENT_LOADING})
return axios.post("http://localhost:7500/studentuser/signup",payload)
    .then((res)=>{
      return dispatch({type:Types.SIGNUP_STUDENT_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:Types.SIGNUP_STUDENT_ERROR})  
    })

  
}

export const login  = (payload) => (dispatch) => {
    dispatch({type:Types.LOGIN_STUDENT_LOADING})
    return axios.post("http://localhost:7500/studentuser/login",payload)
        .then((res)=>{
           return dispatch({type:Types.LOGIN_STUDENT_SUCCESS , payload:res.data.token})
        })
        .catch((err)=>{
            dispatch({type:Types.LOGIN_STUDENT_ERROR})  
        }) 
}