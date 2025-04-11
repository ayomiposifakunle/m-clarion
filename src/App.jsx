import React from 'react'
import { useState } from 'react'
import './index.css' 

import { BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from './pages/HomePage'
import OurCompany from './pages/OurCompany'
import Careers from './pages/Careers';
import Partner from './pages/Partner';
import OurPartners from './pages/OurPartners';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Features from './pages/Features';
import Demo from './pages/Demo';
import Pricing from './pages/Pricing';
import SingleBlogPage from './pages/SingleBlogPage';


const App = () => {
  return (
      <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/company' element={<OurCompany/>}/>
          <Route path='/careers' element={<Careers/>} />
          <Route path='/partner' element={<Partner />} />
          <Route path='our-partners' element={<OurPartners />} /> 
          <Route path='/blog' element={<Blog />} />
          <Route path='/faq' element={<Features />} />
          <Route path='/features' element={<Features />} />
          <Route path='/demo' element={<Demo />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/single-blog' element={<SingleBlogPage />} />
        </Routes>
        </BrowserRouter>
      </>
    )
}
    
export default App


{/* (onClick={}). */}
