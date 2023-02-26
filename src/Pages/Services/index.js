import React, { useContext, useState } from 'react';
import Layout from '../../Components/Layout';
import * as S from '../../Components/assets/Styles/Pages/services';
import { AuthContext } from '../../context/Auth';
import { ServicesContext } from '../../context/Services';
import NewService from '../../Components/NewService';
//import { PrinterModal } from '../../Components/PrinterModal/talvez';
import TesteClass  from '../../Components/PrinterModal';
import * as ServIcons from 'react-icons/hi2';
import { toast } from 'react-toastify';





//import ImgServices from '../../Components/assets/img/'

export default function Services() {
    const { user, signed } = useContext(AuthContext);
    const { service, loadServiceByIdCliente, updateService, reload, setReload, allServices, deleteService } = useContext(ServicesContext);
    const [admStatus, setAdmstatus] = useState('');
    const [showPrint, setShowPrint] = useState(null);
    let tipo = user.uf;


    loadServiceByIdCliente(user.id, user.nome);

    const statusByAdm = (idService) => {
        setReload(!reload)
        let data = {
            status: admStatus
        };
        if (data.status.length > 0) {
            updateService(idService, data);
            setAdmstatus('');
            toast.success('Status atualizado com sucesso!');
        }
    };
    const takeDelete = (idService) => {
        var confirm = window.confirm('Tem certeza que deseja excluir esse serviço?\n Essa operação não poderá ser desfeita!');
        if (confirm === true) {
            deleteService(idService);
            setReload(!reload);
            toast.success('Serviço excluido com sucesso!');
        } else {
            toast.info('Delete cancelado !')
        }
    }

    const clickToCancel = (idService) => {
        var confirm = window.confirm('Tem certeza que deseja cancelar o chamado ?\n Essa operação não poderá ser desfeita!');
        if (confirm === true) {
            setReload(!reload);
            let data = {
                status: 'Cancelado'
            };
            updateService(idService, data);
        } else {
            toast.warn('Operação cancelada!')
        }
    };




    // const userPerName = Object.values(allServices).reduce(function (acumulador, user) {
    //     if (!acumulador[user.userName]) {
    //         acumulador[user.userName]=[];
    //     }
    //     acumulador[user.userName].push(user);
    //     return acumulador;
    // }, {});

    if (tipo === 'ADM') {
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
                                Object.values(allServices).map((item, index, arr) => {
                                    return (
                                        <div key={index} >

                                            <h2>Nome :{item.userName}</h2>
                                            <div className='itensServices'>
                                                <label>Serviço :<span>{item.tipoDeServico}</span></label>
                                                <label>Pedido em<span>{item.dataPedido}</span></label>

                                                <S.Status Status={item.status.toLowerCase()}  >Status :<span className='status' >{item.status}</span></S.Status>
                                                <select onChange={(e) => setAdmstatus(e.target.value)} default={''}>
                                                    <option value={''}></option>
                                                    <option value={'Aberto'}>Aberto</option>
                                                    <option value={'Cancelado'}>Cancelado</option>
                                                    <option value={'Andamento'}>Andamento</option>
                                                    <option value={'Finalizado'}>Finalizado</option>
                                                </select>
                                                <div className='boxButtons'>
                                                    <S.MyButton onClick={() => statusByAdm(item.id)}><ServIcons.HiOutlineCog8Tooth className='icons' />Atualizar</S.MyButton>
                                                    <S.MyButton variant='danger' onClick={() => takeDelete(item.id)}><ServIcons.HiOutlineTrash className='icons' />Deletar</S.MyButton>
                                                    <TesteClass printService={item} />
                                                    

                                                </div>
                                                <div className='itenDescricao'>
                                                    <label>Agendado P/ :<span>{item.dataService}</span></label>
                                                    <label>Contato :<span>{item.telefone}</span></label>
                                                    <label>Descrição :<span>{item.breveDescricao}</span></label>

                                                </div>

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
                            service.length !== 0 && Object.values(service).map((itemUser, index) => {
                                return (

                                    <div key={index}>
                                        <h2>SERVIÇO {index + 1}</h2>
                                        <div className='itensServices'>
                                            <label>Serviço :<span>{itemUser.tipoDeServico}</span></label>
                                            <label>Pedido em<span>{itemUser.dataPedido}</span></label>
                                            <label>Agendado P/ :<span>{itemUser.dataService}</span></label>
                                            <S.Status Status={itemUser.status.toLowerCase()}  >Status :<span className='status' >{itemUser.status}</span></S.Status>
                                            <div className='boxButtons'>
                                                <S.MyButton onClick={() => clickToCancel(itemUser.id)} status={itemUser.status.toLowerCase()}><ServIcons.HiOutlineXCircle className='icons' />Cancelar</S.MyButton>
                                            </div>
                                            <div className='itenDescricao'>
                                                <label>Descrição :<span>{itemUser.breveDescricao}</span></label>
                                            </div>
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