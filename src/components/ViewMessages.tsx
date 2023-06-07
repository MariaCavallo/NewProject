import React from "react";
import PropTypes from "prop-types";
import { Message } from "./data/Message";

// Debemos tipar las props de nuestro componente
// Quiza podemos utilizar la interfaz ya creada en mensajes ?

interface ViewMessageProps {
    message: Message | undefined;
}

const ViewMessage: React.FC<ViewMessageProps>  = ({ message }) =>
    message ? (
        <div id="vistaMensaje">
            <h3 className="titulo">{message.asunto}</h3>
            <strong>
                {message.remitente.nombre} {message.remitente.apellido} ({message.email})
            </strong>
            <p>{message.texto}</p>
        </div>
    ) : null;

    ViewMessage.propTypes = {
    message: PropTypes.shape({
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
    }),
};

export default ViewMessage;