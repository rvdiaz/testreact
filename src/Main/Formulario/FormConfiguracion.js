import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../Context/DataContext';
import { checkForm } from '../helpers/checkForm';
import { CantPersonas } from './Componentes/CantPersonas';
import { Logo } from './Componentes/Logo';
import { PaletaColores } from './Componentes/PaletaColores';
import { ParagraphURL } from './Componentes/ParagraphURL';
import { Privacidad } from './Componentes/Privacidad';
import swal from 'sweetalert2';

export const FormConfiguracion = () => {

const {data,setdata}=useContext(DataContext);
const {fotoPerfil,nombreEspacio,urlEspacio}=data;
const inputFile=useRef(); 

const [flagButton, setFlagButton] = useState(false);

useEffect(() => {
    const flag=checkForm(data);
    setFlagButton( flag);
}, [data,setdata]);


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

const handleDescartar=(e)=>{
e.preventDefault();
setdata({
    fotoPerfil:"assets/perfilDefault.png",
    nombreEspacio:"",
    urlEspacio:"",
    cantPersonas:"",
    colorthema:"",
    privacidad:""
})
return swal.fire('','Formulario descartado','info');
}

const handleGuardar=(e)=>{
    e.preventDefault();
    return swal.fire('Exito','Formulario guardado','success');
}

    return (
        <div className="col-lg-6">
            <form>
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
            <Logo/>
            <div className="form">
                    <div >
                    <strong>Nombre del espacio</strong>
                    <input type="text" onChange={(e)=>{
                        e.preventDefault();
                        setdata({
                            ...data,
                            nombreEspacio:e.target.value
                        })
                    }}
                    value={nombreEspacio}
                    className="form-control mt-2" placeholder="Ep: Mi espacio de trabajo"></input>
                    </div>
                    <div className="mt-4">
                    <strong className="mt-3">URL del espacio (dirección web)</strong>
                    <div className="input-group">
                    <input type="url"  onChange={(e)=>{
                        setdata({
                            ...data,
                            urlEspacio:e.target.value
                        })
                    }} 
                    value={urlEspacio}
                    className="form-control mt-2" placeholder="Ep: mi.dominio"
                    
                    ></input>
                    </div>
                    </div>
                    <ParagraphURL/>
                    <CantPersonas/>
                    <Logo/>
                    <PaletaColores/>
                    <Privacidad/>
                <div className="mt-5 mb-5">
                    <button 
                    className="btn btn-primary"
                    disabled={
                    flagButton
                        ?false
                        :true
                    }
                    onClick={handleGuardar}
                    >Guardar cambios</button>
                    <button className="btn btn-descartar ml-2"
                    onClick={handleDescartar}
                    >Descartar</button>
                </div>
            </div>
        </div>
        </form>
        </div>
    )
}
