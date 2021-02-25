import React from 'react'
import './App.css';
import Login from "./components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Search from "./components/Search/Search";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Route path='/' exact render={() => <Login/>} />
                <Route path='/search' render={() => <Search/>} />
            </BrowserRouter>
        </>
    );
}

export default App;