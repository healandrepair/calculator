'use client'

import { useState } from "react";

function Calculator() {
    const plusOne = () => {
        setValue(currentValue + 1)
        console.log(currentValue)
    }

    const [currentValue, setValue] = useState<number>(0)
    return (
    <div>

        <p>
            Current value: {currentValue}
        </p>
        <button onClick={plusOne}>Click me!</button>
    </div>)
}

export default Calculator;