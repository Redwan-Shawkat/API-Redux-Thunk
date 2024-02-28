/** @format */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// -----> Importing 
import {fetchTodos} from "../store/reducers/todo";

const Todos = () => {
  const todoState = useSelector((storeState) => storeState.todoState);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <h2> All Todos </h2>
      {todoState.loading && <p> Loading.....</p>}
      {todoState.error && <h3> {todoState.error} </h3>}

      <ul>
        {todoState.todos.map((todo) => {
          //console.log(todo);
          return <li key={todo.id}>{todo.title}</li>;
          
        })}
      </ul>

      {/* 
     Now,
     - We need to dispatch,
     - But as it is an API, there is no payload (no data),
     - we also don't want to call API in component level
     - full logic must be in outside,
     - So, we need to write logics in middleware
     */}
    </div>
  );
};

export default Todos;
