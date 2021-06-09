import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../Context/DataContext';
import { checkForm } from '../helpers/checkForm';
import { CantPersonas } from './Componentes/CantPersonas';
import { Logo } from './Componentes/Logo';
import { PaletaColores } from './Componentes/PaletaColores';
import { ParagraphURL } from './Componentes/ParagraphURL';
import { Privacidad } from './Componentes/Privacidad';
import swal from 'sweetalert2';
import { LogoFoto } from './Componentes/LogoFoto';
import { FormUrlEspacio } from './Componentes/FormUrlEspacio';

export const FormConfiguracion = () => {
    const {data,setdata}=useContext(DataContext);
    const [flagButton, setFlagButton] = useState(false);

useEffect(() => {
    const flag=checkForm(data);
    setFlagButton( flag);
}, [data,setdata]);


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
            <LogoFoto/>
            <Logo/>
            <FormUrlEspacio/>
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
    )
}
