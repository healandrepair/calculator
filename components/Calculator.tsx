'use client'

import { useState } from "react";
import './CalculatorStyles.css';
import '../src/app/AddBootstrap';

function Calculator() {
    const plusOne = () => {
        setValue(currentValue + 1)
        console.log(currentValue)
    }

    const handleButtonClick = (value: string) => {
        var tempCurrentCalculation = currentCalculation + value
        setCurrentCalculation(tempCurrentCalculation);
    }

    const [currentCalculation, setCurrentCalculation] = useState<string>("");

    const [currentValue, setValue] = useState<number>(0)
    return (
    <div>
        <div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="1+1"/>
                <label htmlFor="floatingInput">{currentCalculation}</label>
            </div>
        </div>
            <div className={"grid-container"}>
                <button onClick={() => handleButtonClick("÷")} className="btn btn-outline-secondary btn-lg">÷</button>
                <button onClick={() => handleButtonClick("-")} className="btn btn-outline-secondary">-</button>
                <button onClick={() => handleButtonClick("+")} className="btn btn-outline-secondary">+</button>
                <button className="btn btn-outline-secondary"></button>
                <button onClick={() => handleButtonClick("1")} className="btn btn-outline-secondary btn-lg">1</button>
                <button onClick={() => handleButtonClick("2")} className="btn btn-outline-secondary">2</button>
                <button onClick={() => handleButtonClick("3")} className="btn btn-outline-secondary">3</button>
                <button className="btn btn-primary">Submit</button>
                <button onClick={() => handleButtonClick("4")} className="btn btn-outline-secondary">4</button>
                <button onClick={() => handleButtonClick("5")} className="btn btn-outline-secondary">5</button>
                <button onClick={() => handleButtonClick("6")} className="btn btn-outline-secondary">6</button>
                <button className="btn btn-outline-secondary">Delete</button>
                <button onClick={() => handleButtonClick("7")} className="btn btn-outline-secondary">7</button>
                <button onClick={() => handleButtonClick("8")} className="btn btn-outline-secondary">8</button>
                <button onClick={() => handleButtonClick("9")} className="btn btn-outline-secondary">9</button>
                <button className="btn btn-outline-secondary">Clear</button>
            </div> 
        <p>
            Current value: {currentValue}
        </p>
        <button onClick={plusOne}>Click me!</button>
    </div>)
}

export default Calculator;