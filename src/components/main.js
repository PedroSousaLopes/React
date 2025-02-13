import React from "react";
import "./main.css";

export default class Main extends React.Component {
    state = {
        novatarefa: ""
    };

    inputMudou = (e) => {
        this.setState({
            novatarefa: e.target.value
        });
    }

    render() {
        const { novatarefa } = this.state;

        return (
            <div className="main">
                <h1>Lista de tarefas : {novatarefa}</h1>
                <form action="#">
                    <input type="text" onChange={this.inputMudou} />
                    <button type="button">Enviar</button>
                </form>
            </div>
        );
    }
}
