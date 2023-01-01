import * as Types from "./actionTypes";
import axios from "axios";
import { baseurl } from "../../Api";

export const getProfile = (header) => (dispatch) => {
    dispatch({ type: Types.GET_PROFILE_LOADIING });
    return axios
      .get(`${baseurl}/profile-details`, {
        headers: {
          authorization: header,
        },
      })
      .then((res) => {
        dispatch({ type: Types.GET_PROFILE_SUCCESS, payload: res.data });
      })
      .then((err) => {
        dispatch({ type: Types.GET_PROFILE_ERROR });
      });
  };
  
  export const postProfile = (payload) => (dispatch) => {
    dispatch({ type: Types.POST_PROFILE_LOADIING });

    return axios.post(
      `${baseurl}/profile-details/create`,payload.profie,{
        headers: {
          authorization: payload.token,
        },
      })
      .then((res)=>{
         return  dispatch({type : Types.POST_PROFILE_SUCCESS, payload : res.data})
      })
      .catch((err)=>{
          dispatch({type : Types.POST_PROFILE_ERROR});
      })
  };