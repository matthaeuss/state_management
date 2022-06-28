import './App.css';
import Grudges from "./components/Grudges";
import NewGrudge from "./components/NewGrudge";
import {GrudgeProvider} from "./GrudgeContext";




function App() {

    return (
        <GrudgeProvider>
            <div className="App">
                <NewGrudge/>
                <Grudges />
            </div>
        </GrudgeProvider>
    );
}

export default App;
