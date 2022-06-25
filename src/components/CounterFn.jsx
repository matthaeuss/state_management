import React, {useEffect, useRef} from 'react';
import useLocalStorage from "../hooks/useLocalStorage";


function CounterFn({max}) {
    const [count, setCount] = useLocalStorage(0, 'count')
    const counterRef = useRef();
    counterRef.current = count;

    // useEffect(() => {
    //     localStorage.setItem('counterState', JSON.stringify({count}))
    // }, [count])

    useEffect(() => {
        const d = new Date().getSeconds()
        const interval = setInterval(() => {
            console.log(`Counter: ${counterRef.current}`, new Date().getSeconds() - d)
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [count])

    function increment() {
        setCount(state => Math.min(state + 1, max))
    }

    function decrement() {
        setCount(count - 1)
    }

    function reset() {
        setCount(0)
    }

    return (
        <main>
            <p>{count}</p>
            <section>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </section>
        </main>
    );
}

export default CounterFn;








// import React, {useEffect, useState} from 'react';
//
// const getStateFromLocalStorage = () => {
//     const storage = localStorage.getItem('counterState');
//     if(storage) return JSON.parse(storage);
//     return {count: 0}
// }
//
// function CounterFn({max}) {
//     const[count, setCount] = useState(getStateFromLocalStorage().count);
//
//     useEffect(() => {
//         localStorage.setItem('counterState', JSON.stringify({count: count}))
//     }, [count])
//
//     function increment() {
//         // setCount(state => {
//         //     if(state >= max) return max;
//         //     return state + 1;
//         // });
//         setCount(state => Math.min(state + 1, max));
//
//         // setCount(state => state + 1)
//         // setCount(state => state + 1)
//         // setCount(state => state + 1) // 3
//         // setCount(count + 1)
//         // setCount(count + 1) // 1
//         // setCount(count + 1) działa object assigned, wszystkie są setowane w jeden
//     }
//
//     function decrement() {
//         setCount(count - 1)
//     }
//
//     function reset() {
//         setCount(0)
//     }
//
//     return(
//         <main>
//             <p>{count}</p>
//             <section>
//                 <button onClick={increment}>Increment</button>
//                 <button onClick={decrement}>Decrement</button>
//                 <button onClick={reset}>Reset</button>
//             </section>
//         </main>
//     )
// }
//
// export default CounterFn;