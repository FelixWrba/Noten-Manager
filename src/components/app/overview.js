import { useState } from "react";
import Diagram from "./UI/Diagram";
import Mark from './UI/Mark';
import './styles/app.css';

function Overview() {
    const [data, setData] = useState({
        average: 4.5,
    });

    const markWords = [undefined, 'Sehr gut', 'Gut', 'Befriedigend', 'Ausreichend', 'Mangelhaft', 'Ungenügend'];

    return (<div className="page-container">
        <h1>Willkommen zurück, <span className="green">Name</span> 👋</h1>
        <div className="flex-box">
            {/* Average Mark overview */}
            <div className="dashboard-item">
                <Mark title='Notendurchschnitt' value={data.average} />
                <p>Deine Noten sind <b className="green">
                    {markWords[Math.round(data.average)]}
                </b>. {data.average >= 4.5 && (<><b className="warning">Achtung:</b> Du bist durchfallgefärdet.</>)}</p>
            </div>
            <Diagram data={{
                labels: ['Januar', 'Februar', 'März', 'April', 'Mai'],
                datasets: [
                    {
                        label: 'Notenverlauf',
                        data: [1, 2, 5, 3, 6],
                        borderColor: 'rgb(0, 211, 0)',
                        backgroundColor: 'rgb(169, 255, 169)',
                        tension: 0.4,
                    }
                ],
            }} />
        </div>
        <div className="flex-box">
            <div className="column-box dashboard-item">
                <h3>Zuletzt eingetragen</h3>
                <div className="horizontal-scroll">
                    <Mark value={6} title='Deutsch' />
                    <Mark value={3} title='Mathe' />
                    <Mark value={2} title='Englisch' />
                </div>
            </div>
            <div className="column-box dashboard-item">
                <h3>Übersicht ausdrucken</h3>

            </div>
        </div>
        <div className="column-box dashboard-item">
            <h3>Beste/Schlechteste Fächer</h3>
        </div>
    </div>);
}

export default Overview;