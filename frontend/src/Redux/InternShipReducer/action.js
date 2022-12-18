import * as Types from "./actionTypes";
import axios from "axios";

export const getInternShips = (header) => (dispatch) => {
  dispatch({ type: Types.GET_INTERNSHIP_LOADIING });
  return axios
    .get("http://localhost:8080/internships", {
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
    "http://localhost:8080/internship/create",payload.internShipForm,{
      headers: {
        authorization: payload.token,
      },
    })
    .then((res)=>{
        dispatch({type : Types.POST_INTERNSHIP_SUCCESS, payload : res.data})
    })
    .catch((err)=>{
        dispatch({type : Types.POST_INTERNSHIP_ERROR});
    })
};

// export const  deleteEducation = () =>  (dispatch) =>{

//     dispatch({type:Types.DELETE_INTERNSHIP_LOADIING})
//        return  axios.delete(`internship/${payload.id}`,{
//         headers: {
//             // "authorization": 
//          }
//        })
//        .then((res)=>{
//         return  dispatch({type:Types.DELETE_INTERNSHIP_SUCCESS,payload:res.data})
//        })
//        .catch((err)=>{
//            dispatch({type:Types.DELETE_INTERNSHIP_ERROR})  
//        })
   
//    }



   
//    export const  updateEducation = () =>  (dispatch) =>{
   
//     dispatch({type:Types.PATCH_INTERNSHIP_LOADIING})
//        return  axios.patch(`internship/${payload.id}`,payload.edu,{
//         headers: {
//             // "authorization": 
//          }
//        })
//        .then((res)=>{
//         return  dispatch({type:Types.PATCH_INTERNSHIP_SUCCESS,payload:res.data})
//        })
//        .catch((err)=>{
//            dispatch({type:Types.PATCH_INTERNSHIP_ERROR})  
//        })
   
//    }

