import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../Components/services/api';



export const ServicesContext = createContext({});
export const ServicesProvider = ({ children }) => {
    const [service, setService] = useState('');
    const [allServices, setAllSevices] = useState([]);
    const [idCliente, setIdCliente] = useState('');
    const [userName, setUserName] = useState('');
    const [reload,setReload]=useState(null)
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

     function loadServiceByIdCliente(idCliente, userName) {
       setIdCliente(idCliente);
       setUserName(userName);
    };

    useEffect(() => {
        async function loadServiceId(){
        if (idCliente) {
            await api.get(`/servicos/${idCliente}`)
                .then((res) => {
                    setService(res.data);
                })
        } else {
          
            toast.info(`Ainda não há serviço aberto para ${userName}`);
        };
    }
    loadServiceId();        
    }, [idCliente,reload]);
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
            idCliente, userName, cpf, telefone, cidade, rua, numero, cep, uf, bairro, tipoDeServico, breveDescricao, dataService, status: status[0].toString(), dataPedido: new Date()
        }).then((res) => {
            if (res.status === 201) {
                toast.success('Serviço agendado com sucesso!Em breve ligaremos para Confirmar a data e hora que estaremos indo até o local.👍')
            }

        })
            .catch((err) => {
                toast.error('Algo deu errado!Por favor tente novamente!😣')
            });
    };

    async function updateService(IdCliente, data) {
        await api.patch(`/servicos/${IdCliente}`, data)
            .then((res) => {
                if (res.status === 200) {
                    toast.success(res.message);
                }
            })
    }
    return (
        <ServicesContext.Provider value={{
            allServices,
            service,
            reload,
            setReload,
            newService,
            loadServiceByIdCliente,
            updateService,

        }}
        >
            {children}
        </ServicesContext.Provider>
    );
}
export default ServicesProvider;