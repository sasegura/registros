import React from "react";
import { useForm } from "react-hook-form";
import ProyectCreated from "./ProyectCreate";

const Example = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = async values => {
        const a=await ProyectCreated(values);
        if (a!=="Ok"){
            alert("El nombre del proyecto ya existe.");
        }
        console.log(a);
        //console.log(values);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                name="proyectName"
                ref={register({
                    required: 'Required',
                    pattern: {
                        value: /^[A-Z0-9]/i,
                        message: "invalid email address"
                    }
                })}
            />
            {errors.proyectName && errors.proyectName.message}
            <input
                name="agresividad"
                ref={register({
                    required: 'Required',
                    pattern: {
                        value: /^[A-Z0-9]/i,
                        message: "invalid agresividad address"
                    }
                })}
            />
            {errors.agresividad && errors.agresividad.message}
            <input
                name="zona"
                ref={register({
                    required: 'Required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]$/i,
                        message: "invalid zona address"
                    }
                })}
            />
            {errors.zona && errors.zona.message}

            <button type="submit">Submit</button>
        </form>
    );
};
export default Example;