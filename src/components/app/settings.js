import './styles/app.css';
import './styles/settings.css';
import SettingsCard from './UI/SettingsCard';

function Overview() {
    document.title = 'Noten Manager - Einstellungen';
    return (<div className='page-container'>
        <h1>Einstellungen</h1>
        <h2>Aussehen</h2>
        <SettingsCard title='Aussehen' id='theme' options={[
            {title: 'Hell', id: 'light'},
            {title: 'Dunkel', id: 'dark'}
        ]} />
    </div>);
}

export default Overview;