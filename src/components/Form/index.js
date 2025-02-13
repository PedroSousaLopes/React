import React from "react";
import PropTypes from 'prop-types';
import { FaPlusCircle } from "react-icons/fa";
import './Form.css';

export default function Form(props) {
    return (
        <form onSubmit={props.handleSubimit} action="#" className="form">
            <input
                type="text"
                onChange={props.inputMudou}
                value={props.novatarefa} // Garante que o valor reflete o estado
            />
            <button type="submit">
                <FaPlusCircle />
            </button>
        </form>
    )
}

// Validação das propriedades
Form.propTypes = {
    handleSubimit: PropTypes.func.isRequired, // handleSubimit deve ser uma função e é obrigatório
    inputMudou: PropTypes.func.isRequired,    // inputMudou deve ser uma função e é obrigatório
    novatarefa: PropTypes.string.isRequired,  // novatarefa deve ser uma string e é obrigatório
};