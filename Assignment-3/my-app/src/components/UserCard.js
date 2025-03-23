import React from 'react';

const UserCard = ({ name, email }) => {
    return (
        <div className="border border-gray-300 p-4 rounded-lg shadow-md bg-white mb-4">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-gray-600">{email}</p>
        </div>
    );
};

export default UserCard;