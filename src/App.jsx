import { useState } from 'react'

import './App.css'
import Nav from "./Nav/nav.jsx";
import Footer from "./Footer/Footer.jsx";
import Home from "./Home/Home.jsx";
import Discovery from "./Discovery/discovery.jsx";
import ComponentBetween from "./ComponentBetween/ComponentBetween.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'



function App() {


  return (
      <div className="flex flex-col min-h-screen">
          <Nav/>
          <main className="flex-grow">

              <div className="relative">
                  <Home></Home>
              <ComponentBetween></ComponentBetween>
              <Discovery></Discovery>
              </div>
          </main>
          <Footer/>
      </div>
  )

}

export default App
