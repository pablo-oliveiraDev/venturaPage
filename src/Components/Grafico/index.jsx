import React from 'react';
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

const data = [
    { name: 'JAN', CONCLUIDO: 2400, ANDAMENTO: 2400 },
    { name: 'FEV', CONCLUIDO: 1398, ANDAMENTO: 2210 },
    { name: 'MAR', CONCLUIDO: 9800, ANDAMENTO: 2290 },
    { name: 'ABR', CONCLUIDO: 3908, ANDAMENTO: 2000 },
    { name: 'MAI', CONCLUIDO: 4800, ANDAMENTO: 2181 },
    { name: 'JUN', CONCLUIDO: 3800, ANDAMENTO: 2500 },
    { name: 'JUL', CONCLUIDO: 4300, ANDAMENTO: 2100 },
    { name: 'AGO', CONCLUIDO: 4300, ANDAMENTO: 2100 },
    { name: 'SET', CONCLUIDO: 4300, ANDAMENTO: 2100 },
    { name: 'OUT', CONCLUIDO: 4300, ANDAMENTO: 2100 },
    { name: 'NOV', CONCLUIDO: 4300, ANDAMENTO: 2100 },
    { name: 'DEZ', CONCLUIDO: 4300, ANDAMENTO: 2100 },
];

const ComposeGraphics = () => {


    return (
        <S.DivGrafico>

            <h1 style={{ margin: '20px' }}>Serviços</h1>
            <ComposedChart width={730} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="CONCLUIDO" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="CONCLUIDO" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="ANDAMENTO" stroke="#ff7300" />
            </ComposedChart>
        </S.DivGrafico>
    );
}


export default ComposeGraphics;