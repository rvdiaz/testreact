import React, { useContext, useEffect, useRef } from 'react'
import { DataContext } from '../../Context/DataContext';

export const Privacidad =() => {
    
    const {data,setdata}=useContext(DataContext);
    const {privacidad}=data;
    const privado=useRef();
    const publico=useRef();
    
    useEffect(() => {
        console.log("effect privacidad");
        switch (privacidad) {
            case "privado":
                    privado.current.checked=true;
                    publico.current.checked=false;
                break;
            case "publico":
                privado.current.checked=false;
                publico.current.checked=true;
                break;
            default:
                privado.current.checked=false;
                publico.current.checked=false;
                break;
        }
    }
    ,[privacidad]);

    const handleclickPrivado=(e)=>{
        e.preventDefault();
        if(privacidad==="privado")
        return;
        setdata({
            ...data,
            privacidad:"privado"
        })
    }
    const handleclickPublico=(e)=>{
        e.preventDefault();
        if(privacidad==="publico")
        return;
        setdata({
            ...data,
            privacidad:"publico"
        })
    }

    return (
        <div className="mt-4">
                    <strong>Privacidad del espacio</strong>
                    <div className="displayFlex mt-2 displaySmall">
                        <div className={
                            (privacidad==="privado")
                            ?"privacidad privacidadChecked"
                            :"privacidad"
                    }
                    onClick={handleclickPrivado}
                    >
                            <div>
                            <input ref={privado} className="radioButtons mt-1" type="radio"></input> 
                            
                            </div>
                            <div className="ml-2">
                            <strong>Privado</strong>
                            <p>
                            El contenido será visible solo para ti y los miembros de tu Organización
                            </p>
                         </div>
                        
                        </div>
                        <div 
                        className={
                            (privacidad==="publico")
                            ?"privacidad privacidadChecked SmallDevice"
                            :"privacidad SmallDevice"
                        }
                        onClick={handleclickPublico}
                        >
                            <div >
                            <input ref={publico} className="radioButtons mt-1" type="radio"></input> 
                            
                            </div>
                            <div className="ml-2">
                            <strong>Público</strong>
                            <p>
                            Cualquiera con el vinculo podra ver la actividad de tu Organizacion
                            </p>
                         </div>
                        
                        </div>
                      </div>
                    </div>
    )
}
