import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Sellers from "./components/sellers";
function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route exact path="/" element={<Sellers />} />
            </Routes>
        </div>
    );
}

export default App;
