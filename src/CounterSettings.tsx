import './App.css'
import {Button} from "./Button.tsx";

type CounterSettingsProps = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    onSet: () => void
    error: boolean
    setMode: (mode: boolean) => void
}

export const CounterSettings = ({
                                    maxValue,
                                    startValue,
                                    setMaxValue,
                                    setStartValue,
                                    onSet,
                                    error,
                                    setMode
                                }: CounterSettingsProps) => {

    const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value=+e.currentTarget.value
        if (value>=0){
            setMaxValue(value)
            setMode(true)
        }

    }

    const onChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value=+e.currentTarget.value
        if (value>=0){
            setStartValue(value)
            setMode(true)
        }

    }
    return (
        <div className="settings">
            <div className="input-box">
                <label>max value:</label>
                <input type="number"
                       value={maxValue}
                       onChange={onChangeMax}
                       className={error ? 'error' : ''}/>
            </div>
            <div className="input-box">
                <label>start value:</label>
                <input type="number"
                       value={startValue}
                       onChange={onChangeStart}
                       className={error ? 'error' : ''}/>
            </div>
            <div className="buttons">
                <Button title="set" onClick={onSet} disabled={error}/>

            </div>
        </div>
    )
}




