import { useState } from 'react'
import './App.css'
import Foto from './componentes/foto.jsx'

function App() {
  return (
    <div className="contenedorPrincipal">
      <div className="flechasAbsolute">
        <div className="flechaIzquierda">‹</div>
        <div className="flechaDerecha">›</div>
      </div>
      <div className="fotoContainer">
        <Foto/>
      </div>
    </div>
  )
}

export default App
