import Fetch from "../hook/Fetch";

const ProyectCreated=function(values){
    const proyectsCreated =Fetch(`/crearProyecto?proyectoName=${values.proyectName}&agresividad=${values.agresividad}&zona=${values.zona}`, 'POST');
    return (
        proyectsCreated
    );
};
export default ProyectCreated;
