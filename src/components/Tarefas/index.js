import React from "react";
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tarefas.css';

// Componente Tarefas
export default function Tarefas({ handleDelete, handleEdit, tarefas }) {
    return (
        <ul className="tarefas">
            {tarefas.map((tarefa, index) => (
                <li key={index}>
                    {tarefa}
                    <span>
                        <FaEdit
                            className="edit"
                            onClick={(e) => handleEdit(e, index)}
                        />
                        <FaWindowClose
                            className="delete"
                            onClick={(e) => handleDelete(e, index)}
                        />
                    </span>
                </li>
            ))}
        </ul>
    );
}

// Validação das propriedades
Tarefas.propTypes = {
    handleDelete: PropTypes.func.isRequired, // handleDelete deve ser uma função e é obrigatório
    handleEdit: PropTypes.func.isRequired,   // handleEdit deve ser uma função e é obrigatório
    tarefas: PropTypes.arrayOf(PropTypes.string).isRequired, // tarefas deve ser um array de strings e é obrigatório
};
