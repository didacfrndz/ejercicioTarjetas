import melo from '../assets/melo.png'

export default function Foto() {
  return (
    <div
      className="fotoJugador"
      style={{ backgroundImage: `url(${melo})` }}
      aria-label="foto jugador"
    />
  )
}