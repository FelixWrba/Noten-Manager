import '../styles/settings.css';

function SettingsCard({title, id, options}) {
    return (<div className='settings-card'>
        <h3 className='title'>{title}</h3>
        {options.map(option => (<span>{option.title}</span>))}
    </div>);
}

export default SettingsCard;