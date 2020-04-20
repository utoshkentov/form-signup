import React from 'react';
import './App.css';
import SignUp from "./components/SignUp/SignUp";
import {Route, Switch, Redirect} from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
        <CssBaseline />
        <Navbar />
        <Switch>
            <Route exact path='/signup' component={SignUp} />
            <Redirect to='/' />
        </Switch>
    </>
  );
}

export default App;
