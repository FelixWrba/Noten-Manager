import './styles/style.css';

function Header() {
    return (<div className='homepage--header'>
        <h1>Noten Manager</h1>
        <p>Behalte deine schulischen Leinstungen kostenlos im Überblick.</p>
        <a href="/get-started" className='link-btn'>Jetzt loslegen</a>
    </div>);
}

export default Header;