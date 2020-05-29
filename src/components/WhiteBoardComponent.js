import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import JobListContainer from "../containers/JobListContainer";

export default class WhiteBoardComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/*<Route path="/login" exact={true} component={LoginComponent}/>*/}
                    {/*<Route path="/register" exact={true} component={SignUpComponent}/>*/}
                    {/*<Route path="/profile" exact={true} component={ProfileComponent}/>*/}
                    <Route
                        path='/'
                        exact={true}
                        component={HomeComponent}/>

                    <Route
                        path='/:layout/jobs/:keyword'
                        exact={true}
                        component={JobListContainer}/>

                    {/*<Route*/}
                    {/*    path='/editor'*/}
                    {/*    exact={true}*/}
                    {/*    component={CourseEditorComponent}/>*/}

                </div>
            </BrowserRouter>
        )
    }
}