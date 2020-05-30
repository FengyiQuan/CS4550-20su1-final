import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import JobListContainer from "../containers/JobListContainer";
import JobDetailComponent from "./JobDetailComponent";

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
                        path='/:layout/jobs'
                        exact={true}
                        component={JobListContainer}/>

                    {/*<Route*/}
                    {/*    path='/joblist'*/}
                    {/*    exact={true}*/}
                    {/*    component={JobListContainer}*/}
                    {/*/>*/}

                    {/*<Route*/}
                    {/*    path='/PROTOTYPE'*/}
                    {/*    exact={true}*/}
                    {/*    component={WikiComponent}*/}
                    {/*/>*/}
                    <Route
                        path='/detail/:id'
                        exact={true}
                        component={JobDetailComponent}
                    />

                    {/*<Route*/}
                    {/*    path='/editor'*/}
                    {/*    exact={true}*/}
                    {/*    component={CourseEditorComponent}/>*/}

                </div>
            </BrowserRouter>
        )
    }
}