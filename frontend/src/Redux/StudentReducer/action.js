import * as Types from "./action.type"
import axios from "axios"
import { baseurl } from "../../Api"


// <=============EducationFunction================>

export const  getEducation= (header) =>(dispatch) =>{
 dispatch({type:Types.GET_EDUCATION_LOADING})
    return  axios.get(`${baseurl}/studenteducation`,{
        headers: {
           "authorization": header
        }
    })
    .then((res)=>{
         dispatch({type:Types.GET_EDUCATION_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:Types.GET_EDUCATION_ERROR})  
    })

}


export const  createEducation = (payload) =>  (dispatch) =>{
  
    dispatch({type:Types.CREATE_EDUCATION_LOADING})
       return  axios.post(`${baseurl}/studenteducation/create`,payload.edu,{
        headers: {
            "authorization": payload.token
         }
       })
       .then((res)=>{
     return  dispatch({type:Types.CREATE_EDUCATION_SUCCESS,payload:res.data})
       })
       .catch((err)=>{
           dispatch({type:Types.CREATE_EDUCATION_ERROR})  
       })
   
   }


   export const  deleteEducation = (payload) =>  (dispatch) =>{

    dispatch({type:Types.DELETE_EDUCATION_LOADING})
       return  axios.delete(`${baseurl}/studenteducation/${payload.id}`,{
        headers: {
            "authorization": payload.token
         }
       })
       .then((res)=>{
        return  dispatch({type:Types.DELETE_EDUCATION_SUCCESS,payload:res.data})
       })
       .catch((err)=>{
           dispatch({type:Types.DELETE_EDUCATION_ERROR})  
       })
   
   }



   
   export const  updateEducation = (payload) =>  (dispatch) =>{
   
    dispatch({type:Types.UPDATE_EDUCATION_LOADING})
       return  axios.put(`${baseurl}/studenteducation/${payload.id}`,payload.edu,{
        headers: {
            "authorization": payload.token
         }
       })
       .then((res)=>{
        return  dispatch({type:Types.UPDATE_EDUCATION_SUCCESS,payload:res.data})
       })
       .catch((err)=>{
           dispatch({type:Types.UPDATE_EDUCATION_ERROR})  
       })
   
   }





   // <=============ExperienceFunction================>

export const  getExperience= (header) =>(dispatch) =>{
    dispatch({type:Types.GET_EXPERIENCE_LOADING})
       return  axios.get(`${baseurl}/studentexperience`,{
           headers: {
              "authorization": header
           }
       })
       .then((res)=>{
            dispatch({type:Types.GET_EXPERIENCE_SUCCESS,payload:res.data})
       })
       .catch((err)=>{
           dispatch({type:Types.GET_EXPERIENCE_ERROR})  
       })
   
   }
   
   
   export const  createExperience = (payload) =>  (dispatch) =>{
     
       dispatch({type:Types.CREATE_EXPERIENCE_LOADING})
          return  axios.post(`${baseurl}/studentexperience/create`,payload.input,{
           headers: {
               "authorization": payload.token
            }
          })
          .then((res)=>{
        return  dispatch({type:Types.CREATE_EXPERIENCE_SUCCESS,payload:res.data})
          })
          .catch((err)=>{
              dispatch({type:Types.CREATE_EXPERIENCE_ERROR})  
          })
      
      }
   
   
      export const  deleteExperience = (payload) =>  (dispatch) =>{
   
       dispatch({type:Types.DELETE_EXPERIENCE_LOADING})
          return  axios.delete(`${baseurl}/studentexperience/${payload.id}`,{
           headers: {
               "authorization": payload.token
            }
          })
          .then((res)=>{
           return  dispatch({type:Types.DELETE_EXPERIENCE_SUCCESS,payload:res.data})
          })
          .catch((err)=>{
              dispatch({type:Types.DELETE_EXPERIENCE_ERROR})  
          })
      
      }
   
   
   
      
      export const  updateExperience = (payload) =>  (dispatch) =>{
      
       dispatch({type:Types.UPDATE_EXPERIENCE_LOADING})
          return  axios.put(`${baseurl}/studentexperience/${payload.id}`,payload.input,{
           headers: {
               "authorization": payload.token
            }
          })
          .then((res)=>{
           return  dispatch({type:Types.UPDATE_EXPERIENCE_SUCCESS,payload:res.data})
          })
          .catch((err)=>{
              dispatch({type:Types.UPDATE_EXPERIENCE_ERROR})  
          })
      
      }