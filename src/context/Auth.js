import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../Components/services/api';


export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function loadingStorage() {
            const storageUser = localStorage.getItem('logedUsers');
            if (storageUser) {
                setUser(JSON.stringify(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadingStorage();

    }, []);
    //login users
    async function login(email, password) {
        setLoadingAuth(true);
        await api.get(`/logeed?user=${email}&?password=${password}`)
            .then((res) => {
                if (res.data.length !== 0) {
                    
                    setUser(res.data);
                    storageUser(res.data);
                    setLoading(false);
                    toast.success('Bem vindo a Ventura Refrigeração!👍');
                } else {
                    toast.error('Email ou senha incorretos tente novamente');
                    return;
                }


            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                toast.error('Que pena!\nAlgo deu errado!😓');

            })
    };

    async function cadastro(
        nome,
        sobrenome,
        email,
        cpf,
        telefone,
        password,
        rua,
        numero,
        cep,
        cidade,
        uf,
        bairro) {

        await api.post(`/users/`, {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            cpf: cpf,
            telefone: telefone,
            senha: password,
            rua: rua,
            numero: numero,
            cep: cep,
            cidade: cidade,
            uf: uf,
            bairro: bairro,
            data_cadastro: new Date()

        })
            .then(() => {
                toast.success('Cadastro ralizado com sucesso!\nSeja bem vindo!😃');
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                toast.error('Que pena!\nAlgo deu errado!⚠');
            });

    };

    function storageUser(data) {
        localStorage.setItem('logedUsers', JSON.stringify(data));
    };

    async function logOut() {
        localStorage.removeItem('logedUsers');
        setUser(null);
    };
    return (
        <AuthContext.Provider value={{
            signed: !!user,
            loading,
            user,
            login,
            cadastro,
            setUser,
            storageUser,
            logOut,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;