import React, { useContext, useState } from 'react';
import Layout from '../../Components/Layout';
import * as S from '../../Components/assets/Styles/Pages/services';
import { AuthContext } from '../../context/Auth';
import { ServicesContext } from '../../context/Services';
import NewService from '../../Components/NewService';


//import ImgServices from '../../Components/assets/img/'

export default function Services() {
    const { user, signed } = useContext(AuthContext);
    const { service, loadServiceByIdCliente, updateService, reload, setReload, allServices } = useContext(ServicesContext);
    const [admStatus, setAdmstatus] = useState('');
    let tipo = 'ADM'


    loadServiceByIdCliente(user.id, user.nome);

    const statusByAdm = (idService) => {
        setReload(!reload)
        let data = {
            status: admStatus
        };
        if (data.status.length > 0) {
            updateService(idService, data);
            setAdmstatus('');
        }
    };


    const clickToCancel = (idService) => {
        setReload(!reload)
        let data = {
            status: 'Cancelado'
        };
        updateService(idService, data);
    };
    const userPerName = Object.values(allServices).reduce(function (acumulador, user) {
        if (!acumulador[user.userName]) {
            acumulador[user.userName]=[];
        }
        acumulador[user.userName].push(user);
        return acumulador;
    }, {});
    console.log(userPerName);
    if (tipo == 'ADM') {
        return (
            <Layout>
                <S.Container>
                    <S.ItensTitulo className='titulo'>
                        <h1>Serviços</h1>
                    </S.ItensTitulo>
                    <S.Itens>
                        <NewService tituloButton={'+ serviços'} />
                        <S.MyScrool  >
                            {
                                Object.keys(allServices).map((item, index,arr) => {
                                    return (
                                        <div key={index}>
                                            <h2>Nome :{item.userName}</h2>
                                            <div className='itensServices'>
                                                <label>Serviço :<span>{item.tipoDeServico}</span></label>
                                                <label>Pedido em<span>{item.dataPedido}</span></label>
                                                <label>Agendado P/ :<span>{item.dataService}</span></label>
                                                <S.Status Status={item.status.toLowerCase()}  >Status :<span className='status' >{item.status}</span></S.Status>
                                                <select onChange={(e) => setAdmstatus(e.target.value)} defaultvalue={''}>
                                                    <option value={''}></option>
                                                    <option value={'Aberto'}>Aberto</option>
                                                    <option value={'Cancelado'}>Cancelado</option>
                                                    <option value={'Andamento'}>Andamento</option>
                                                    <option value={'Finalizado'}>Finalizado</option>
                                                </select>
                                                <S.MyButton onClick={() => statusByAdm(item.id)}>Atualizar</S.MyButton>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </S.MyScrool>
                    </S.Itens>
                </S.Container>
            </Layout >
        )
    };
    return (
        <Layout>
            <S.Container>
                <S.ItensTitulo className='titulo'>
                    <h1>Serviços</h1>
                </S.ItensTitulo>
                <S.Itens>
                    <NewService tituloButton={'+ serviços'} />
                    <S.MyScrool  >
                        {
                            service.length !== 0 && Object.values(service).map((item, index) => {
                                return (

                                    <div key={index}>
                                        <h2>SERVIÇO {index + 1}</h2>
                                        <div className='itensServices'>
                                            <label>Serviço :<span>{item.tipoDeServico}</span></label>
                                            <label>Pedido em<span>{item.dataPedido}</span></label>
                                            <label>Agendado P/ :<span>{item.dataService}</span></label>
                                            <S.Status Status={item.status.toLowerCase()}  >Status :<span className='status' >{item.status}</span></S.Status>
                                            <S.MyButton onClick={() => clickToCancel(item.id)}>Cancelar</S.MyButton>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </S.MyScrool>
                </S.Itens>
            </S.Container>
        </Layout >
    );
}