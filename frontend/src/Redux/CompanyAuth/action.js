import * as Types from "./actionType";
import axios from "axios";

 export const register = (payload) => (dispatch) => {
        dispatch({type : Types.REGISTER_COMPANY_LOADIING});

        return axios.post("https://intern-hub-api.up.railway.app/company/register",payload)
        .then((res)=>{
            return  dispatch({type : Types.REGISTER_COMPANY_SUCCESS,payload : res.data})
        })
        .catch((err)=>{
            return dispatch({type : Types.REGISTER_COMPANY_ERROR})
        })
 }


 export const login = (payload) => (dispatch) =>{
    dispatch({type : Types.LOGIN_CONPANY_LOADING});

    return axios.post("https://intern-hub-api.up.railway.app/company/login",payload)
    .then((res)=>{
        return  dispatch({type : Types.LOGIN_CONPANY_SUCCESS,payload : res.data.token})
    })
    .catch((err)=>{
        return dispatch({type : Types.LOGIN_CONPANY_ERROR})
    })
 }