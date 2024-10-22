import { useState } from 'react'

import './App.css'
import Nav from "./Nav/nav.jsx";
import Footer from "./Footer/Footer.jsx";
import Home from "./Home/Home.jsx";



function App() {


  return (
      <div className="flex flex-col min-h-screen">
          <Nav/>
          <main className="flex-grow">
            <Home></Home>
          </main>
          <Footer/>
      </div>
  )

}

export default App
