import React from "react"
import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom"
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import Navbar from "./pages/Navbar"

export interface AppProps {}

const App: React.FC<AppProps> = (props) => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='home' element={<HomePage/>}/>
    <Route path='about' element={<AboutPage/>}/>
    <Route path='contact' element={<ContactPage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App;