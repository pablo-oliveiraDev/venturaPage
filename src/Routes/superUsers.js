import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/Auth';

export default function SuperUsers() {
    const { signed, user } = useContext(AuthContext);

    if (signed && user.tipo === 'superUser') {
        return <Outlet />
    } else {
        toast.error('Você não tem credências de superUser 🙅‍♀️')
        return <Navigate to='/' />
    }

}