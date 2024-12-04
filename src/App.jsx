import { useState } from 'react'
import './App.css'
import TOP from './components/1_top.jsx'
import MV from "./components/2_mainvisual.jsx";
import ImageDivide from "./components/3_ImageDivide.jsx";
import TopSection from "./components/5_section.jsx";



function App() {

  return (
<>
  <TOP />
  <MV />
  <ImageDivide />
  <TopSection />
</>
  )
}

export default App
