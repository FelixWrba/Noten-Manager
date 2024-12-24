import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import TitleBar from "../layout/TitleBar";
import Mark from './UI/Mark';
import Diagram from './UI/Diagram';
import './styles/app.css';
import './styles/subject.css';
import { Edit, Close, LockReset, Delete } from '@mui/icons-material';

function Subject() {
    const { subjectId } = useParams();
    document.title = `Noten Manager - Mathematik (=${subjectId})`;

    const [data, setData] = useState({
        average: 2.33,
    });
    const markWords = ['Wie??', 'Sehr gut', 'Gut', 'Befriedigend', 'Ausreichend', 'Mangelhaft', 'Ungenügend'];

    const editPopup = useRef();
    const handleEditPopup = () => {
        editPopup.current.classList.toggle('open');
    }

    return (<>
        <TitleBar title={'Fächer'} />
        <div className="page-container">
            <div className="dashboard-item subject-header mb-16">
                <h1>Mathematik</h1>
                <button className="icon-btn relative" onClick={handleEditPopup}>
                    <Edit className="icon" />
                </button>
                <div className="edit-popup" ref={editPopup}>
                    <button onClick={handleEditPopup}><Close /><span>Schließen</span></button>
                    <button><Edit /><span>Bearbeiten</span></button>
                    <button><LockReset /><span>Zurücksetzen</span></button>
                    <button><Delete /><span>Löschen</span></button>
                </div>
            </div>
            <div className="dashboard-item mb-16">
                <Mark title='Durchschnitt' value={data.average} />
                <p>Deine Noten sind <b className="green">
                    {markWords[Math.round(data.average)]}
                </b>. {data.average >= 4.5 ? (<><b className="warning">Achtung:</b> Mathematik könnte deine Versetzung gefärden.</>) : (<>Das Klassenziel wurde hier erfüllt.</>)}</p>
            </div>
            <div className="flex-box">
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
                <div className="dashboard-item">
                    <h2 className="lnw-title">Große LNW</h2>
                    <h3>Schulaufgaben/Tests</h3>
                    <div className="horizontal-scroll">
                        <Mark title='12.6.24' value={2.7} small={true} />
                        <Mark title='15.9.24' value={2.7} small={true} />
                        <Mark title='1.10.24' value={2.7} small={true} />
                    </div>
                </div>
                <div className="dashboard-item">
                    <h2 className="lnw-title">Kleine LNW</h2>
                    <h3>Schriftlich</h3>
                    <div className="horizontal-scroll">
                        <Mark title='12.6.24' value={2.7} />
                        <Mark title='15.9.24' value={2.7} />
                        <Mark title='1.10.24' value={2.7} />
                    </div>
                    <h3>Mündlich</h3>
                    <div className="horizontal-scroll">
                        <Mark title='12.6.24' value={2.7} />
                        <Mark title='15.9.24' value={2.7} />
                        <Mark title='1.10.24' value={2.7} />
                    </div>
                </div>
            </div>

        </div>
    </>);
}

export default Subject;