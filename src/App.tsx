import { useState } from "react";
import ListMessages from "./components/ListMessages";
import ViewMessage from "./components/ViewMessages";
import { Message, Messages } from "./components/data/Message";
import './App.css'

function App() {

    const [mensaje, setMensaje] = useState<Message | undefined>();

    const selectMessage = (id: number) =>
        setMensaje(Messages.find((m) => m.id === id));

    return (
        <div className="App">
            <h1>Bandeja de Entrada</h1>
            <div id="bandejaDeEntrada">
                <ListMessages
                    messages={Messages}
                    selectMessage={selectMessage}
                />
                <ViewMessage 
                    message={mensaje}
                />
            </div>
        </div>
    );
}

export default App;
