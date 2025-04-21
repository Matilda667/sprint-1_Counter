import './App.css'
import {useState} from "react";
import {Button} from "./Button.tsx";


export const Counter = () => {
    const [count, setCounter] = useState(0)

    const increment = () => {
        if (count < 5)
            setCounter(count + 1)
    }
    const reset = () => {
        setCounter(0)
    }
    return (
        <div className="counter-container">
            <div className={`display ${count === 5 ? 'limit' : ''}`}>
                {count}
            </div>
            <div className="buttons">
                <Button title="inc" onClick={increment} disabled={count >= 5}/>
                <Button title="reset" onClick={reset} disabled={count === 0}/>
            </div>
        </div>
    )
}


