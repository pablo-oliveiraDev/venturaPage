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
           
                setUser(JSON.stringify(storageUser));
                setLoading(false);
            
          
        }
        loadingStorage();

    }, [storageUser]);
    //login users
    async function login(email, password) {
        setLoadingAuth(true);
        await api.get(`/logeed?user=${email}&&?password=${password}`)
            .then((res) => {
                let dataUser = {
                    id: res.data[0].id,
                    nome: res.data[0].nome,
                    sobrenome: res.data[0].sobrenome,
                    email: res.data[0].email,
                    cpf: res.data[0].cpf,
                    telefone: res.data[0].telefone,
                    senha: res.data[0].senha,
                    rua: res.data[0].rua,
                    numero: res.data[0].numero,
                    cep: res.data[0].cep,
                    cidade: res.data[0].cidade,
                    uf: res.data[0].uf,
                    bairro: res.data[0].bairro,
                    data_cadastro: res.data[0].data_cadastro,

                };
                if (dataUser) {
                    setUser(dataUser);
                    storageUser(dataUser);
                    setLoading(false);
                    toast.success('Bem vindo a Ventura Refrigeração!👍');
                } else {
                    toast.error('Email ou senha incorretos tente novamente');
                    return;
                };


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
        toast.info('Logout efetuado com sucesso!🙁');
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