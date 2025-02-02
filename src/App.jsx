import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import Layout from './components/Layout'; // Your layout component
import Donations from './components/Donations';
import Faq from './components/Faq';
import ContactUs from './components/ContactUs';
import Investment from './components/Investment';
import SmartsuppChat from './components/SmartsuppChat';

function App() {
 

  return (
    
    <Router>
         {/* Add the SmartsuppChat component here */}
         <SmartsuppChat />
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* All routes inside the layout will inherit the background and navbar */}
        <Route index element={<Home />} />
        <Route path='/events' element={<Events/>} />
        <Route path='/donations' element={<Donations/>} />
        <Route path='/faq' element={<Faq/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/investment' element={<Investment/>} />
    
      </Route>
    </Routes>
  </Router>
    

  )
}

export default App
