import * as Types from "./actionTypes";
import axios from "axios";
import { baseurl } from "../../Api"

export const getInternShips = (header) => (dispatch) => {
  dispatch({ type: Types.GET_INTERNSHIP_LOADIING });
  return axios
    .get(`${baseurl}/internships`, {
      headers: {
        authorization: header,
      },
    })
    .then((res) => {
      dispatch({ type: Types.GET_INTERNSHIP_SUCCESS, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: Types.GET_INTERNSHIP_ERROR });
    });
};

export const postInternShip = (payload) => (dispatch) => {
  dispatch({ type: Types.POST_INTERNSHIP_LOADIING });

  return axios.post(
    `${baseurl}/internship/create`,payload.internShipForm,{
      headers: {
        authorization: payload.token,
      },
    })
    .then((res)=>{
       return  dispatch({type : Types.POST_INTERNSHIP_SUCCESS, payload : res.data})
    })
    .catch((err)=>{
        dispatch({type : Types.POST_INTERNSHIP_ERROR});
    })
};









