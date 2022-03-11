import React from 'react';

const Counter = () => {
    let count = 0;
    const incrementCount = () => {
        count = count + 1;
    };

    return (
        <div>
            <button onClick={incrementCount()}></button>
        </div >
    );
};

export default Counter;




