import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorBox from './ColorBox'
import ColorBoxGrid from './ColorBoxGrid'

function App() {
  const colors = [
    "#EDAFB8",
    "#F7E1D7",
    "#DEDBD2",
    "#B0C4B1",
    "#4A5759",
    "#6d6875",
    "#b5838d",
    "#e5989b",
    "#ffb4a2",
    "#ffcdb2",
    "#006d77",
    "#83c5be",
    "#e29578",
    "#ffddd2",
    "#ffb5a7",
    "#52796f",
    "#354f52",
    "#84a98c",
    "#52b788",
    "#ccd5ae",
    "#577590",
    "#1b4332",
  ];

  return (
    <div>
      <ColorBoxGrid colors={colors}/>
    </div>
  )
}

export default App
