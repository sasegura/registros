import React from 'react';
import DataProyecto from "./DataProyecto";

class Proyecto extends React.Component {
    constructor() {
        super();
        this.state = {
            proyectName:'',
            agresividad:'',
            zona:'',
            message:'',
            estado:'',
            proyectNameSelected:'',
            agresividadSelected:'',
            zonaSelected:'',
            proyectsSelected : [],
            idSelected:'',
            eliminado:'',
            proyectNameerror: '',
            agresividaderror: '',
            zonaerror: '',
        }
    }
    componentDidMount() {
        this.onSubmitSelected1();
    }
    render() {
        return (
            <div>
                {this.Iniciar()}
                {this.renderProyectos()}
                {this.renderProyectoData()}
            </div>

        );
    }
    Iniciar(){
        return(
            <div>
                <div>
                    <label htmlFor="proyectName">Nombre del proyecto:</label>
                    <input type="text" placeholder="Nombre de proyecto" onChange={this.onChange.bind(this)} name="proyectName" id="proyectId"/>
                    {this.state.proyectNameerror}
                </div>
                <div>
                    <label htmlFor="agresividad">Selecciones </label>
                    <input type="radio" name="agresividad" value="baja" onChange={this.onChange.bind(this)}/>Baja
                    <input type="radio" name="agresividad" value="media" onChange={this.onChange.bind(this)}/>Meda
                    <input type="radio" name="agresividad" value="alta" onChange={this.onChange.bind(this)}/>Alta
                    <input type="radio" name="agresividad" value="muyalta" onChange={this.onChange.bind(this)}/>Muy Alta
                    {this.state.agresividaderror}
                </div>
                <div><label htmlFor="zona">Selecciones </label>
                    <input type="radio" name="zona" value="1" onChange={this.onChange.bind(this)}/>1
                    <input type="radio" name="zona" value="2" onChange={this.onChange.bind(this)}/>2
                    <input type="radio" name="zona" value="5" onChange={this.onChange.bind(this)}/>5
                    {this.state.zonaerror}
                </div>
                <div>
                    <button onClick={this.save.bind(this)}>Guardar</button>
                </div>
            </div>
        )
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    save(e){
        e.preventDefault()
        this.valid();
    }

    //Validar los datos de proyecto
    valid(){
        if(this.state.proyectName==="")
            this.setState( {proyectNameerror:'Campo nombre de proyecto requerido'});
        if (this.state.agresividad==='')
            this.setState({agresividaderror:'Seleccione una agresividad'});
        if (this.state.zona==='')
            this.setState({zonaerror:'Seleccione una zona sísmica'});

        if (!(this.state.proyectName==="") && !(this.state.agresividad==="") && !(this.state.zona==="")){
            this.onSubmit();
        }
    }

    onSubmit () {
        var url=`http://localhost:8083/WebApplication3/api/crearProyecto?proyectoName=${this.state.proyectName}&agresividad=${this.state.agresividad}&zona=${this.state.zona}`;
        fetch(url,{method: 'POST'})
            .then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                console.log(jsonData);
                this.setState({ proyectsSelected:[] });
                this.componentDidMount();
                this.setState({ agresividaderror:"" });
                this.setState({ zonaerror:"" });
                this.setState({ proyectNameerror:"" });

                })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
    }
    async onSubmit1 () {
        const  url=`http://localhost:8083/WebApplication3/api/crearProyecto?proyectoName=${this.state.proyectName}&agresividad=${this.state.agresividad}&zona=${this.state.zona}`;

        try {
            const res = await fetch(url, {method: 'POST'});
            const data = (res).json();
            this.setState({proyectsSelected: data});
            this.componentDidMount();

            console.log(data);
        }catch(error) {
                // handle your errors here
                console.error(error)
        }
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

    async onSubmitSelected1 () {
        try {
            const result =await fetch('http://localhost:8083/WebApplication3/api/selectProyects');
            const data=await result.json();
            this.setState({proyectsSelected: data});
            this.setState({proyectNameSelected: data[0].nombre});
            this.setState({zonaSelected: data[0].zonaSismica});
            this.setState({agresividadSelected: data[0].agresividad});
            this.setState({idSelected: data[0].id});
            this.renderProyectoData();
        }catch(error) {
            console.error(error)
        }
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


export default Proyecto;