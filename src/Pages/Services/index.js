import React, { useContext,useState } from 'react';
import Layout from '../../Components/Layout';
import * as S from '../../Components/assets/Styles/Pages/services';
import { AuthContext } from '../../context/Auth';
import { ServicesContext } from '../../context/Services';
import NewService from '../../Components/NewService';
//import ImgServices from '../../Components/assets/img/'

export default function Services() {
    const { user } = useContext(AuthContext);
    const { service, loadServiceByIdCliente } = useContext(ServicesContext);
    const [pStatus, setPstatus]=useState('');

    const HandleService = () => {
        loadServiceByIdCliente(user.id, user.nome);
    };
    return (
        <Layout>
            <S.Container>
                <S.ItensTitulo className='titulo'>
                    <h1>Serviços</h1>
                </S.ItensTitulo>
                <S.Itens>
                    <S.MyScrool status={pStatus}  >
                        <NewService tituloButton={'+ serviços'} />
                        <S.MyButton onClick={() => HandleService()}> Ver Meus Serviços</S.MyButton>
                        {
                            service.length !== 0 && Object.values(service).map((item, index) => {
                                return (
                                    <div key={index}>
                                        <h2>SERVIÇO {index + 1}</h2><label>Serviço :<span>{item.tipoDeServico}</span></label>
                                        <label>Nome :<span>{item.userName}</span></label>{()=>setPstatus('Aberto')}
                                        <label>Pedido em :<span>{item.dataService}</span></label>{console.log(item.status)}
                                        <label className='status'>Pedido em :<span  >{item.status}</span></label>
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