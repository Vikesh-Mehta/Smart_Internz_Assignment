import React from 'react';
import TextUpdater from './components/TextUpdater';
import FormComponent from './components/FormComponent';
import UserCard from './components/UserCard';
import Button from './components/Button';
import LoginForm from './components/LoginForm';

const App = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">React Assignments</h1>
            <TextUpdater />
            <FormComponent />
            <UserCard name="John Doe" email="john@example.com" />
            <Button />
            <LoginForm />
        </div>
    );
};

export default App;