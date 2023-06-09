import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProviderCategories from "./context/ContextCategories";
import ListCategories from "./components/ListCategories";
import ViewCategory from "./components/ViewCategory";
import "./App.css";

export default function App() {

    return (
        <QueryClientProvider client={new QueryClient()}>
            <ProviderCategories>
                <div className="App">
                    <h1>Inventario Pokemon</h1>
                    <div id="bandejaDeEntrada">
                        <ListCategories/>
                        <ViewCategory />
                    </div>
                </div>
            </ProviderCategories>
        </QueryClientProvider>
    );
}