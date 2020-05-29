import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from "./Components/HomeComponent";
import JobDetailComponent from "./Components/JobDetailComponent";
import JobRowComponent from "./Components/JobRowComponent";
import JobTableComponent from "./Components/JobTableComponent";
import JobListContainer from "./Containers/JobListContainer";

function App() {
    return (
        <div className="container">
            <JobListContainer/>
        </div>
    );
}

export default App;
