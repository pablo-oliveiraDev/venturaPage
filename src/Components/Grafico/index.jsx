import React, { useContext } from 'react';
import * as S from '../assets/Styles/Components/grafico';
import {
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ComposedChart,
    Area,
    Bar
} from 'recharts';
import { ServicesContext } from '../../context/Services';
import { AuthContext } from '../../context/Auth';
import format from 'date-fns/format';


let data = ''
// const data = [
//     { name: 'JAN', CONCLUIDO: 2400, ANDAMENTO: 2400 },
//     { name: 'FEV', CONCLUIDO: 1398, ANDAMENTO: 2210 },
//     { name: 'MAR', CONCLUIDO: 9800, ANDAMENTO: 2290 },
//     { name: 'ABR', CONCLUIDO: 3908, ANDAMENTO: 2000 },
//     { name: 'MAI', CONCLUIDO: 4800, ANDAMENTO: 2181 },
//     { name: 'JUN', CONCLUIDO: 3800, ANDAMENTO: 2500 },
//     { name: 'JUL', CONCLUIDO: 4300, ANDAMENTO: 2100 },
//     { name: 'AGO', CONCLUIDO: 4300, ANDAMENTO: 2100 },
//     { name: 'SET', CONCLUIDO: 4300, ANDAMENTO: 2100 },
//     { name: 'OUT', CONCLUIDO: 4300, ANDAMENTO: 2100 },
//     { name: 'NOV', CONCLUIDO: 4300, ANDAMENTO: 2100 },
//     { name: 'DEZ', CONCLUIDO: 4300, ANDAMENTO: 2100 },
// ];

const ComposeGraphics = () => {
    const { user } = useContext(AuthContext);
    const { service, loadServiceByIdCliente } = useContext(ServicesContext);
    loadServiceByIdCliente(user.id, user.nome);
    console.log(service);
    let countConcluido = 0;
    let countAndamento = 0;
    let countAberto = 0;
    let countCancelado = 0;
    data = [
    Object.values(service).map((item, index) => {
       
        return (
            countConcluido = item.status.toLowerCase() === 'finalizado' ? (countConcluido += 1) : (countConcluido += 0),
            countAndamento = item.status.toLowerCase() === 'andamento' ? (countAndamento += 1) : (countAndamento += 0),
            countAberto = item.status.toLowerCase() === 'aberto' ? (countAberto += 1) : (countAberto += 0),
            countCancelado = item.status.toLowerCase() === 'cancelado' ? (countAberto += 1) : (countAberto += 0),            
            { name: item.dataPedido, CONCLUIDO: countConcluido, ANDAMENTO: countAndamento, ABERTO: countAberto,CANCELADO:countCancelado }
        )
        
    })
];
    return (
        <S.DivGrafico>
          
            <h1 style={{ margin: '20px' }}>Serviços</h1>
            <ComposedChart width={730} height={250} data={data[0]}>
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="ABERTO" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="CONCLUIDO" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="ANDAMENTO" stroke="#ff7300" />
                <Line type="monotone" dataKey="CANCELADO" stroke="#ff1e00" />
            </ComposedChart>
        </S.DivGrafico>
    );
}


export default ComposeGraphics;