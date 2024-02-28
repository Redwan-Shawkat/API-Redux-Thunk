import { createStore, combineReducers, applyMiddleware  } from "redux";

 // -----> Compose With DevTools Extension 
import { composeWithDevTools } from "redux-devtools-extension";

// -----> Importing cart Reducer 
import { cartReducer } from "./reducers/cart";

// -----> Importing todo Slice 
import { todoSlice } from "./reducers/todo";

// -----> Middleware 
//import {ourMiddleWare} from  "./middleware/index"

// -----> Logger Import
import logger from "redux-logger"; 

// -----> Post Reducer 
import postReducer from "./reducers/post";

// -----> Todo Reducer 
import todoReducer from "./reducers/todo";

// -----> Redux Thunk
import {thunk} from "redux-thunk"

 // -----> Redux Toolkit
 import { configureStore } from "@reduxjs/toolkit";

// -----> Toolkit Store Part 
const rootReducer = {
	cart: cartReducer,
	post: postReducer,
     // -----> linking todoSlice 
	todoState: todoSlice.reducer,
}

export const store = configureStore({
	reducer: rootReducer,
})