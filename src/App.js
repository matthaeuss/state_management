import './App.css';
// import Counter from "./components/Counter";
import CounterFn from "./components/CounterFn";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
         <Counter max={10}/>
        {/*<CounterFn/>*/}
    </div>
  );
}

export default App;
