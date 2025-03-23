import React from 'react';

const Button = () => {
    const handleClick = () => {
        console.log("Button clicked!");
        alert("Button clicked!");
    };

    return (
        <button
            onClick={handleClick}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 mb-4"
        >
            Click Me
        </button>
    );
};

export default Button;