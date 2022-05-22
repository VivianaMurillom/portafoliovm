import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/aboutme/Aboutme';
import Projects from './pages/projects/Projects';
import Error404 from './pages/error404/Error404';
import Skills from './pages/skills/Skills';
import Studies from './pages/studies/Studies';
import Study from './components/study/Study';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about-me' element={<About/>}></Route>
      <Route path='/studies' element={<Studies/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='*' element={<Error404/>}></Route>
      <Route path='/home' element={<Navigate replace to={'/'}/>}></Route>
      <Route path='/studies/:id' element={<Study/>}></Route>    
    </Routes>
  </BrowserRouter>
);


