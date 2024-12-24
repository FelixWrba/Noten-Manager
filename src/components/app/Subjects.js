import { Link } from 'react-router-dom';
import './styles/app.css';
import Searchbar from './UI/Searchbar';
import SubjectBox from './UI/SubjectBox';
import { Add } from '@mui/icons-material';

function Overview() {
    document.title = 'Noten Manager - Fächer';
    const subjects = [
        {
            name: 'Mathematik',
            average: 3.9
        },
        {
            name: 'Deutsch',
            average: 1.2
        },
        {
            name: 'Mathematik',
            average: 2.0
        }
    ]

    return (<div className='page-container'>
        <Searchbar placeholder='Fächer durchsuchen' />
        <ul className='subject-list dashboard-item'>
            {subjects.map(({ name, average }, index) => <SubjectBox name={name} average={average} key={index} id={index} />)}
        </ul>
        <Link to='/app/subjects/new' className='add-icon'>
            <Add color='white' />
        </Link>
    </div>);
}

export default Overview;