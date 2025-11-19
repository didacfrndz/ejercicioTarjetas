
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import jugadores from './jugadores';

export default function Foto({ nombre }) {
  const jugador = jugadores.find(j => j.nombre === nombre);
  return (
    <div
      className="bg-info d-flex align-items-center justify-content-center"
      style={{ width: "300px", height: "400px" }}>
      <img src={jugador.foto} alt={jugador.nombre} style={{width: "100%",height: "100%",objectFit: "cover",borderRadius: "40%"}}/>
      
    </div>
  );
}
