import '../styles/settings.css';

function SettingsCard({ title, preferred, options, getClick, address }) {
    function handleClick() {
        getClick(address);
    }

    function getOptionName(id) {
        return options.find(option => option.id === id).title || -1;
    }

    return (<div className='settings-card' role='button' onClick={handleClick}>
        <h3>{title}</h3>
        <span>{getOptionName(preferred)}</span>
    </div>);
}

export default SettingsCard;