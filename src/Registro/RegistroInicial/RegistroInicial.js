import React from 'react';
import {useState } from 'react';
import useApiData from "../hook/useApiData";

const RegistroInicial=function(){
    const [proyectNameSelected]=useState(null);
    const proyectsSelected =useApiData('/selectProyects');
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
            <select id='proyectos' name="proyectNameSelected" onChange={onChangeSelected.bind(this)}>
                {proyectsSelected.map(proyect=>
                    <option key={proyect.id} value={proyect.nombre} checked={proyectNameSelected===proyect.nombre}>
                        {proyect.nombre}
                    </option>)}
            </select>
        </div>
    );
}
function onChangeSelected(e){
    console.log(e.target.value);
    return e.target.value;
}



export default RegistroInicial;