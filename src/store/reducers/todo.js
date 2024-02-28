 /** @format */

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  todos: [],
  error: "",
};

// -----> Thunk
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch(`http://localhost:5000/todos`);
  const todos = await res.json();
  return todos;
});

// -----> Creating Slice 
export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.loading = true;
       })
      .addCase(fetchTodos.fulfilled, (state, action) =>{
        state.loading = false;
        state.todos = action.payload; /* THUNK এর return করা value টা পাবে সে  */
      })
      .addCase(fetchTodos.rejected,(state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }

  
})

// -----> REDUX TOOLKIT 

//export default todoReducer;
