import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext';

export const FormUrlEspacio = () => {
    const {data,setdata}=useContext(DataContext);
    const {nombreEspacio,urlEspacio}=data;

    return (
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
        </div>
    )
}
