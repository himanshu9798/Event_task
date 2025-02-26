import React, { useState, useEffect } from 'react';

function Counter() {
    const [counter, setCounter] = useState(() => {
        return parseInt(localStorage.getItem('value')) || 0; // Get value from localStorage or default to 0
    });

    useEffect(() => {
        localStorage.setItem('value', counter); // Save counter to localStorage whenever it changes
    }, [counter]);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Counter using Local Storage</h1>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
