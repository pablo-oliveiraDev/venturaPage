import React, { useContext, useState } from 'react';
import Layout from '../../Components/Layout';
import * as S from '../../Components/assets/Styles/Pages/services';
import { AuthContext } from '../../context/Auth';
import { ServicesContext } from '../../context/Services';
import NewService from '../../Components/NewService';
//import ImgServices from '../../Components/assets/img/'

export default function Services() {
    const { user,signed} = useContext(AuthContext);
    const { service, loadServiceByIdCliente, updateService,reload,setReload } = useContext(ServicesContext);
    const [pStatus, setPstatus] = useState('');


    loadServiceByIdCliente(user.id, user.nome);

       
    
    const clickToCancel = (idService) => {
        setReload(!reload)
        let data = {
            status: 'Cancelado'
        };
        updateService(idService, data);
    }
    return (
        <Layout>
            <S.Container>
                <S.ItensTitulo className='titulo'>
                    <h1>Serviços</h1>
                </S.ItensTitulo>
                <S.Itens>
                    <S.MyScrool  >
                        <NewService tituloButton={'+ serviços'} />
                        
                        {
                            service.length !== 0 && Object.values(service).map((item, index) => {
                                return (

                                    <div key={index}>
                                        <h2>SERVIÇO {index + 1}</h2>
                                        <div className='itensServices'>
                                            <label>Serviço :<span>{item.tipoDeServico}</span></label>
                                            <label>Nome :<span>{item.userName}</span></label>
                                            <label>Pedido em :<span>{item.dataService}</span></label>{console.log(item.status)}
                                            <S.Status Status={item.status.toLowerCase()}  >Status :<span className='status' >{item.status}</span></S.Status>
                                            <S.MyButton onClick={()=>clickToCancel(item.id)}>Cancelar</S.MyButton>
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