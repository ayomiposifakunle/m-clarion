import React from 'react'
import { useState } from 'react'
import './index.css' 

import { BrowserRouter as Router, Routes, Route, Link,} from "react-router-dom";
import HomePage from './pages/HomePage'
import OurCompany from './pages/OurCompany'
import Careers from './pages/Careers';
import Partner from './pages/Partner';
import OurPartners from './pages/OurPartners';


const App = () => {
  return (
      <>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/company' element={<OurCompany/>}/>
          <Route path='/careers' element={<Careers/>} />
          <Route path='/partner' element={<Partner />} />
          <Route path='our-partners' element={<OurPartners />} /> 
        </Routes>
      </>
    )
}
    
export default App


{/* (onClick={}). */}
