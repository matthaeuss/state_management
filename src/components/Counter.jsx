import {Component} from "react";

const increment = (state, props) => {
    if (state.count >= props.max) return;
    return {count: state.count + 1}
};

const storageStateInLocalStorage = (state) => {
    localStorage.setItem('counterState', JSON.stringify(state))
}

const storageStateInLocalStorageWithBind = function() {
    localStorage.setItem('counterState', JSON.stringify(this.state))
}

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentDidUpdate() {
        setTimeout(() => {
            console.log(`Count: ${this.state.count}`)
        }, 3000)
    }


    increment() {
        this.setState(
            increment,
            // () => storageStateInLocalStorage(this.state)
            // () => (document.title = `Count ${this.state.count}`)

            storageStateInLocalStorageWithBind.bind(this)
        )
    }

    decrement() {
        this.setState({count: this.state.count - 1})
    }

    reset() {
        this.setState({count: 0})
    }

    render() {
        const {count} = this.state

        return (
            <main>
                <p>{count}</p>
                <section>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.reset}>Reset</button>
                </section>
            </main>
        )
    }
}

export default Counter;