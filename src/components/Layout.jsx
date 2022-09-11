import React, { Component } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';
import Auth from '../pages/Auth';
import Main from '../pages/Main';





function Layout({userConnected,setUserConnected,myStorage}) {
        return (
            <Routes >
                <Route path="/authentification" element={<Auth/>} />
                <Route path="/" element={<Main/>}/>
            </Routes>
        )
    }

export default Layout