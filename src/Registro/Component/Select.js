import React from 'react';

class Select extends React.Component {
    render(){
        const {options}=this.props;
        const {id}=this.props;
        const {onchange}=this.props;
        return <select id={id} onChange={onchange}>
                    {options.map(option=><option key={option.id} >{option.nombre}</option>)}
                </select>
    }

}

export default Select;