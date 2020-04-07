import React from 'react';
import {ErrorMessage, Field} from "formik";


const DataCreateProyect=({isSummiting,isValid,RESETEO})=>(
        <div>
            <form onSubmit={ RESETEO.bind(this)}>
                <div>
                    <label htmlFor="proyectName">Nombre del proyecto:</label>
                    <Field name="proyectName" type="text"/>
                    <ErrorMessage name="proyectName" className="error">{message => <div>{message}</div>}</ErrorMessage>
                </div>
                <div>
                    <label htmlFor="agresividad">Selecciones </label>
                    <Field name="agresividad" type="radio" value="baja"/>Baja
                    <Field name="agresividad" type="radio" value="media"/>Media
                    <Field name="agresividad" type="radio" value="alta"/>Alta
                    <Field name="agresividad" type="radio" value="muyalta"/>Muy Alta
                    <ErrorMessage name="agresividad" className="error">{message => <div>{message}</div>}</ErrorMessage>
                </div>
                <div><label htmlFor="zona">Selecciones </label>
                    <Field name="zona" type="radio" value="1"/>1
                    <Field name="zona" type="radio" value="2"/>2
                    <Field name="zona" type="radio" value="5"/>5
                    <ErrorMessage name="zona" className="error">{message => <div>{message}</div>}</ErrorMessage>
                </div>
                <div>
                    <button type="submit" disabled={isSummiting || !isValid}>Enviar</button>
                </div>
            </form>
        </div>
);
export default DataCreateProyect;