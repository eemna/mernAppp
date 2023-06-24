import { configureStore,combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Reducer } from "../reducers/Reducer";

const rootreducer=combineReducers({user:Reducer});
const Store=configureStore({reducer:rootreducer,middleware:[thunk,logger]})
export default Store;















































// import axios from "axios"
// import { toast } from "react-toastify"
// import Updateuser from "../components/UpdateUser"
// import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./actionsTypes/actionsTypes"

// export const makeRequest=()=>{
//     return{
//         type:MAKE_REQUEST
//     }
// }
// export const failRequest=(err)=>{
//     return{
//         type:FAIL_REQUEST,
//         payload:err
//     }
// }
// export const geUserList=(data)=>{
//     return{
//         type:GET_USER_LIST,
//         payload:data
//     }
    
// }

// export const deleteUser=()=>{
//     return{
//         type:DELETE_USER
//     }
// }
// export const addUser=()=>{
//     return{
//         type:ADD_USER
//     }
// }
// export const updateUser=()=>{
//     return{
//         type:UPDATE_USER
//     }
// }
// export const getUserObj=(data)=>{
//     return{
//         type:GET_USER_OBJ,
//         payload:data
//     }
// }



// export const FetchUserList=()=>{
//     return (dispatch)=>{
//       dispatch(makeRequest());
//       //setTimeout(() => {
//         axios.get('http://localhost:8000/users').then(res=>{
//             const userlist=res.data;
//             dispatch(geUserList(userlist));
//           }).catch(err=>{
//             dispatch(failRequest(err.message))
//           })
//      // }, 2000);
     
//     }
// }

// export const Removeuser=(code)=>{
//     return (dispatch)=>{
//       dispatch(makeRequest());
//       //setTimeout(() => {
//         axios.delete('http://localhost:8000/users/'+code).then(res=>{
//             dispatch(deleteUser());
//           }).catch(err=>{
//             dispatch(failRequest(err.message))
//           })
//      // }, 2000);
     
//     }
// }

// export const FunctionAddUser=(data)=>{
//     return (dispatch)=>{
//       dispatch(makeRequest());
//       //setTimeout(() => {
//         axios.post('http://localhost:8000/users',data).then(res=>{
//             dispatch(addUser());
//             toast.success('User Added successfully.')
//           }).catch(err=>{
//             dispatch(failRequest(err.message))
//           })
//      // }, 2000);
     
//     }
// }

// export const FunctionUpdateUser=(data,code)=>{
//     return (dispatch)=>{
//       dispatch(makeRequest());
//       //setTimeout(() => {
//         axios.put('http://localhost:8000/users/'+code,data).then(res=>{
//             dispatch(updateUser());
//             toast.success('User Updated successfully.')
//           }).catch(err=>{
//             dispatch(failRequest(err.message))
//           })
//      // }, 2000);
     
//     }
// }
// export const FetchUserObj=(code)=>{
//     return (dispatch)=>{
//       dispatch(makeRequest());
//       //setTimeout(() => {
//         axios.get('http://localhost:8000/users/'+code).then(res=>{
//             const userlist=res.data;
//             console.log(userlist)
//             dispatch(getUserObj(userlist));
//           }).catch(err=>{
//             dispatch(failRequest(err.message))
//           })
//      // }, 2000);
     
//     }
// }




























































































// // import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "../actionsTypes/actionsTypes"

// // const initialstate = {
// //     loading: true,
// //     userlist: [],
// //     userobj: {},
// //     errmessage: ''
// // }

// // export const Reducer = (state = initialstate, action) => {
// //     switch (action.type) {
// //         case MAKE_REQUEST:
// //             return {
// //                 ...state,
// //                 loading: true
// //             }
// //         case FAIL_REQUEST:
// //             return {
// //                 ...state,
// //                 loading: false,
// //                 errmessage: action.payload
// //             }
// //         case GET_USER_LIST:
// //             return {
// //                 loading: false,
// //                 errmessage: '',
// //                 userlist:action.payload,
// //                 userobj:{}
// //             }
// //             case DELETE_USER:return{
// //                 ...state,
// //                 loading:false
// //             }
// //             case ADD_USER:return{
// //                 ...state,
// //                 loading:false
// //             }
// //             case UPDATE_USER:return{
// //                 ...state,
// //                 loading:false
// //             }
// //             case GET_USER_OBJ:return{
// //                 ...state,
// //                 loading:false,
// //                 userobj:action.payload
// //             }
// //         default: return state
// //     }
// // }



























// // // import { applyMiddleware, createStore, compose } from "redux"
// // // import rootReducer from "../reducers/index"
// // // import thunk from "redux-thunk"

// // // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// // // const store = createStore(
// // //     rootReducer, 
// // //     composeEnhancers(applyMiddleware(thunk))
// // // );
// // // export default store;












// // // import { configureStore } from '@reduxjs/toolkit'
// // // import counterReducer from '../reducers/users'

// // // export default configureStore({
// // //   reducer: {
// // //     counter: counterReducer
// // //   }
// // // })