import React, {useState} from 'react';
import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevState => ++prevState)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>inc</button>
        </div>
    );
};

