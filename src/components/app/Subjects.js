import './styles/app.css';
import Searchbar from './UI/Searchbar';
import SubjectBox from './UI/SubjectBox';

function Overview() {
    return (<div className='page-container'>
        <Searchbar placeholder='Fächer durchsuchen' />
        <ul>
            <SubjectBox name='Mathematik' average={3.9} />
            <SubjectBox name='Deutsch' average={1.2} />
            <SubjectBox name='Englisch' average={2.0} />
        </ul>
    </div>);
}

export default Overview;