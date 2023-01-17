import React, { createContext, useEffect, useState} from 'react';

import { toast } from 'react-toastify';
import api from '../Components/services/api';



export const ServicesContext = createContext({});
export const ServicesProvider = ({ children }) => {
    const [service, setService] = useState('');
    const [allServices, setAllSevices] = useState([]);
    let status = ['Aberto', 'Andamento', 'Cancelado', 'Finallizado'];

    useEffect(() => {
        async function loadServices() {
            await api.get('/servicos')
                .then((res) => {
                    setAllSevices(res.data);
                })
        }
        loadServices();
    }, []);
    async function loadServiceByIdCliente(idCliente, userName) {
        if (idCliente) {
             await api.get(`/servicos/${idCliente}`)
            .then((res)=>{
                setService(res.data);
            })          
        }else{
            toast.info(`Ainda não há serviço aberto para ${userName}`);
        };
    };
    async function newService(
        idCliente,
        userName,
        email,
        cpf,
        telefone,
        cidade,
        rua,
        numero,
        cep,
        uf,
        bairro,
        tipoDeServico,
        breveDescricao,
        dataService) {       
        await api.post('/servicos', {
            idCliente, userName, cpf, telefone, cidade, rua,numero,cep,uf,bairro, tipoDeServico, breveDescricao, dataService, status: status[0].toString(), dataPedido: new Date()
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
export default ServicesProvider;