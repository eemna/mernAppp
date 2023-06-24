// // import types
// import {GET_CONTACTS,LOAD_CONTACT,FAIL_CONTACT,GET_CONTACT} from '../actionsTypes/user'
// // initial State
// const initialState = {
//     users:[],
//     loadContact: false,
//     error: null,
//     user:{},
// }

// // pure function
// const contactReducer = (state = initialState, {type, payload}) => {
//     switch (type) {
//         case LOAD_CONTACT:
//             return {...state,loadContact: true};
//         case GET_CONTACTS:
//            return {...state, users: payload.users, loadContact:false }
//         case FAIL_CONTACT:
//             return {...state, loadContact:false, error:payload}
//         case GET_CONTACT:
//                 return {...state, contact: payload }
//         default:
//             return state;
//     }
// }
// // export
// export default contactReducer










































// import { createSlice } from '@reduxjs/toolkit'

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0
//   },
//   reducers: {
//     increment: state => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: state => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     }
//   }
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer