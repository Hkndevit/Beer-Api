
import './App.css'
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import ListenSeite from  "./pages/ListenSeite/ListenSeite"
import ProduktSeite from "./pages/ProduktSeite/ProduktSeite"
import StartSeite from "./pages/StartSeite/StartSeite"


function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path= "/" element={<StartSeite />} /> 
        <Route path= "/ListenSeite" element={<ListenSeite />} /> 
        <Route path= "/ProduktSeite/:_id" element={<ProduktSeite />} /> 
      </Routes>
      </BrowserRouter>
  )
};

export default App
