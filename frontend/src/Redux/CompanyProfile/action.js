import * as Types from "./actionTypes";
import axios from "axios";

export const getProfile = (header) => (dispatch) => {
    dispatch({ type: Types.GET_PROFILE_LOADIING });
    return axios
      .get("http://localhost:8080/profile-details", {
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
      "http://localhost:8080/profile-details/create",payload.profile,{
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