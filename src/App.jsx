import { useState } from 'react'

import './App.css'
import Nav from "./Nav/nav.jsx";
import Footer from "./Footer/Footer.jsx";



function App() {


  return (
      <div className="flex flex-col min-h-screen">
          <Nav/>
          <main className="flex-grow">
              {/* Main content goes here */}
          </main>
          <Footer/>
      </div>
  )

}

export default App
