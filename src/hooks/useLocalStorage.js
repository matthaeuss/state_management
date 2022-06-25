import {useEffect, useState} from "react";

const getStateFromLocalStorage = (defaultValue, key) => {
    const storage = localStorage.getItem(key)
    if (storage) return JSON.parse(storage).value;
    return defaultValue
}

const setStateToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify({value: value}));
}

const useLocalStorage = (defaultValue, key) => {
    const initialValue = getStateFromLocalStorage(defaultValue, key)
    const[value, setValue] = useState(initialValue);

    useEffect(() => {
        setStateToLocalStorage(value)
    }, [value])

    return[value, setValue];
}

export default useLocalStorage;