import React from 'react';
import Student from './Student';

class StudentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { carnet: '', horario: '', tarde: '' };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Manejador del evento de submit, ejecuta la funcion saveStudent
    // Pasada por props
    handleSubmit(event) {
        event.preventDefault();
        
        let student = new Student(this.state.carnet, this.state.horario, this.state.tarde);
        this.props.onSave(student);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    // Label + input
    // TODO: Necesita se modificado para funcionar con todos los tipos de entrada
    renderInput(name,placeholder, type = "text") {
        return (
            /* Se un fragmento React, para establecer que este código se hijo directo en el resultado */
            <fieldset>
                <label htmlFor={name}>{name}</label>
                <input
                    type={type}
                    name={name} id={name}
                    value={this.state[name]}
                    placeholder= {placeholder}
                    onChange={this.handleInputChange} />
            </fieldset>
        );
    }


    renderCombo() {
        return (
            /* Se un fragmento React, para establecer que este código se hijo directo en el resultado */
            <fieldset>
                <label for="schedule">Horario: </label>
                <select name="horario" class="form-control" id="schedule_field">
                                        <option>Lunes de 9:00 a 11.00</option>
                                        <option>Martes de 13:30 a 15:30</option>
                                        <option>Miércoles de 9:00 a 11.00</option>
                                        <option>Jueves de 13:30 a 15:30</option>
                                        <option>Viernes de 9:00 a 11.00</option>
                                        <option>Viernes de 15:30 a 17:30</option>
             </select>
            </fieldset>
        );
    }

    renderCheck() {
        return (
            /* Se un fragmento React, para establecer que este código se hijo directo en el resultado */
            <fieldset>
            <input name="tarde" type="checkbox" class="custom-control-input" id="late_switch" />
            <label class="custom-control-label" for="late_switch">Llegó tarde?</label>
            </fieldset>
        );
    }

    render() {
        return (
            <form id="contact" action="" onSubmit={this.handleSubmit}>
                <h3>Student Form</h3>
                {this.renderInput("carnet","00031111")}
                {this.renderCombo()}
                {this.renderCheck()}
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default StudentForm;
