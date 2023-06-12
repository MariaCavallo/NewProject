//import ListCategories from "./components/Lists/ListCategories";
//import ViewCategory from "./components/Views/ViewCategory";
import "./App.css";
import SearchPokemon from "./components/SearchPokemon";


export default function App() {

    return (
        <div className="App">
            <div className="title">
                <h1>PokeDex</h1>
                <img className="App-logo" src="/src/assets/pokebola.png" alt="pokebola" />
            </div>    
            <div id="bandejaDeEntrada">
                {/* <ListCategories/> */}
                {/* <ViewCategory /> */}
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <SearchPokemon />
                </div>
            </div>
        </div>
    );
}