import { useState } from 'react'
import './App.css'
import Foto from './componentes/foto.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Slide } from './componentes/slide.jsx';

function App() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle" >
        <Slide />
      
    </div>
  )
}

export default App
