import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import DefaultPage from '../Pages/DefaultPage';
import PrivateUsers from './privateUsers';
import SuperUsers from './superUsers';



export default function MainRoutes() {
    return (
        <Routes>
            <Route path='*' element={<DefaultPage />} />
            <Route path='/' element={<Home />} />
            <Route element={<PrivateUsers />}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/services' element={<Services />} />
            </Route>
            <Route element={<SuperUsers />}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/services' element={<Services />} />
            </Route>

        </Routes>
    );
}