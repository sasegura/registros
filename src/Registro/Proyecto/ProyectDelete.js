import {withFormik} from "formik";
import useApiData from "../hook/useApiData";
import React, {useState} from "react";
import DataProyecto from "./DataProyecto";

const ProyectDelete=function(props){
    const {
        isSummiting,
        isValid,
        handleSubmit,
    }=props;
    const proyectsSelected =useApiData('/selectProyects');
    const [proyectNameSelected]=useState(null);
    return (
        <div>
            {renderProyectos()}
            {renderProyectoData()}
        </div>
    );
};

function renderProyectos(proyectsSelected,proyectNameSelected){
    //console.log(this.state.proyectNameSelected);
    if (proyectsSelected == null) {
        return <p className="text-center">Cargando proyectos...</p>
    }
    return (
        <div>
            <select id='proyectos' name="proyectNameSelected" onChange={this.onChangeSelected.bind(this)}>
                {proyectsSelected.map(proyect=>
                    <option key={proyect.id} value={proyect.nombre} checked={proyectNameSelected===proyect.nombre}>
                        {proyect.nombre}
                    </option>)}
            </select>
        </div>
    );
}

function renderProyectoData(proyectNameSelected, proyect) {
    if (proyectNameSelected === "") {
        //console.log(this.state.proyectNameSelected);
        return <p className="text-center">Cargando datos del proyecto...</p>
    }
    //console.log(this.state.proyectNameSelected);
    return (
        <div>
            <DataProyecto proyectNameSelected={proyect.proyectNameSelected} agresividadSelected={proyect.agresividadSelected} zonaSelected={proyect.zonaSelected}/>
            <div>
                <form onSubmit={eliminar.bind(this)}>
                    <input type="submit" value="Eliminar"/>
                </form>

            </div>
        </div>
    );
}

function eliminar(idSelected){

    fetch(`http://localhost:8083/WebApplication3/api/eliminarProyecto?id=${idSelected}`,{method: 'POST'})
        .then(response => response.json())
        .then(
            eliminado => {this.setState({ eliminado });
                this.setState({ proyectsSelected:[] });
                this.componentDidMount();
                console.log(this.state.eliminado)
            })
        .catch((error) => {
            // handle your errors here
            console.error(error)
        })
}
export default withFormik({
    mapPropsToValues(props){
        return {
            id:''
        };
    },
    validate(values){
        const errors={};
        if(!values.proyectName){
            errors.proyectName="Nombre de proyecto requerido";
        }
        if(!values.agresividad){
            errors.agresividad="Agresividad requerido";
        }
        if(!values.zona){
            errors.zona="Zona requerido";
        }
        return errors;
    },
    handleSubmit(values, formikBag){
        formikBag.setSubmitting(false);
        console.log(values);
    }
})(ProyectDelete);