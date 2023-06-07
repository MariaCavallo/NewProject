import React from "react";
import PropTypes from "prop-types";
import { Message } from "./data/Message";

// Debemos tipar las props de nuestro componente
// Quiza podemos utilizar la interfaz ya creada en mensajes ?

interface ListMessagesProps  {
    messages: Message[];
    selectMessage: (id: number) => void;
}

const ListMessages: React.FC<ListMessagesProps > = ({ messages = [], selectMessage }) => (
    <div id="listadoMensaje">
        {messages.map((message) => (
            <div onClick={() => selectMessage(message.id)} key={message.id}>
                <strong>De: {message.remitente.nombre} {message.remitente.apellido}</strong>
                <p>Asunto: {message.asunto}</p>
                <small> {message.fecha}</small>
            </div>
        ))}
    </div>
);

ListMessages.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            remitente: PropTypes.shape({
                nombre: PropTypes.string.isRequired,
                apellido: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                ciudadDeNacimiento: PropTypes.shape({
                    ciudad: PropTypes.string.isRequired,
                    region: PropTypes.string.isRequired,
                }).isRequired
            }).isRequired,
            email: PropTypes.string.isRequired,
            asunto: PropTypes.string.isRequired,
            fecha: PropTypes.string.isRequired,
            texto: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    selectMessage: PropTypes.func.isRequired,
};

export default ListMessages;