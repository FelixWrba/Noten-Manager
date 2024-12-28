import { useState, useRef } from 'react';
import './styles/app.css';
import './styles/settings.css';
import SettingsCard from './UI/SettingsCard';

function Overview() {
    document.title = 'Noten Manager - Einstellungen';
    // References div.option-popup
    const optionsPopup = useRef();
    // toggle visibility of optionsPopup 
    const handleOptionsPopup = () => {
        optionsPopup.current.classList.toggle('hidden');
    }
    // store otionsPopup options address
    const [optionsAddress, setOptionsAdress] = useState([0, 0]);

    // structure of settings ui in JSON format
    const settings = [{
        title: 'Aussehen',
        id: 'look',
        settings:
            [{
                title: 'Design',
                id: 'theme',
                options: [{
                    title: 'Hell', id: 'light'
                }, {
                    title: 'Dunkel', id: 'dark'
                }]
            }, {
                title: 'Rundung',
                id: 'rounding',
                options: [{
                    title: 'keine Nachkommastelle', id: '0_digits'
                }, {
                    title: 'eine Nachkommastellen', id: '1_digits'
                },
                {
                    title: 'zwei Nachkommastellen', id: '2_digits'
                }]
            }]
    }];

    const [preferences, setPreferences] = useState([['light', '2_digits']]);

    function handleSelected(address) {
        setOptionsAdress(address);
        handleOptionsPopup();
    }

    function selectOption(option) {
        let newPreferences = [...preferences];
        newPreferences[optionsAddress[0]][optionsAddress[1]] = option;
        setPreferences(newPreferences);
        handleOptionsPopup();
        console.log(preferences);
    }

    return (<div className='page-container'>
        <h1>Einstellungen</h1>
        {/* Translate settings JSON to JSX */}
        {settings.map((section, i) =>
            // Creates a section for each settings[].{...}
            <section key={section.id} className='settings-section'>
                <h2>{section.title}</h2>
                {section.settings.map((setting, j) =>
                    // Creates a settings card for each settings[].options[]. 
                    <SettingsCard
                        key={setting.id}
                        title={setting.title}
                        options={setting.options}
                        preferred={preferences[i][j]}
                        address={[i, j]}
                        getClick={address => handleSelected(address)} />
                )}
            </section>
        )}

        {/* Options Popup */}
        <div className='options-popup hidden' ref={optionsPopup}>
            <h3>Design auswählen:</h3>
            {settings[optionsAddress[0]].settings[optionsAddress[1]].options.map(option =>
                <span
                    className='options-popup-item'
                    role='button'
                    key={option.id}
                    onClick={() => selectOption(option.id)}>{option.title}</span>
            )}
        </div>
        <div className='options-popup-shadow' onClick={handleOptionsPopup}></div>
    </div>);
}

export default Overview;