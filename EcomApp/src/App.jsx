import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/Landingpage'
import CustomerForm from './components/CustomerForm'
import OrderForm from './components/OrderForm'
import ProductForm from './components/ProductForm'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/order" element={<OrderForm/>}/>
        <Route path="/product" element={<ProductForm/>}/>
        <Route path="customer" element={<CustomerForm/>}/>
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
