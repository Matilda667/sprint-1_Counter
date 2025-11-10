import './App.css'
import {useEffect, useState} from "react";
import {Button} from "./Button.tsx";
import {CounterSettings} from "./CounterSettings.tsx";

export const Counter = () => {
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [count, setCount] = useState(startValue)
    const [isSetMode, setIsSetMode] = useState(true)

    // загрузка из localStorage
    useEffect(() => {
        const savedMax = localStorage.getItem("maxValue")
        const savedStart = localStorage.getItem("startValue")
        const savedCount = localStorage.getItem("count")

        if (savedMax) setMaxValue(Number(savedMax))
        if (savedStart) setStartValue(Number(savedStart))
        if (savedCount) setCount(Number(savedCount))
    }, [])

    // сохранение в localStorage
    useEffect(() => {
        localStorage.setItem("maxValue", String(maxValue))
        localStorage.setItem("startValue", String(startValue))
        localStorage.setItem("count", String(count))
    }, [maxValue, startValue, count])

    const increment = () => {
        if (count < maxValue)
            setCount(count + 1)
    }

    const reset = () => {
        setCount(startValue)
    }

    const applySettings = () => {
        setCount(startValue)
        setIsSetMode(false)
    }

    const error = startValue < 0 || startValue >= maxValue

    return (
        <div className="main-container">
            <CounterSettings
                maxValue={maxValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                onSet={applySettings}
                error={error}
                setMode={setIsSetMode}
            />

            <div className="counter-container">
                <div className={`display ${count === maxValue ? 'limit' : ''}`}>
                    {isSetMode ? 'enter values and press "set"' : count}
                </div>
                <div className="buttons">
                    <Button title="inc" onClick={increment} disabled={count >= maxValue || isSetMode}/>
                    <Button title="reset" onClick={reset} disabled={count === startValue || isSetMode}/>
                </div>
            </div>
        </div>
    )
}

