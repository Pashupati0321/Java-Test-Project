import { useState, } from 'react'

function Counter()
{
    const [count, setCount] = useState(10);
    const [step, setStep] = useState(1);
    return (
        <div>
        <h2>Counter value: {count}</h2>
        <input 
        type='number'
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value))}
        />
        <br/>
        <button onClick={() => setCount(count+step)}>Increment</button>
        <button onClick={() => setCount(count-step)}>Decrement</button>
        </div>
    )
}

export default Counter;