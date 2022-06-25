import './App.css';
import {useState} from "react";
import initialState from "./initialState";
import Grudges from "./components/Grudges";

// import Counter from "./components/Counter/Counter";
// import CounterFn from "./components/CounterFn/CounterFn";

function App() {
    const [grudges, setGrudges] = useState(initialState);

    return (
        <div className="App">
            {/*<Counter max={10}/>*/}
            {/*<CounterFn max={10}/>*/}
            <Grudges grudges={grudges}/>
        </div>
    );
}

export default App;
