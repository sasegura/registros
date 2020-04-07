import React from "react";


const DataProyectRender=({proyectsSelected,onChangeSelected})=> {
    if (proyectsSelected === null) {
        return(
        <div>
            <p className="text-center">Cargando proyectos...</p>
        </div>);
    }else{
        return(
            <div>
                <select id='proyectos' name="proyectNameSelected" >
                    {proyectsSelected.map(proyect =>
                        <option key={proyect.id} value={proyect.nombre}>
                            {proyect.nombre}
                        </option>)}
                </select>
            </div>
        );
    }
};
export default DataProyectRender;