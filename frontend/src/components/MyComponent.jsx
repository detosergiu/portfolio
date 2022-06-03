import { useState } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);

    const increaseCounter = () => {
        setCount(count + 1);
    };

    return (
        <div>
            Asta mi componenta
            <div>{count}</div>
            <button onClick={increaseCounter}> Increase counter </button>
        </div>
    );
}

export default MyComponent;
