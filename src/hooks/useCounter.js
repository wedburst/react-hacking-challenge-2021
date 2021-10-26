import {useState} from "react";

export const useCounter = (inicialState = 10000) => {
    const [counter, setCounter] = useState(inicialState)

    const increment = (factor = 1) => {
        setCounter(counter + factor)
    }

    const decrement = (factor = 1) => {
        setCounter(counter - factor)
    }

    return {
        counter,
        increment,
        decrement
    };
}
