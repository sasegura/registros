import React from 'react';
import DataProyecto from "./Proyecto/DataProyecto";


class Registro extends React.Component {
    constructor() {
        super();
        this.state = {
            proyectNameSelected:'',
            agresividadSelected:'',
            zonaSelected:'',
            message:'',
            estado:'',
            proyectsSelected : [],
            idSelected:'',
            eliminado:''
        }
    }

    componentDidMount() {
        this.onSubmitSelected();
    }

    render() {
        return (
            <div>
                {this.renderProyectos()}
                {this.renderProyectoData()}
            </div>
        );
    }

    renderProyectos() {
        //console.log(this.state.proyectNameSelected);
        if (this.state.proyectsSelected == null) {
            return <p className="text-center">Cargando proyectos...</p>
        }
        return (
            <div>
                <select id='proyectos' name="proyectNameSelected" onChange={this.onChangeSelected.bind(this)}>
                    {this.state.proyectsSelected.map(proyect=>
                        <option key={proyect.id} value={proyect.nombre} checked={this.state.proyectNameSelected===proyect.nombre}>
                            {proyect.nombre}
                        </option>)}
                </select>
            </div>
        );
    }
    onChangeSelected(e){
        this.setState({[e.target.name]: e.target.value});
        //console.log(e.target.value);
        this.state.proyectsSelected.forEach(proyect=>{
            if(proyect.nombre===e.target.value){
                this.setState({idSelected: proyect.id});
                this.setState({agresividadSelected: proyect.agresividad});
                this.setState({zonaSelected: proyect.zonaSismica});
            }
        });
    }
    renderProyectoData() {
        if (this.state.proyectNameSelected === "") {
            //console.log(this.state.proyectNameSelected);
            return <p className="text-center">Cargando datos del proyecto...</p>
        }
        //console.log(this.state.proyectNameSelected);
        return (
            <div>
                <DataProyecto proyectNameSelected={this.state.proyectNameSelected} agresividadSelected={this.state.agresividadSelected} zonaSelected={this.state.zonaSelected}/>
                <div>
                    <form onSubmit={this.eliminar.bind(this)}>
                        <input type="submit" value="Eliminar"/>
                    </form>
                </div>
            </div>
        );
    }

    onSubmitSelected () {
        fetch('http://localhost:8083/WebApplication3/api/selectProyects')
            .then(response => response.json())
            .then(
                proyectsSelected => {this.setState({ proyectsSelected })
                    this.setState({proyectNameSelected: proyectsSelected[0].nombre});
                    this.setState({zonaSelected: proyectsSelected[0].zonaSismica});
                    this.setState({agresividadSelected: proyectsSelected[0].agresividad});
                    this.setState({idSelected: proyectsSelected[0].id});
                    //console.log(this.state.proyecto)
                    this.renderProyectoData();
                })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
    }
    eliminar(event){
        event.preventDefault();

        fetch(`http://localhost:8083/WebApplication3/api/eliminarProyecto?id=${this.state.idSelected}`,{method: 'POST'})
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
}


export default Registro;