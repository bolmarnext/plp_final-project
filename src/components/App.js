import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CaseFileForm from './components/Police/CaseFileForm';
import CaseFileList from './components/Police/CaseFileList';
import AssignCase from './components/Court/AssignCase';
import InmateForm from './components/Prison/InmateForm';
import InmateList from './components/Prison/InmateList';

const App = () => {
    const [token, setToken] = useState('');

    return (
        <Router>
            <div>
                <h1>Criminal Justice Management System (CJMS)</h1>
                <Switch>
                    <Route path="/login">
                        <Login setToken={setToken} />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/police/case">
                        <CaseFileForm token={token} />
                        <CaseFileList token={token} />
                    </Route>
                    <Route path="/court/assign">
                        <AssignCase token={token} />
                    </Route>
                    <Route path="/prison/inmate">
                        <InmateForm token={token} />
                        <InmateList token={token} />
                    </Route>
                    <Route path="/" exact>
                        <h2>Welcome to CJMS</h2>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;