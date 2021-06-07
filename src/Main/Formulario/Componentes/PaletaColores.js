import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext';

export const PaletaColores = () => {
    const coloresPaleta=['#09c4c4','green','#059e38','#dba308','orange','#d86608','red','#b80874','#8d028d'];
    const {data,setdata}=useContext(DataContext);
    const {colorthema}=data;
    return (
        <div>
             <strong>Color del tema</strong>
                    <div className="botonesColores mt-2">
                        {coloresPaleta.map((item)=>{
                            return (
                                <button 
                                key={item} 
                                className="btnColor" 
                                style={
                                colorthema===item
                                ?
                                {
                                    background:item,
                                    border: '3px solid white',
                                    boxShadow: `0 0 0 0.2rem ${item}`,
                                }
                                :{
                                    background:item,
                                    border: `3px solid ${item}`
                                }
                            }
                                onClick={
                                    (e)=>{
                                      e.preventDefault();      
                                      setdata({
                                          ...data,
                                          colorthema:`${item}`
                                      });
                                    }
                                }    
                                ></button>
                            );
                        })}                  
                        </div>
                    
        </div>
    )
}
