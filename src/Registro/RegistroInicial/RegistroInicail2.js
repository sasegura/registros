import React from 'react';
import {useState } from 'react';
import useApiData from "../hook/useApiData";

const RegistroInicial2=function(){
    const proyectsSelected =useApiData('/selectProyects');
    const [proyectNameSelected]=useState(null);
    return (
        <div>
            {renderProyectos(proyectsSelected,proyectNameSelected)}
        </div>
    );
};
function renderProyectos(proyectsSelected,proyectNameSelected) {
    //console.log(this.state.proyectNameSelected);
    if (proyectsSelected == null) {
        return <p className="text-center">Cargando proyectos...</p>
    }
    return (
        <div>
            <select id='proyectos' name="proyectNameSelected">
                {proyectsSelected.map(proyect=>
                    <option key={proyect.id} value={proyect.nombre} checked={proyectNameSelected===proyect.nombre}>
                        {proyect.nombre}
                    </option>)}
            </select>
        </div>
    );
}

export default RegistroInicial2;