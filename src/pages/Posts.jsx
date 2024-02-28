import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchPosts} from "../store/middleware"

const Posts = () => {

     const postState = useSelector((storeState) => storeState.posts)
     // posts ❎ . postState ✔  to use it as an object

     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(fetchPosts); 
     }, [])

  return (
    <div> 

     <h2> All Posts </h2>

     {postState.loading && <p> Loading.....</p>}
     {postState.error && <h3> {postState.error} </h3>}

     <ul>
          {postState.posts.map(post => {
               //<li key={post.id}>{post.title}</li>
               return <li key={post.id}>{post.title}</li>;
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
  )
}

export default Posts 