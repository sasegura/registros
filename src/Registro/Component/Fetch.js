import React from 'react';
class Fetch extends React.Component
{
    async onSubmitSelected(){
        try {
            const response = await fetch('http://localhost:8083/WebApplication3/api/selectProyects');
            await this.setState({proyectsSelected: response.json()});
            this.setState({proyectNameSelected: this.state.proyectsSelected[0].nombre});
            this.setState({zonaSelected: this.state.proyectsSelected[0].zonaSismica});
            this.setState({agresividadSelected: this.state.proyectsSelected[0].agresividad});
            this.setState({idSelected: this.state.proyectsSelected[0].id});
            //console.log(this.state.proyecto)
            this.renderProyectoData();
        } catch (error) {
            // handle your errors here
            console.error(error)
        }
    }
}
export default Fetch;