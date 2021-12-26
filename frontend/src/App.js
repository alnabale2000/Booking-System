import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation";

function App() {
    return (
        <div className="App">
            <Navigation />
            {/* <Switch><Route exact path="/" component={Sellers}/></Switch> */}
        </div>
    );
}

export default App;
