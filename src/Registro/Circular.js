import React from 'react';


class Circular extends React.Component {
    constructor() {
        super();
        this.state = {
            proyectName:'',
            agresividad:'',
            zona:'',
            message:'',
            estado:''
        }
    }
    render() {
        return (
            <div>
                <div>
                    <label htmlFor="proyectName">Nombre del proyecto:</label>
                    <input type="text" onChange={this.onChange.bind(this)} name="proyectName" id="proyectIda"/>

                </div>
                <div>
                    <label htmlFor="agresividad">Selecciones </label>
                    <input type="radio" name="agresividad" value="baja" onChange={this.onChange.bind(this)}/>Baja
                    <input type="radio" name="agresividad" value="media" onChange={this.onChange.bind(this)}/>Meda
                    <input type="radio" name="agresividad" value="alta" onChange={this.onChange.bind(this)}/>Alta
                    <input type="radio" name="agresividad" value="muyalta" onChange={this.onChange.bind(this)}/>Muy Alta
                </div>
                <div><label htmlFor="zona">Selecciones </label>
                    <input type="radio" name="zona" value="1" onChange={this.onChange.bind(this)}/>1
                    <input type="radio" name="zona" value="2" onChange={this.onChange.bind(this)}/>2
                    <input type="radio" name="zona" value="5" onChange={this.onChange.bind(this)}/>5

                </div>
                <div>
                    <button onClick={this.save.bind(this)}>Guardar</button>
                </div>
                <span>{JSON.stringify(this.state)}</span>
            </div>

        );
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    save(e){
        e.preventDefault()
        this.valid();
        //this.setState({message: 'Guardado corectamente'})
    }
    valid(){
        this.onSubmit()
    }
    onSubmit () {
        var url=`http://localhost:8083/WebApplication3/api/selectCircular`;
        fetch(url)
            .then(response => response.json())
            .then(
                estado => {this.setState({ estado })

                    //console.log(this.state.proyecto)
                })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
    }
}


export default Circular;