import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './landing-page/home/HomePage';
import AboutPage from './landing-page/about/AboutPage.js';
import Signup from './landing-page/signup/Signup.js';
import PricingPage from './landing-page/pricing/PricingPage.js';
import ProductPage from './landing-page/products/ProductPage.js';
import SupportPage from './landing-page/support/SupportPage.js';
import NotFoundPage from './landing-page/NotFoundPage.js';

import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/pricing' element={<PricingPage/>} />
      <Route path='/product' element={<ProductPage/>} />
      <Route path='/support' element={<SupportPage/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);


