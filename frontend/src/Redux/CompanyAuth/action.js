import * as Types from "./actionType";
import axios from "axios";

 export const register = (payload) => (dispatch) => {
        dispatch({type : Types.REGISTER_COMPANY_LOADIING});

        return axios.post("http://localhost:8080/company/register",payload)
        .then((res)=>{
            return  dispatch({type : Types.REGISTER_COMPANY_SUCCESS,payload : res.data})
        })
        .catch((err)=>{
            return dispatch({type : Types.REGISTER_COMPANY_ERROR})
        })
 }


 export const login = (payload) => (dispatch) =>{
    dispatch({type : Types.LOGIN_CONPANY_LOADING});

    return axios.post("http://localhost:8080/company/login",payload)
    .then((res)=>{
        return  dispatch({type : Types.LOGIN_CONPANY_SUCCESS,payload : res.data.token})
    })
    .catch((err)=>{
        return dispatch({type : Types.LOGIN_CONPANY_ERROR})
    })
 }