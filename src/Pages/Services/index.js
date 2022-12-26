import React, { useContext } from 'react';
import Layout from '../../Components/Layout';
import * as S from '../../Components/assets/Styles/Pages/services';
import { AuthContext } from '../../context/Auth';
import { ServicesContext } from '../../context/Services';
import NewService from '../../Components/NewService';
//import ImgServices from '../../Components/assets/img/'

export default function Services() {
    const { user } = useContext(AuthContext);
    const { service, loadServiceByIdCliente } = useContext(ServicesContext);

    const HandleService = () => {
        loadServiceByIdCliente(user.id, user.nome);
    };
    return (
        <Layout>
            <S.Container>
                <S.Itens>
                    <h1>Serviços</h1>
                </S.Itens>
                <S.Itens>
                    <S.MyButton variant='primary' onClick={() => HandleService()}>Verificar Serviços</S.MyButton>
                    <NewService tituloButton={'+ serviços'} />
                </S.Itens>
            </S.Container>
        </Layout>
    );
}