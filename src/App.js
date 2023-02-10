import React from 'react'
import AddNewPost from './AddNewPost';
import {BrowserRouter, Route,  Routes} from "react-router-dom"
import ShowPosts from './ShowPosts';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post" element = {<AddNewPost/>}/>
        <Route path="/view" element={<ShowPosts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

