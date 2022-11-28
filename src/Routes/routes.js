import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import DefaultPage from '../Pages/DefaultPage';


export default function MainRoutes() {
    return (
        <Routes>
            <Route path='*' element={<DefaultPage />}/>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/services' element={<Services />} />
        </Routes>
    );
}