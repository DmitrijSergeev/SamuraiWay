import React from 'react';
import './App.css';
import {Header} from "./components/Haeder/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Navbar} from "./components/Navbar/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";
import {Error} from "./components/Error/Error";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>

                    <Route path={'/profile'} element={<Profile
                    />}/>
                    <Route path={'/dialogs'} element={<Dialogs
                    />}
                    />

                    <Route path={'*'} element={<Error />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
