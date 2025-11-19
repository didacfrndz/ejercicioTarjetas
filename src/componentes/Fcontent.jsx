
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Foto from './foto.jsx';
import jugadores from './jugadores';

export default function Fcontent() {
  return (
    <div style={{ width: "1200px", height: "400px" }} className='d-flex justify-content-between'>
      {jugadores.map(jugador => (
        //estoy usando un .map para recorrer la array, key es la id para que busque y nombre es el nombre del jugador que quiero buscar para el componente, al rastrear por el .map ba buscando 1x1 al deslizar con el slide
        <Foto key={jugador.nombre} nombre={jugador.nombre} />
      ))}
    </div>
  );
}
