'use client'

import { useState } from "react";
import './CalculatorStyles.css';
import '../src/app/AddBootstrap';

function Calculator() {
    const plusOne = () => {
        setValue(currentValue + 1)
        console.log(currentValue)
    }

    const handleNumberButtonClick = (value: string) => {
        var tempCurrentCalculation = currentCalculation + value
        setCurrentCalculation(tempCurrentCalculation);
    }

    const handleClearButton = () => {
        setCurrentCalculation("");
    }

    const handleDeleteButton = () => {
        var tempCurrentCalculation = currentCalculation.slice(0, -1)
        setCurrentCalculation(tempCurrentCalculation);
    }

    const handleSubmitButton = () => {
        try {
            var result = eval(currentCalculation)
            console.log(result)
            setCurrentCalculation(result)
        }
        catch {
            setCurrentCalculation("Error")
        }
    }

    const [currentCalculation, setCurrentCalculation] = useState<string>("");

    const [currentValue, setValue] = useState<number>(0)
    return (
        <div>
            <div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="1+1" />
                    <label htmlFor="floatingInput">{currentCalculation}</label>
                </div>
            </div>
            <div className={"grid-container"}>
                <button onClick={() => handleNumberButtonClick("/")} className="btn btn-outline-secondary btn-lg btn-operation">/</button>
                <button onClick={() => handleNumberButtonClick("-")} className="btn btn-outline-secondary btn-lg btn-operation">-</button>
                <button onClick={() => handleNumberButtonClick("+")} className="btn btn-outline-secondary btn-lg btn-operation">+</button>
                <button className="btn btn-outline-secondary btn-lg">blank</button>                <button onClick={() => handleNumberButtonClick("1")} className="btn btn-outline-secondary btn-lg">1</button>
                <button onClick={() => handleNumberButtonClick("2")} className="btn btn-outline-secondary btn-lg">2</button>
                <button onClick={() => handleNumberButtonClick("3")} className="btn btn-outline-secondary btn-lg">3</button>
                <button onClick={() => handleSubmitButton()} className="btn btn-primary btn-lg">Submit</button>
                <button onClick={() => handleNumberButtonClick("4")} className="btn btn-outline-secondary btn-lg">4</button>
                <button onClick={() => handleNumberButtonClick("5")} className="btn btn-outline-secondary btn-lg">5</button>
                <button onClick={() => handleNumberButtonClick("6")} className="btn btn-outline-secondary btn-lg">6</button>
                <button onClick={() => handleDeleteButton()} className="btn btn-outline-secondary btn-lg">Delete</button>
                <button onClick={() => handleNumberButtonClick("7")} className="btn btn-outline-secondary btn-lg">7</button>
                <button onClick={() => handleNumberButtonClick("8")} className="btn btn-outline-secondary btn-lg">8</button>
                <button onClick={() => handleNumberButtonClick("9")} className="btn btn-outline-secondary btn-lg">9</button>
                <button onClick={() => handleClearButton()} className="btn btn-outline-secondary btn-lg">Clear</button></div>
            <p>
                Current value: {currentValue}
            </p>
            <button onClick={plusOne}>Click me!</button>
        </div>)
}

export default Calculator;