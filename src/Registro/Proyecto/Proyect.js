import React, {useEffect, useState} from 'react';
import ProyectCreated from "./ProyectCreate";
import {withFormik} from "formik";
import DataCreateProyect from "./DataCreateProyect";
import Fetch from "../hook/Fetch";
import DataProyecto from "./DataProyecto";

const Proyect= function(props){
    const [proyectsSelected, setProyectsSelected] =useState(null);
    const [proyectName, setproyectName] =useState(null);
    const [proyectsAgresividad, setproyectsAgresividad] =useState(null);
    const [proyectsZona, setproyectsZona] =useState(null);
    const [proyectsId, setproyectsId] =useState(null);
    const {
        isSummiting,
        isValid,
        handleSubmit,
    }=props;

    useEffect(()=>{
        URLSelectProyects();
    }, []);

    const URLSelectProyects=async function URL(){
        const res=await Fetch(`/selectProyects`, 'GET')
        setProyectsSelected(await res);
        setproyectName(await res[0].nombre);
        setproyectsZona(await res[0].zonaSismica);
        setproyectsAgresividad(await res[0].agresividad);
        setproyectsId(await res[0].id);
    };
    async function Submiting(event){
        event.preventDefault();
        handleSubmit();
        await new Promise(r => setTimeout(r, 2000));
        URLSelectProyects();
    }
    return (
        <div>
            <DataCreateProyect handleSubmit={handleSubmit} isSummiting={isSummiting} isValid={isValid} RESETEO={Submiting}/>
            {DataProyectRender(proyectsSelected)}
            {renderProyectoData()}
        </div>
    );

    function onChangeSelected(e){
        if (proyectsSelected !== null) {
            console.log(e.target.value);
            proyectsSelected.forEach(proyect=>{
                if(proyect.nombre===e.target.value){
                    setproyectName(proyect.nombre);
                    setproyectsAgresividad(proyect.agresividad);
                    setproyectsZona(proyect.zonaSismica);
                }
            });
        }
    }
    function DataProyectRender(){
        if (proyectsSelected === null) {
            return(
                <div>
                <p className="text-center">Cargando proyectos...</p>
            </div>);
        }else{
            return(
                <div>
                <select id='proyectos' name="proyectNameSelected" onChange={onChangeSelected.bind(this)}>
                    {proyectsSelected.map(proyect =>
                        <option key={proyect.id} value={proyect.nombre} checked={proyectName===proyect.nombre}>
                            {proyect.nombre}
                        </option>)}
                </select>
            </div>
            );
        }
    }
    function renderProyectoData() {
        if (proyectName === "") {
            return <p className="text-center">Cargando datos del proyecto...</p>
        }
        return (
            <div>
                <DataProyecto proyectNameSelected={proyectName} agresividadSelected={proyectsAgresividad} zonaSelected={proyectsZona}/>
                <div>
                    <form onSubmit={eliminar.bind(this)}>
                        <input type="submit" value="Eliminar"/>
                    </form>

                </div>
            </div>
        );
    }
    async function eliminar(event){
        event.preventDefault();
        var url=`/eliminarProyecto?id=${proyectsId}`;
        await Fetch(url, 'POST');
        await new Promise(r => setTimeout(r, 2000));
        URLSelectProyects();
    }
}

export default withFormik({
    mapPropsToValues(props){
        return {
            proyectName:'',
            agresividad:'',
            zona:'',
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
    async handleSubmit(values, formikBag){
        formikBag.setSubmitting(true);
        const a=await ProyectCreated(values);
        if (a!=="OK"){
            alert("El nombre del proyecto ya existe.");
        }else{
            formikBag.setFieldValue('proyectName','', false);
            formikBag.setFieldValue('agresividad','', false);
            formikBag.setFieldValue('zona','', false);
        }
        formikBag.setSubmitting(false);
    }
})(Proyect);