import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Section from './components/section.jsx'
import MainBody from './components/mainBody.jsx'
import Footer from './components/footer.jsx'

function App() {

  return (
    <div>
      <Header />
      <Section />
      <MainBody />
      <Footer />
    </div>
  )
}

export default App
