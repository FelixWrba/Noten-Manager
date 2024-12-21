import React from "react";

// Import and init dependencies for ChartJS 
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function Diagram({ data }) {
    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <div className="chart-container column-box dashboard-item">
        <h3>Notendurchschnittsverlauf</h3>
        <Line data={data} options={options} className="chart" />
    </div>;
}

export default Diagram;