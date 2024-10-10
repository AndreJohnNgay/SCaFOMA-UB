import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

function PieChart() {
    const data = {
        labels: ['Cafeteria A', 'Cafeteria B', 'Cafeteria C'],
        datasets: [
            {
                label: 'Sales by Cafeteria',
                data: [4000, 3000, 5000],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    return <Pie data={data} />;
}

export default PieChart;
