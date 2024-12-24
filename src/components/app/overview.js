import { useState } from "react";
import Diagram from "./UI/Diagram";
import Mark from './UI/Mark';
import './styles/app.css';
import SubjectBox from "./UI/SubjectBox";

function Overview() {
    document.title = 'Noten Manager - Übersicht';
    const [data, setData] = useState({
        average: 4.7,
    });

    const markWords = ['Wie??', 'Sehr gut', 'Gut', 'Befriedigend', 'Ausreichend', 'Mangelhaft', 'Ungenügend'];

    const subjects = [{
        name: 'Deutsch',
        average: 1.2
    },
    {
        name: 'Mathematik',
        average: 2.0
    },
    {
        name: 'Mathematik',
        average: 3.9
    }];

    return (<div className="page-container">
        <h1>Willkommen zurück, <span className="green">Name</span> 👋</h1>
        <div className="flex-box">
            {/* Average Mark overview */}
            <div className="dashboard-item">
                <Mark title='Notendurchschnitt' value={data.average} />
                <p>Deine Noten sind <b className="green">
                    {markWords[Math.round(data.average)]}
                </b>. {data.average >= 4.5 ? (<><b className="warning">Achtung:</b> Deine Versetzung ist gefährdet.</>) : (<>Du erreichst das Klassenziel.</>)}</p>
            </div>
            <Diagram data={{
                labels: ['Januar', 'Februar', 'März', 'April', 'Mai'],
                datasets: [
                    {
                        label: 'Notendurchschnittsverlauf',
                        data: [1, 2, 5, 3, 6],
                        borderColor: 'rgb(0, 211, 0)',
                        backgroundColor: 'rgb(169, 255, 169)',
                        tension: 0.4,
                    }
                ],
            }} />
        </div>
        <div className="flex-box">
            <div className="dashboard-item">
                <h3>Zuletzt eingetragen</h3>
                <div className="horizontal-scroll">
                    <Mark value={6} title='Deutsch' />
                    <Mark value={3} title='Mathe' />
                    <Mark value={2} title='Englisch' />
                </div>
            </div>
            <div className="dashboard-item">
                <h3>Ausdrucke/PDFs</h3>
                <button onClick={() => window.print()} className="btn">Notentabelle ausdrucken</button>
                <button onClick={() => window.print()} className="btn light">Übersicht ausdrucken</button>
            </div>
        </div>
        <div className="dashboard-item">
            <h3>Rangliste Fächer nach ...</h3>
            <div className="ranking">
                <button disabled className="btn">Beste</button>
                <button className="btn">Schlechteste</button>
            </div>
            <ul className='subject-list'>
                {subjects.map(({ name, average }, index) => <SubjectBox name={name} average={average} key={index} id={index} />)}
            </ul>
        </div>
    </div>);
}

export default Overview;