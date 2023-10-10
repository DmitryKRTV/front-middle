import React, {useState} from 'react';
import cls from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevState => ++prevState)
    }

    return (
        <div className={cls.Counter}>
            <h1>{count}</h1>
            <button onClick={increment}>inc</button>
        </div>
    );
};

