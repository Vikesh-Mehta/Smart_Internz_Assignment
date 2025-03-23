import React, { useState } from 'react';

const TextUpdater = () => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-2">Text Updater</h2>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type something..."
            />
            <p className="mt-2 text-gray-700">You typed: <span className="font-bold">{text}</span></p>
        </div>
    );
};

export default TextUpdater;