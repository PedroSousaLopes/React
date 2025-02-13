import React from "react";
import "./main.css";
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import Form from "./Form";
import Tarefas from "./Tarefas";

export default class Main extends React.Component {
    state = {
        novatarefa: "",
        tarefas: [],
        index: -1, // Índice para edição
    };

    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem("tarefas"));

        if (!tarefas) return;

        this.setState({ tarefas });
    }


    componentDidUpdate(prevProps, prevState) {
        const { tarefas } = this.state;

        if (tarefas === prevState.tarefas) return;

        localStorage.setItem("tarefas", JSON.stringify(tarefas));

    }
    handleSubimit = (e) => {
        e.preventDefault();
        const { tarefas, index } = this.state;
        let { novatarefa } = this.state;
        novatarefa = novatarefa.trim();

        if (!novatarefa) return; // Impede de adicionar vazio
        if (tarefas.includes(novatarefa) && index === -1) return; // Evita duplicação na adição

        const novasTarefas = [...tarefas];

        if (index === -1) {
            // Adiciona nova tarefa
            novasTarefas.push(novatarefa);
        } else {
            // Edita tarefa existente
            novasTarefas[index] = novatarefa;
        }

        this.setState({
            tarefas: novasTarefas,
            novatarefa: "",
            index: -1, // Reseta o índice após a edição
        });
    };

    handleEdit = (e, index) => {
        const { tarefas } = this.state;

        this.setState({
            index, // Define o índice da tarefa a ser editada
            novatarefa: tarefas[index], // Preenche o input com o valor da tarefa
        });
    };

    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1); // Remove o item do array

        this.setState({
            tarefas: novasTarefas,
            index: -1, // Caso esteja editando e delete, resetamos o índice
            novatarefa: "", // Limpa o input se a tarefa editada for deletada
        });
    };

    inputMudou = (e) => {
        this.setState({
            novatarefa: e.target.value
        });
    };

    render() {
        const { novatarefa, tarefas } = this.state;

        return (
            <div className="main">
                <h1>Lista de tarefas</h1>

                <Form
                    handleSubimit={this.handleSubimit}
                    inputMudou={this.inputMudou}
                    novatarefa={novatarefa}
                />

                <Tarefas
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                    tarefas={tarefas}
                />

            </div>
        );
    }
}
