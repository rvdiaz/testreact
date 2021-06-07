import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext';

export const CantPersonas = () => {
    const arrayCantPersonas=['Solo yo','2- 10','11- 25','26- 50','51- 100','500 +'];
    const {data,setdata}=useContext(DataContext);
    const {cantPersonas}=data;
    const styleCant={
        border: '1px solid rgba(20, 172, 172, 0.5)',
        boxShadow: '0 0 5px 0.1rem rgba(20, 172, 172, 0.3)',
        color: 'rgba(20, 172, 172, 0.9)',
    }
    
    return (
        <div className="mt-3">
        <strong>¿Cuántas personas trabajaran contigo, incluyéndote a ti?</strong>
        <div className="mt-2 displayFlex displaySmall"
        >
            {arrayCantPersonas.map((item)=>{
                return (
                    <button 
                    key={item}
                    className="aux btn btnCantPersonas ml-2 mt-1"
                    style={
                        cantPersonas===item
                        ?styleCant
                        :null
                    }
                    onClick={
                        (e)=>{
                            e.preventDefault();
                            setdata({
                                ...data,
                                cantPersonas:item
                            })
                        }
                    }
                    >{item}</button>
                );
            })}
        </div>
        </div>
    )
}
