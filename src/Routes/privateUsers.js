import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/Auth';

export default function PrivateUsers() {
    const { signed }=useContext(AuthContext);

    if (signed) {
        return <Outlet />
    }else{
        toast.error('Para ter acesso a todo nosso conteudo crie o seu login 😁')
        return <Navigate to='/'/>
    }

}