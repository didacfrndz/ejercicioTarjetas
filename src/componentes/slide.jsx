import Foto from "./foto.jsx"
import Fcontent from "./fcontent.jsx"
import { useState } from "react";
export function Slide() {
    //estado
    const[numero, setnumero] = useState(0)
    //funciones de control
    function posicionAnterior(){
        console.log('anterior ')
        if(numero>0){
            setnumero(numero-1);
        }else{
            setnumero(numero+3)
        }
            
    }
    function posicionSiguiente(){
        console.log('siguiente')
        if(numero<3){
           setnumero(numero+1); 
        }else{
            setnumero(numero-3)
        }
        
    }



    return ( 
        <div className="slide border position-relative overflow-hidden">
            <div className="fotos position-absolute" style={{transition:`1s`,transform: `translateX(${-numero*300}px)`}} >
                <Fcontent/>
            </div>
            <div className="zonas-clicables d-flex justify-content-between w-100 h-100 position-absolute ">
                <div onClick={posicionAnterior} className="w-25 h-100 d-flex align-items-center ">
                    <i className="bi bi-arrow-left-circle fs-1"></i>
                </div>
                <div className="fs-1 h-100 d-flex align-items-center">
                    
                </div>
                <div onClick={posicionSiguiente} className="w-25 h-100 d-flex align-items-center  justify-content-end">
                    <i className="bi bi-arrow-right-circle fs-1"></i>
                </div>
            </div>
            
        </div>
    )
}