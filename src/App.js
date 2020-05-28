import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from "./Components/HomeComponent";
import JobDetailComponent from "./Components/JobDetailComponent";

function App() {
    return (
        <div className="container">
            <JobDetailComponent/>
        </div>
    );
}

export default App;
