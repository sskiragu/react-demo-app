import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Blog from './components/Blog';
import Home from './components/Home';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blog' element={<Blog />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App