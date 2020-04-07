import React from 'react';

const DataProyecto=({proyectNameSelected,agresividadSelected,zonaSelected})=>{
    if(proyectNameSelected!==null){
        return(
            <div>
                <div>
                    <label >Nombre del proyecto:{proyectNameSelected}</label>
                </div>
                <div>
                    <label >Agresividad: {agresividadSelected}</label>
                </div>
                <div>
                    <label >Zona Sísmica: {zonaSelected} </label>
                </div>
            </div>
        );}
    else{
        return(
        <p>Seleccione un proyecto para mostrar sus datos.</p>);
    }
};
export default DataProyecto;