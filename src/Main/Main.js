import React, { useState } from 'react';
import { DataContext } from './Context/DataContext';
import { FormConfiguracion } from './Formulario/FormConfiguracion';
import SvgComponent from './SVG/Svg';

/* urlEspacio:"/assets/logo2.png",
    cantPersonas:"Solo yo",
    colorthema:"#09c4c4",
    privacidad:"publico" */

export const Main = () => {
const initialState={
    fotoPerfil:"assets/perfilDefault.png",
    nombreEspacio:"",
    urlEspacio:"",
    cantPersonas:"",
    colorthema:"",
    privacidad:""
}
const [data, setdata] = useState(initialState);
return (
    <DataContext.Provider value={{
        data,
        setdata
    }}>
    <div className="container mt-5 contenedorGeneral">
        <div className="row">
        <FormConfiguracion/>
        <div className="col-lg-6 hide">
        <SvgComponent />
        </div>
        </div>
    </div>

    </DataContext.Provider>
);

}