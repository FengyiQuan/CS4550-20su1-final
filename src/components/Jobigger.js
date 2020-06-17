import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import JobListContainer from "../containers/JobListContainer";
import JobDetailComponent from "./JobDetailComponent";
import WikiComponent from './WikiComponent'
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import ProfileComponent from "./ProfileComponent";

export default class Jobigger extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/login"
                           exact={true}
                           component={LoginComponent}/>

                    <Route path="/register"
                           exact={true}
                           component={RegisterComponent}/>

                    <Route path="/profile"
                           exact={true}
                           component={ProfileComponent}/>

                    <Route path='/'
                           exact={true}
                           component={HomeComponent}/>

                    <Route path='/PROTOTYPE'
                           exact={true}
                           component={WikiComponent}/>

                    <Route path='/:layout/jobs'
                           exact={true}
                           component={JobListContainer}/>


                    <Route path='/detail/:id'
                           exact={true}
                           component={JobDetailComponent}/>


                </div>
            </BrowserRouter>
        )
    }
}