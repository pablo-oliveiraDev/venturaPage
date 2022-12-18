import React, { Component } from 'react';
import {
    LineChart,
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
    { name: 'Jan', pv: 2400, amt: 2400 },
    { name: 'Page B', pv: 1398, amt: 2210 },
    { name: 'Page C', pv: 9800, amt: 2290 },
    { name: 'Page D', pv: 3908, amt: 2000 },
    { name: 'Page E', pv: 4800, amt: 2181 },
    { name: 'Page F', pv: 3800, amt: 2500 },
    { name: 'Page G', pv: 4300, amt: 2100 },
];

class SimpleLineChart extends Component {

    render() {
        return (
            <ComposedChart width={730} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
        );
    }
}

export default SimpleLineChart;