import React, { useContext, useRef } from 'react'
import { DataContext } from '../../Context/DataContext';

export const LogoFoto = () => {
    const {data,setdata}=useContext(DataContext);
const {fotoPerfil}=data;
    const inputFile=useRef();

    const handleButtonFile=(e)=>{
        e.preventDefault();
        inputFile.current.click();
        }
        
        const handleChangeInput=(e)=>{
            const file=e.target.files[0];
            if(file){
           const url=URL.createObjectURL(e.target.files[0]);
           setdata({
               ...data,
            fotoPerfil:url
           }) 
        }
        }
    return (
        <div className="logo">
            <h4>Configuración</h4>
            <h6 className="mt-3">Logo del espacio</h6>
            <div className="imagenlogo">
                <img src={fotoPerfil} alt='alt' className="imgLogo"></img>
                <button 
                className="btn btnCantPersonas colorgray ml-3" 
                onClick={handleButtonFile}
                ><span className="fas fa-upload"></span> Subir logo</button>
                <input 
                type="file"
                style={{
                    display:'none'
                }}
                ref={inputFile}
                onChange={handleChangeInput}
                ></input>
            </div>
        </div>
    )
}
