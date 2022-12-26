import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../Components/services/api';


export const ServicesContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [service, setService] = useState('');
    const [allServices, setAllSevices] = useState([]);

    useEffect(() => {
        async function loadServices() {
            await api.get('/servicos')
                .then((res) => {
                    setAllSevices(res.data);
                })
        }
        loadServices();
    }, []);

    function loadServiceByIdCliente(idCliente, userName) {
        if (idCliente) {
            fetch(`${api}/servicos/${idCliente}`)
            .then(res =>res.json())
            .then((data)=>{
                setService(data);
            });
           
        }else{
            toast.info(`Ainda não há serviço aberto para ${userName}`);
        };

    };




    async function newService(idCliente, userName, cpf, telefone, cidade, rua, tipoDeSevico, breveDescricao) {
        await api.post('/servicos', {
            idCliente, userName, cpf, telefone, cidade, rua, tipoDeSevico, breveDescricao, status: 'Aberto', dataPedido: new Date()
        }).then((res) => {
            if (res.status === 201) {
                toast.success('Serviço agendado com sucesso!Em breve ligaremos para Confirmar a data e hora que estaremos indo até o local.👍')
            }

        })
            .catch((err) => {
                toast.error('Algo deu errado!Por favor tente novamente!😣')
            });

    };

    return (
        <ServicesContext.Provider value={{
            allServices,
            service,
            newService,
            loadServiceByIdCliente,

        }}
        >
            {children}
        </ServicesContext.Provider>
    );
}
export default AuthProvider;