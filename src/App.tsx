import "./App.css";
import SearchPokemon from "./components/Search/SearchPokemon";


export default function App() {

    return (
            <div className="App">
                <div className="title">
                    <h1>PokeDex</h1>
                    <img className="App-logo" src="/src/assets/pokebola.png" alt="pokebola" />
                </div>    
                <div id="bandejaDeEntrada">
                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <SearchPokemon />
                    </div>
                </div>
            </div>
    );
}