import React from 'react'
import AddNewPost from './AddNewPost';
import {BrowserRouter, Link, Route,  Routes} from "react-router-dom"
import ShowPosts from './ShowPosts';

const Homepage = () => {
  return <div>
    <Link to="post" title='Post a new post'/>
    <Link to="view" title='See all posts'/>
  </div>
}


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/post" element = {<AddNewPost/>}/>
        <Route path="/view" element={<ShowPosts/>}/>
      </Routes>
    </BrowserRouter>
  )
}


