import React from 'react';
import {withFormik, Field,ErrorMessage} from 'formik';


function Cajon (props){
    const {
        isSummiting,
        isValid,
        handleSubmit,
    }=props;
return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                Id:
                <Field name="id" type="text"/>
                <ErrorMessage name="id" className="error">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Id proyecto:
                <Field name="idProyecto" type="text"/>
                <ErrorMessage name="idProyecto">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Rasante:
                <Field name="rasante" type="text" label="asd"/>
                <ErrorMessage name="rasante">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Invertida:
                <Field name="invertida" type="text"/>
                <ErrorMessage name="invertida">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Mayor diametro:
                <Field name="mayorDiametro" type="text"/>
                <ErrorMessage name="mayorDiametro">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Coeficiente de ubicación:
                <Field name="coeficienteUbicacion" type="text"/>
                <ErrorMessage name="coeficienteUbicacion">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Espesor prepiso de hormigón:
                <Field name="espesorPrepisoHormigon" type="text"/>
                <ErrorMessage name="espesorPrepisoHormigon">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Espesor losa de fondo:
                <Field name="espesorLosaFondo" type="text"/>
                <ErrorMessage name="espesorLosaFondo">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Diametro externo tubería 2:
                <Field name="diametroExtTuberia2" type="text"/>
                <ErrorMessage name="diametroExtTuberia2">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Diametro externo tubería 3:
                <Field name="diametroExtTuberia3" type="text"/>
                <ErrorMessage name="diametroExtTuberia3">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Diametro externo tubería 4:
                <Field name="diametroExtTuberia4" type="text"/>
                <ErrorMessage name="diametroExtTuberia4">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Distacia muro talud:
                <Field name="distanciaMuroTalud" type="text"/>
                <ErrorMessage name="distanciaMuroTalud">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Ancha zanja:
                <Field name="anchoZanja" type="text"/>
                <ErrorMessage name="anchoZanja">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Espesor pared de bloques:
                <Field name="espesorParedBloques" type="text"/>
                <ErrorMessage name="espesorParedBloques">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Altura de la Viga de cierre:
                <Field name="alturaVigaCierre" type="text"/>
                <ErrorMessage name="alturaVigaCierre">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Espesor losa de cubierta:
                <Field name="espesorLosaCubierta" type="text"/>
                <ErrorMessage name="espesorLosaCubierta">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Angular:
                <Field name="angular" type="text"/>
                <ErrorMessage name="angular">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <div>
                Aro y Tapa:
                <Field name="aroTapa" type="text"/>
                <ErrorMessage name="aroTapa">{message => <div>{message}</div>}</ErrorMessage>
            </div>
            <button type="submit" disabled={isSummiting || !isValid}>Enviar</button>
        </form>
    </div>
)


}
export default withFormik({
    mapPropsToValues(props){
        return {
            id:''
        };
    },
    validate(values){
        const errors={};
        if(!values.coeficienteUbicacion){
            errors.coeficienteUbicacion="Coeficiente de Ubicación requerido";
        }
        if(!values.mayorDiametro){
            errors.mayorDiametro="Mayor Diametro requerido";
        }
        if(!values.invertida){
            errors.invertida="Invertida requerido";
        }
        if(!values.rasante){
            errors.rasante="Rasante requerido";
        }
        if(!values.distanciaMuroTalud){
            errors.distanciaMuroTalud="Distancia Muro Talud requerido";
        }
        if(!values.diametroExtTuberia4){
            errors.diametroExtTuberia4="Diametro Ext Tuberia 4 requerido";
        }
        if(!values.diametroExtTuberia3){
            errors.diametroExtTuberia3="Diametro Ext Tuberia 3 requerido";
        }
        if(!values.diametroExtTuberia2){
            errors.diametroExtTuberia2="Diametro Ext Tuberia 2 requerido";
        }
        if(!values.espesorLosaFondo){
            errors.espesorLosaFondo="Espesor Losa de Fondo requerido";
        }
        if(!values.espesorPrepisoHormigon){
            errors.espesorPrepisoHormigon="Espesor Prepiso de Hormigón requerido";
        }
        if(!values.id){
            errors.id="Id requerido";
        }
        if(!values.idProyecto){
            errors.idProyecto="Id de proyecto requerido";
        }
        if(!values.aroTapa){
            errors.aroTapa="Aro y Tapa requerido";
        }
        if(!values.angular){
            errors.angular="Angular requerido";
        }
        if(!values.espesorLosaCubierta){
            errors.espesorLosaCubierta="Espesor Losa de Cubierta requerido";
        }
        if(!values.alturaVigaCierre){
            errors.alturaVigaCierre="Altura de la Viga de Cierre requerido";
        }
        if(!values.espesorParedBloques){
            errors.espesorParedBloques="Espesor de la Pared de Bloques requerido";
        }
        if(!values.anchoZanja){
            errors.anchoZanja="Ancho de Zanja requerido";
        }
        return errors;
    },
    handleSubmit(values, formikBag){
        formikBag.setSubmitting(false);
        console.log(values);
    }
})(Cajon);