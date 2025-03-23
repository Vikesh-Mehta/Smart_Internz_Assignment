import React, { useState } from 'react';

const FormComponent = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
        alert(`Submitted: ${inputValue}`);
        setInputValue(''); // Clear input after submission
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-2">Form Component</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter something..."
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600 transition duration-200">
                Submit
            </button>
        </form>
    );
};

export default FormComponent;