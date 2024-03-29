import { useEffect, useState } from "react";

const getStoredItems = <T>(key: string, defaultValue: T): T => {
    const savedItem = localStorage.getItem(key)
    if (savedItem) {
        return JSON.parse(savedItem);
    }
    return defaultValue;
}

const useLocalStorage = <T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [value, setValue] = useState(() => {
        return getStoredItems(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])
    console.log(value)

    return [value, setValue]
}

export { useLocalStorage };