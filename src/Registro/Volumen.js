import React from 'react';
import ReactDOM from "react-dom";


class Volumen extends React.Component {
    constructor() {
        super();
        this.state = {}
        this.state={planos : []}
        this.state={proyects : []}
        this.state={proyecto:""}
    }
    componentDidMount() {
        this.onSubmit3();
    }
    change = (e) => {
        this.setState({proyecto: e.target.value},()=>{
            this.OnChangeProyecto();
        });
    }
    render() {
        return (
            <div>
                {this.renderProyecto()}
            </div>
        );
    }
    renderProyecto() {
        if (this.state.proyects == null) {
            return <p className="text-center">Cargando proyectos...</p>
        }
        return (
            <div>
                <select id='proyectos' onChange={this.change.bind(this)}>
                    {this.state.proyects.map(proyect=><option key={proyect.id} >{proyect.nombre}</option>)}
                </select>
                <div id='planos'>
                </div>
            </div>
        );
    }

    renderPlanos() {
        if ( this.state.planos.length > 0 ) {
            const {planos}=this.state;
            return (
                <select id='planoss' >
                    {planos.map(plano=><option key={plano.id} >{plano.id}</option>)}
                </select>
            );
        }else {
            return <p className="text-center">No existen planos asociados a este proyecto o esta demorando la respuesta del servidor,
                espere unos segundos y si no cargan los planos agregue nuevos registros al proyectos para que sean procesados.
                Cargando planos...</p>
        }
    }

    Completar() {
        ReactDOM.render(
            <React.StrictMode>
                {this.renderPlanos()}
            </React.StrictMode>,
            document.getElementById('planos')
        );
    }
    OnChangeProyecto () {
        var nombre=encodeURIComponent(this.state.proyecto);
        var url=`http://localhost:8083/WebApplication3/api/selectPlanosProyName?nombreProyecto=${nombre}`;
        fetch(url)
            .then(response => response.json())
            .then(
                (planos) => {this.setState({ planos })
                    this.Completar()
                })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
    }
    onSubmit3 () {
        fetch('http://localhost:8083/WebApplication3/api/selectProyects')
            .then(response => response.json())
            .then(
                proyects => {this.setState({ proyects })
                    this.setState({proyecto: proyects[0].nombre});
                    //console.log(this.state.proyecto)
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
    }
}

export default Volumen;